export const CalculatePurchaseCount = (amount) => {
  const count = Math.floor(Number(amount) / 1000);
  return count;
};
