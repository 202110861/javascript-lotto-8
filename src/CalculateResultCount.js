import {
  MatchingNumberCount,
  checkBonusNumber,
} from "./MatchingNumberCount.js";
import { OutputView } from "./view/OutputView.js";
import { OUTPUT_MESSAGE } from "./Constants.js";

export const CalculateResultCount = (lottoList, winningNumber, bonusNumber) => {
  const outputView = new OutputView();

  for (let i = 3; i < 7; i++) {
    let count;
    let bonusCount;
    lottoList.forEach((lotto) => {
      count = MatchingNumberCount(i, lotto, winningNumber);
      bonusCount = MatchingNumberCount(5, lotto, winningNumber, bonusNumber);
    });
    outputView.printResultContent(
      i,
      OUTPUT_MESSAGE.RESULT_CONTENT[i],
      count,
      false
    );
    if (i === 5) {
      outputView.printResultContent(
        i,
        OUTPUT_MESSAGE.RESULT_CONTENT["5_BONUS"],
        bonusCount,
        true
      );
    }
  }
};
