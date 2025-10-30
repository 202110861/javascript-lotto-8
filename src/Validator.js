import { OutputView } from "./view/OutputView.js";
import { ERROR_MESSAGES } from "./Constants.js";

const outputView = new OutputView();

export const validatePurchaseAmount = (amount) => {
  if (isNaN(amount)) {
    outputView.throwError(ERROR_MESSAGES.PURCHASE_AMOUNT.NOT_NUMBER);
  }
  if (amount % 1000 !== 0) {
    outputView.throwError(ERROR_MESSAGES.PURCHASE_AMOUNT.NOT_DIVISIBLE_BY_UNIT);
  }
  if (amount <= 0) {
    outputView.throwError(ERROR_MESSAGES.PURCHASE_AMOUNT.NOT_POSITIVE);
  }
  if (!Number.isInteger(amount)) {
    outputView.throwError(ERROR_MESSAGES.PURCHASE_AMOUNT.NOT_INTEGER);
  }
};

export const validateWinningNumbers = (winningNumbers) => {
  if (winningNumbers.includes(",")) {
    outputView.throwError(ERROR_MESSAGES.WINNING_NUMBERS.INVALID_DELIMITER);
  } else {
    const winningNumbersArray = winningNumbers.split(",");
    winningNumbersArray.forEach((number) => {
      if (isNaN(number)) {
        outputView.throwError(ERROR_MESSAGES.WINNING_NUMBERS.NOT_NUMBER);
      }
      if (number < 1 || number > 45) {
        outputView.throwError(ERROR_MESSAGES.WINNING_NUMBERS.OUT_OF_RANGE);
      }
      if (!Number.isInteger(number)) {
        outputView.throwError(ERROR_MESSAGES.WINNING_NUMBERS.NOT_INTEGER);
      }
    });
  }
};

export const validateBonusNumber = (bonusNumber, winningNumbers) => {
  const winningNumbersArray = winningNumbers.split(",");

  if (isNaN(bonusNumber)) {
    outputView.throwError(ERROR_MESSAGES.BONUS_NUMBER.NOT_NUMBER);
  }
  if (bonusNumber < 1 || bonusNumber > 45) {
    outputView.throwError(ERROR_MESSAGES.BONUS_NUMBER.OUT_OF_RANGE);
  }
  if (!Number.isInteger(bonusNumber)) {
    outputView.throwError(ERROR_MESSAGES.BONUS_NUMBER.NOT_INTEGER);
  }
  if (winningNumbersArray.includes(bonusNumber)) {
    outputView.throwError(ERROR_MESSAGES.BONUS_NUMBER.DUPLICATE);
  }
};
