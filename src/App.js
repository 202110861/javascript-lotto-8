import { InputView } from "./view/InputView.js";
import { CalculatePurchaseCount } from "./CalculatePurchaseCount.js";
import { OutputView } from "./view/OutputView.js";
import { Repeat } from "./Repeat.js";
import { CalculateResultCount } from "./CalculateResultCount.js";
class App {
  async run() {
    const inputView = new InputView();
    const outputView = new OutputView();

    const purchaseAmount = await inputView.inputPurchase();
    const count = CalculatePurchaseCount(purchaseAmount);
    outputView.printPurchaseCount(count);

    const lottoList = Repeat(count);

    const winningNumber = await inputView.inputWinningNumber();
    const bonusNumber = await inputView.inputBonusNumber();
    validateBonusNumber(bonusNumber, winningNumber);

    outputView.printResultTitle();

    const totalMoney = CalculateResultCount(
      lottoList,
      winningNumber,
      bonusNumber
    );
    outputView.printProfitRate(totalMoney, purchaseAmount);
  }
}

export default App;
