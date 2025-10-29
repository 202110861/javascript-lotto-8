import { Console } from "@woowacourse/mission-utils";
import { INPUT_MESSAGE } from "./Constants.js";
import { CalculatePurchaseCount } from "./CalculatePurchaseCount.js";
class App {
  async run() {
    const purchaseAmount = Console.readLineAsync(INPUT_MESSAGE.BONUS_NUMBER);
    const count = CalculatePurchaseCount(await purchaseAmount);
  }
}

export default App;
