import { Console } from "@woowacourse/mission-utils";
import { OUTPUT_MESSAGE } from "../Constants.js";

export class OutputView {
  printError(errorMessage) {
    Console.print(`[ERROR] ${errorMessage}`);
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

  printResultContent(number, price, count) {
    Console.print(`${number}개 일치 (${price}) - ${count}개`);
  }
}
