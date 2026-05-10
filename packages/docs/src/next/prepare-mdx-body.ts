const BACKSLASH = "\\";

function findClosingMathDelimiter(
  value: string,
  startIndex: number,
  closingDelimiter: string,
) {
  for (let index = startIndex; index < value.length - 1; index += 1) {
    if (value[index] !== BACKSLASH || value[index - 1] === BACKSLASH) {
      continue;
    }

    let slashCount = 1;

    while (value[index + slashCount] === BACKSLASH) {
      slashCount += 1;
    }

    if (value[index + slashCount] === closingDelimiter) {
      return {
        delimiterEnd: index + slashCount,
        mathEnd: index,
      };
    }
  }

  return null;
}

function protectMathSpan(
  value: string,
  openingDelimiter: string,
  closingDelimiter: string,
) {
  const mathSpan = `\\${openingDelimiter}${value}\\${
    openingDelimiter === "(" ? ")" : "]"
  }`;

  return `{${JSON.stringify(mathSpan)}}`;
}

function isJsxTagStart(value: string, index: number) {
  const next = value[index + 1];

  return value[index] === "<" && !!next && /[A-Za-z!/]/.test(next);
}

function findJsxTagEnd(value: string, startIndex: number) {
  let braceDepth = 0;
  let quote: string | null = null;

  for (let index = startIndex + 1; index < value.length; index += 1) {
    const current = value[index];

    if (quote) {
      if (current === BACKSLASH) {
        index += 1;
        continue;
      }

      if (current === quote) {
        quote = null;
      }

      continue;
    }

    if (current === '"' || current === "'" || current === "`") {
      quote = current;
      continue;
    }

    if (current === "{") {
      braceDepth += 1;
      continue;
    }

    if (current === "}" && braceDepth > 0) {
      braceDepth -= 1;
      continue;
    }

    if (current === ">" && braceDepth === 0) {
      return index;
    }
  }

  return -1;
}

function findMathOpeningDelimiter(value: string, startIndex: number) {
  if (value[startIndex] !== BACKSLASH || value[startIndex - 1] === BACKSLASH) {
    return null;
  }

  let slashCount = 1;

  while (value[startIndex + slashCount] === BACKSLASH) {
    slashCount += 1;
  }

  const delimiter = value[startIndex + slashCount];

  if (delimiter !== "(" && delimiter !== "[") {
    return null;
  }

  return {
    delimiter,
    mathStart: startIndex + slashCount + 1,
  };
}

export function prepareMdxBody(body: string) {
  let prepared = "";

  for (let index = 0; index < body.length; index += 1) {
    const current = body[index];

    if (isJsxTagStart(body, index)) {
      const tagEnd = findJsxTagEnd(body, index);

      if (tagEnd !== -1) {
        prepared += body.slice(index, tagEnd + 1);
        index = tagEnd;
        continue;
      }
    }

    const openingDelimiter = findMathOpeningDelimiter(body, index);

    if (!openingDelimiter) {
      prepared += current;
      continue;
    }

    const closingDelimiter = openingDelimiter.delimiter === "(" ? ")" : "]";
    const mathEnd = findClosingMathDelimiter(
      body,
      openingDelimiter.mathStart,
      closingDelimiter,
    );

    if (!mathEnd) {
      prepared += current;
      continue;
    }

    prepared += protectMathSpan(
      body.slice(openingDelimiter.mathStart, mathEnd.mathEnd),
      openingDelimiter.delimiter,
      closingDelimiter,
    );
    index = mathEnd.delimiterEnd;
  }

  return prepared;
}
