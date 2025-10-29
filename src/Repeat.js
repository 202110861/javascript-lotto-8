import Lotto from "./Lotto.js";
import { Random } from "@woowacourse/mission-utils";

export const Repeat = (count) => {
  for (let i = 0; i < count; i++) {
    const numberList = Random.pickUniqueNumbersInRange(1, 45, 6);

    const lotto = new Lotto(numberList);
  }
};
