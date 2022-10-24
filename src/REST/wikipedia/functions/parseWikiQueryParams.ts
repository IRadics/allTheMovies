export default function parseWikiQueryParams(
  baseUri: string,
  params: object
): string {
  let uri = baseUri;
  Object.entries(params).forEach((param) => {
    const [key, value] = param;
    if (value !== undefined) {
      if (Array.isArray(value)) {
        value.forEach((v, index) => {
          if (index === 0) {
            uri = uri + `&${key}=${v}`;
          } else {
            uri = uri + `|${v}`;
          }
        });
      } else {
        uri = uri + `&${key}=${value}`;
      }
    }
  });
  return uri;
}
