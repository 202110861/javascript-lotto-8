import { OutputView } from "./view/OutputView.js";
import { ERROR_MESSAGES } from "./Constants.js";
import { isDuplicate } from "./isDuplicate.js";

const outputView = new OutputView();

export const validatePurchaseAmount = (amount) => {
  const numberAmount = Number(amount);
  if (isNaN(numberAmount)) {
    outputView.printErrorMessage(ERROR_MESSAGES.PURCHASE_AMOUNT.NOT_NUMBER);
  } else if (numberAmount % 1000 !== 0) {
    outputView.printErrorMessage(
      ERROR_MESSAGES.PURCHASE_AMOUNT.NOT_DIVISIBLE_BY_UNIT
    );
  } else if (numberAmount <= 0) {
    outputView.printErrorMessage(ERROR_MESSAGES.PURCHASE_AMOUNT.NOT_POSITIVE);
  } else if (!Number.isInteger(numberAmount)) {
    outputView.printErrorMessage(ERROR_MESSAGES.PURCHASE_AMOUNT.NOT_INTEGER);
  }
};

export const validateWinningNumbers = (winningNumbers) => {
  if (!winningNumbers.includes(",")) {
    outputView.printErrorMessage(
      ERROR_MESSAGES.WINNING_NUMBERS.INVALID_DELIMITER
    );
  } else {
    const winningNumbersArray = winningNumbers.split(",");
    winningNumbersArray.forEach((n) => {
      const number = Number(n);
      if (isNaN(number)) {
        outputView.printErrorMessage(ERROR_MESSAGES.WINNING_NUMBERS.NOT_NUMBER);
      } else if (number < 1 || number > 45) {
        outputView.printErrorMessage(
          ERROR_MESSAGES.WINNING_NUMBERS.OUT_OF_RANGE
        );
      } else if (!Number.isInteger(number)) {
        outputView.printErrorMessage(
          ERROR_MESSAGES.WINNING_NUMBERS.NOT_INTEGER
        );
      }
    });
    if (isDuplicate(winningNumbersArray)) {
      outputView.printErrorMessage(
        ERROR_MESSAGES.WINNING_NUMBERS.DUPLICATE_NUMBER
      );
    }
  }
};

export const validateBonusNumber = (bonusNumber, winningNumbers) => {
  const winningNumbersArray = winningNumbers.split(",");
  const numberBonus = Number(bonusNumber);
  if (isNaN(numberBonus)) {
    outputView.printErrorMessage(ERROR_MESSAGES.BONUS_NUMBER.NOT_NUMBER);
  } else if (numberBonus < 1 || numberBonus > 45) {
    outputView.printErrorMessage(ERROR_MESSAGES.BONUS_NUMBER.OUT_OF_RANGE);
  } else if (!Number.isInteger(numberBonus)) {
    outputView.printErrorMessage(ERROR_MESSAGES.BONUS_NUMBER.NOT_INTEGER);
  } else if (winningNumbersArray.includes(bonusNumber)) {
    outputView.printErrorMessage(ERROR_MESSAGES.BONUS_NUMBER.DUPLICATE);
  }
};
