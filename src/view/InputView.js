import { Console } from "@woowacourse/mission-utils";
import { INPUT_MESSAGE } from "../constant/Constants.js";
import {
  validatePurchaseAmount,
  validateWinningNumbers,
} from "../utils/Validator.js";

export class InputView {
  async inputPurchase() {
    const input = await Console.readLineAsync(INPUT_MESSAGE.PURCHASE_AMOUNT);
    validatePurchaseAmount(input);
    return input;
  }

  async inputWinningNumber() {
    const input = await Console.readLineAsync(INPUT_MESSAGE.WINNING_NUMBERS);
    validateWinningNumbers(input);
    return input;
  }

  async inputBonusNumber() {
    const input = await Console.readLineAsync(INPUT_MESSAGE.BONUS_NUMBER);

    return input;
  }
}
