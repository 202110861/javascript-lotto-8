import { Console } from "@woowacourse/mission-utils";
import { INPUT_MESSAGE } from "./Constants.js";
class App {
  async run() {
    const purchaseAmount = Console.readLineAsync(INPUT_MESSAGE.BONUS_NUMBER);
  }
}

export default App;
