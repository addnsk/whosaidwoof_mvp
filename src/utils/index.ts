export const Random = (maxNum: number) => {
  return Math.floor(Math.random() * maxNum);
};

export const compareDate = (
  date: Date | number,
  dateNext: Date | number
): boolean => {
  return date < dateNext;
};
