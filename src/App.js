import { InputView } from "./view/InputView.js";
import { CalculatePurchaseCount } from "./CalculatePurchaseCount.js";
class App {
  async run() {
    const inputView = new InputView();
    const purchaseAmount = inputView.inputPurchase();
    const count = CalculatePurchaseCount(await purchaseAmount);
  }
}

export default App;
