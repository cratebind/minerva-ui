// https://stackoverflow.com/questions/7225407/convert-camelcasetext-to-sentence-case-text/7225450
export function toTitleCase(string: string): string {
  if (!string) {
    console.error('No String Provided to toTitleCase');
    return '';
  }

  const result = string.replace(/([A-Z])/g, ' $1');
  return result.charAt(0).toUpperCase() + result.slice(1);
}
