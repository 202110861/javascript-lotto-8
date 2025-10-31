export const isDuplicate = (numbers) => {
  const numberSet = new Set(numbers);
  if (numberSet.size !== numbers.length) return true;
  return false;
};
