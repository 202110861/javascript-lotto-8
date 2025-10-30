export const MatchingNumberCount = (
  number,
  lotto,
  winningNumber,
  bonusNumber
) => {
  let count = 0;
  const countNumber = matchingNumber(lotto, winningNumber);

  if (number === 5 && bonusNumber) {
    const isBonusNumber = checkBonusNumber(lotto, bonusNumber);
    if (isBonusNumber && countNumber === 5) {
      count++;
    }
  } else if (number === countNumber) {
    count++;
  }
  return count;
};

const matchingNumber = (lotto, winningNumber) => {
  let count = 0;
  const lottoArray = parseLottoStringToArray(lotto);
  const winningNumberArray = winningNumber.split(",");
  winningNumberArray.forEach((num) => {
    const number = Number(num);
    if (lottoArray.includes(number)) {
      count++;
    }
  });
  return count;
};

const parseLottoStringToArray = (lottoString) => {
  return lottoString
    .replace("[", "")
    .replace("]", "")
    .split(", ")
    .map((s) => Number(s.trim()))
    .filter((v) => !isNaN(v));
};

export const checkBonusNumber = (lotto, bonusNumber) => {
  const number = Number(bonusNumber);
  const lottoArray = parseLottoStringToArray(lotto);
  const isBonusNumber = lottoArray.includes(number);
  return isBonusNumber;
};
