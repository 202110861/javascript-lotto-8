import { Console } from "@woowacourse/mission-utils";
import { INPUT_MESSAGE } from "../Constants.js";

export class InputView {
  async inputPurchase() {
    const input = await Console.readLineAsync(INPUT_MESSAGE.PURCHASE_AMOUNT);

    return input;
  }

  async inputWinningNumber() {
    const input = await Console.readLineAsync(INPUT_MESSAGE.WINNING_NUMBERS);
    return input;
  }

  async inputBonusNumber() {
    const input = await Console.readLineAsync(INPUT_MESSAGE.BONUS_NUMBER);
    return input;
  }
}
