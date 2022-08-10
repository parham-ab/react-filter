export const shortener = (title) => {
  const splittedTitle = title.split(" ");
  const finalTitle = `${splittedTitle[0]} ${splittedTitle[1]}`;
  return finalTitle;
};
