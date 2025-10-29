import Lotto from "./Lotto.js";
import { Random } from "@woowacourse/mission-utils";
import { OutputView } from "./view/OutputView.js";

export const Repeat = (count) => {
  const outputView = new OutputView();
  for (let i = 0; i < count; i++) {
    const numberList = Random.pickUniqueNumbersInRange(1, 45, 6);
    outputView.printNumberList(numberList);
    const lotto = new Lotto(numberList);
  }
};
