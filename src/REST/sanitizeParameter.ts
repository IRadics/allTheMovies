// src: https://stackoverflow.com/a/40415059/19653844

export function sanitizeParameter(param: string): string {
  const replace = {
    "%": "%25",
    //"!": "%21",
    '"': "%22",
    "#": "%23",
    $: "%24",
    "&": "%26",
    //"'": "%27",
    //"(": "%28",
    //")": "%29",
    //"*": "%2A",
    "+": "%2B",
    ",": "%2C",
    //"-": "%2D",
    //".": "%2E",
    "/": "%2F",
    //":": "%3A",
    //";": "%3B",
    "<": "%3C",
    "=": "%3D",
    ">": "%3E",
    "?": "%3F",
    //"@": "%40",
    "[": "%5B",
    "\\": "%5C",
    "]": "%5D",
    "^": "%5E",
    //"_": "%5F",
    "`": "%60",
    "{": "%7B",
    "|": "%7C",
    "}": "%7D",
    //"~": "%7E",
  };

  for (const key in replace) {
    param = param.replaceAll(key, replace[key as keyof typeof replace]);
  }
  return param;
}
