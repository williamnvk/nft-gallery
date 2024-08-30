export function truncateString(str: string, maxLength: number = 8): string {
  if (str.length <= maxLength) {
    return str;
  }

  const firstFour = str.slice(0, 4);
  const lastFour = str.slice(-4);

  return `${firstFour}...${lastFour}`;
}
