import Lotto from "./model/Lotto.js";
import { Random } from "@woowacourse/mission-utils";
import { OutputView } from "./view/OutputView.js";

export const Repeat = (count) => {
  const outputView = new OutputView();
  const lottoNumberList = [];
  for (let i = 0; i < count; i++) {
    const numberList = Random.pickUniqueNumbersInRange(1, 45, 6);

    const lotto = new Lotto(numberList);
    const sortedNumber = lotto.getNumbers(numberList);
    outputView.printNumberList(sortedNumber);
    lottoNumberList.push(sortedNumber);
  }

  return lottoNumberList;
};
