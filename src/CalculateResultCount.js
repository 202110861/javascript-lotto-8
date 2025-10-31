import { MatchingNumberCount } from "./utils/MatchingNumberCount.js";
import { OutputView } from "./view/OutputView.js";
import { OUTPUT_MESSAGE } from "./constant/Constants.js";

export const CalculateResultCount = (lottoList, winningNumber, bonusNumber) => {
  const counts = aggregateMatchCounts(lottoList, winningNumber, bonusNumber);
  printResultLines(counts);
  return calculateTotalWinnings(counts);
};

// 등수별 개수 집계 (3,4,5,5_BONUS,6)
const aggregateMatchCounts = (lottoList, winningNumber, bonusNumber) => {
  const counts = { 3: 0, 4: 0, 5: 0, "5_BONUS": 0, 6: 0 };

  lottoList.forEach((lotto) => {
    counts[3] += MatchingNumberCount(3, lotto, winningNumber);
    counts[4] += MatchingNumberCount(4, lotto, winningNumber);
    counts[6] += MatchingNumberCount(6, lotto, winningNumber);

    const fiveOnly = MatchingNumberCount(5, lotto, winningNumber);
    const fiveBonus = MatchingNumberCount(5, lotto, winningNumber, bonusNumber);

    if (fiveBonus > 0) {
      counts["5_BONUS"] += 1;
    } else if (fiveOnly > 0) {
      counts[5] += 1;
    }
  });

  return counts;
};

// 총 당첨금 계산
const calculateTotalWinnings = (counts) => {
  let total = 0;
  const priceOf = (number) =>
    Number(
      OUTPUT_MESSAGE.RESULT_CONTENT[number].replace(/,/g, "").replace(/원/g, "")
    );

  total += priceOf(3) * counts[3];
  total += priceOf(4) * counts[4];
  total += priceOf(5) * counts[5];
  total += priceOf("5_BONUS") * counts["5_BONUS"];
  total += priceOf(6) * counts[6];
  return total;
};

// 등수별 결과 출력
const printResultLines = (counts) => {
  const outputView = new OutputView();
  [3, 4, 5, 6].forEach((number) => {
    outputView.printResultContent(
      number,
      OUTPUT_MESSAGE.RESULT_CONTENT[number],
      counts[number],
      false
    );
    if (number === 5) {
      outputView.printResultContent(
        5,
        OUTPUT_MESSAGE.RESULT_CONTENT["5_BONUS"],
        counts["5_BONUS"],
        true
      );
    }
  });
};
