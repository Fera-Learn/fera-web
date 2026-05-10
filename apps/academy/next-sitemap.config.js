/* eslint-disable @typescript-eslint/no-require-imports -- next-sitemap loads this CommonJS config directly. */

const fs = require("node:fs");
const path = require("node:path");
const Module = require("node:module");
const ts = require("typescript");
const appRoot = __dirname;
const workspaceRoot = path.resolve(appRoot, "../..");

const packageEntryPoints = {
  "@repo/docs": path.join(workspaceRoot, "packages/docs/src/index.ts"),
  "@repo/ui": path.join(workspaceRoot, "packages/ui/src/index.ts"),
};

const packageSourceDirs = {
  "@repo/docs/": path.join(workspaceRoot, "packages/docs/src/"),
  "@repo/ui/": path.join(workspaceRoot, "packages/ui/src/"),
};

const originalResolveFilename = Module._resolveFilename;

Module._resolveFilename = function resolveFilename(
  request,
  parent,
  isMain,
  options,
) {
  if (request.startsWith("@/")) {
    return originalResolveFilename.call(
      this,
      path.join(appRoot, "src", request.slice(2)),
      parent,
      isMain,
      options,
    );
  }

  if (packageEntryPoints[request]) {
    return packageEntryPoints[request];
  }

  for (const [prefix, sourceDir] of Object.entries(packageSourceDirs)) {
    if (request.startsWith(prefix)) {
      return originalResolveFilename.call(
        this,
        path.join(sourceDir, request.slice(prefix.length)),
        parent,
        isMain,
        options,
      );
    }
  }

  return originalResolveFilename.call(this, request, parent, isMain, options);
};

for (const extension of [".ts", ".tsx"]) {
  Module._extensions[extension] = function compileTypeScript(module, filename) {
    const source = fs.readFileSync(filename, "utf8");
    const { outputText } = ts.transpileModule(source, {
      compilerOptions: {
        esModuleInterop: true,
        jsx: ts.JsxEmit.ReactJSX,
        module: ts.ModuleKind.CommonJS,
        resolveJsonModule: true,
        target: ts.ScriptTarget.ES2020,
      },
    });

    module._compile(outputText, filename);
  };
}

const { docsPages } = require("./src/lib/docs/pages.ts");

function getSitemapPriority(slug) {
  if (slug.length === 1) {
    return 0.8;
  }

  if (slug.length === 3 && slug[1] !== "exam-papers") {
    return 0.7;
  }

  if (slug[1] === "exam-papers") {
    return 0.6;
  }

  return 0.6;
}

function getSitemapChangeFrequency(slug) {
  if (slug[1] === "exam-papers" && slug.length > 2) {
    return "monthly";
  }

  return "weekly";
}

const indexableDocsPaths = docsPages
  .filter((page) => page.href !== "/")
  .map((page) => ({
    changefreq: getSitemapChangeFrequency(page.slug),
    loc: page.href,
    priority: getSitemapPriority(page.slug),
  }));

/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: process.env.NEXT_PUBLIC_APP_URL ?? "https://courses.fera.academy",
  sitemapSize: 7000,
  generateRobotsTxt: true,
  exclude: ["/robots.txt", "/sitemap.xml"],
  additionalPaths: async () => indexableDocsPaths,
};

module.exports = config;
