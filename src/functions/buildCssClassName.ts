export default function buildCssClassName(
  postFix: string,
  ...classNames: string[]
): string {
  let cssClassNames = "";
  classNames.forEach((className) => {
    if (className) {
      cssClassNames = cssClassNames + ` ${className}${postFix}`;
    }
  });

  return cssClassNames;
}
