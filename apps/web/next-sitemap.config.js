/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: process.env.NEXT_PUBLIC_APP_URL ?? "https://fera.academy",
  sitemapSize: 7000,
  generateRobotsTxt: true,
};

export default config;
