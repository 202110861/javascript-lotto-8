import { InputView } from "./view/InputView.js";
import { CalculatePurchaseCount } from "./CalculatePurchaseCount.js";
import { OutputView } from "./view/OutputView.js";
class App {
  async run() {
    const inputView = new InputView();
    const outputView = new OutputView();

    const purchaseAmount = inputView.inputPurchase();
    const count = CalculatePurchaseCount(await purchaseAmount);
    outputView.printPurchaseCount(count);
  }
}

export default App;
