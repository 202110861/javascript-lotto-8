import { Console } from "@woowacourse/mission-utils";
import { OUTPUT_MESSAGE } from "../Constants.js";

export class OutputView {
  throwError(errorMessage) {
    throw new Error(`[ERROR] ${errorMessage}`);
  }

  printPurchaseCount(count) {
    Console.print(`${count}${OUTPUT_MESSAGE.PURCHASE_COUNT}`);
  }

  printResultTitle() {
    Console.print(`${OUTPUT_MESSAGE.RESULT_TITLE}`);
  }

  printNumberList(numberList) {
    Console.print(numberList);
  }

  printResultContent(number, price, count, bonus) {
    if (bonus) {
      Console.print(`${number}개 일치, 보너스 볼 일치 (${price}) - ${count}개`);
    } else {
      Console.print(`${number}개 일치 (${price}) - ${count}개`);
    }
  }
}
