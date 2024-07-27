export const stringTitleCase = (text: string) => {
  return text.replace(/\b\S/g, (t) => t.toUpperCase());
};
