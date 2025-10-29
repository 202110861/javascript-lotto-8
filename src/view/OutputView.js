import { Console } from "@woowacourse/mission-utils";

export class OutputView {
  printError(errorMessage) {
    Console.print(`[ERROR] ${errorMessage}`);
  }

  printPurchaseCount(count) {
    Console.print(`${count}`);
  }
}
