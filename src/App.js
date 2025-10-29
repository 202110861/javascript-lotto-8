import { InputView } from "./view/InputView.js";
import { CalculatePurchaseCount } from "./CalculatePurchaseCount.js";
import { OutputView } from "./view/OutputView.js";
import { Repeat } from "./Repeat.js";
class App {
  async run() {
    const inputView = new InputView();
    const outputView = new OutputView();

    const purchaseAmount = inputView.inputPurchase();
    const count = CalculatePurchaseCount(await purchaseAmount);
    outputView.printPurchaseCount(count);

    Repeat(count);
  }
}

export default App;
