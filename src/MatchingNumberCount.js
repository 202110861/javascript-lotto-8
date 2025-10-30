export const MatchingNumberCount = (
  number,
  lotto,
  winningNumber,
  bonusNumber
) => {
  let count = 0;
  const countNumber = matchingNumber(lotto, winningNumber);
  if (countNumber === number) {
    count++;
  }
  if (number === 5) {
    const isBonusNumber = checkBonusNumber(lotto, bonusNumber);
    if (isBonusNumber && countNumber === 5) {
      count++;
    }
  }
  return count;
};

const matchingNumber = (lotto, winningNumber) => {
  let count = 0;
  const winningNumberArray = winningNumber.split(",");
  winningNumberArray.forEach((num) => {
    const number = Number(num);
    if (lotto.includes(number)) {
      count++;
    }
  });
  return count;
};

export const checkBonusNumber = (lotto, bonusNumber) => {
  const number = Number(bonusNumber);
  const isBonusNumber = lotto.includes(number);
  return isBonusNumber;
};
