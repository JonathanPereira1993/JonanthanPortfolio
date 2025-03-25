export const YearsCalculator = (year: number) => {
  const presentDate = new Date().getFullYear();
  const calculatedYear = presentDate - year;

  return calculatedYear;
};
