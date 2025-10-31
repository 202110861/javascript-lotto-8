import { MissionUtils } from "@woowacourse/mission-utils";
import { OUTPUT_MESSAGE } from "../src/constant/Constants";
import { OutputView } from "../src/view/OutputView.js";

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, "print");
  logSpy.mockClear();
  return logSpy;
};

describe("OutputView 테스트", () => {
  test("로또 구매 개수를 출력한다.", () => {
    const logSpy = getLogSpy();

    new OutputView().printPurchaseCount(3);
    expect(logSpy).toHaveBeenCalledWith(
      expect.stringContaining(`3${OUTPUT_MESSAGE.PURCHASE_COUNT}`)
    );
  });
  test("로또 번호를 출력한다.", () => {
    const logSpy = getLogSpy();
    new OutputView().printNumberList("[1, 2, 3, 4, 5, 6]");
    expect(logSpy).toHaveBeenCalledWith(
      expect.stringContaining("[1, 2, 3, 4, 5, 6]")
    );
  });
  test("당첨 내역을 출력한다.", () => {
    const logSpy = getLogSpy();
    new OutputView().printResultContent(
      3,
      OUTPUT_MESSAGE.RESULT_CONTENT[3],
      1,
      false
    );
    expect(logSpy).toHaveBeenCalledWith(
      expect.stringContaining(
        `3개 일치 (${OUTPUT_MESSAGE.RESULT_CONTENT[3]}) - 1개`
      )
    );
  });
  test("수익률을 출력한다.", () => {
    const logSpy = getLogSpy();
    new OutputView().printProfitRate(5000, "1000");
    expect(logSpy).toHaveBeenCalledWith(
      expect.stringContaining("총 수익률은 500.0%입니다.")
    );
  });
  test("에러 메세지를 출력한다.", () => {
    const logSpy = getLogSpy();
    new OutputView().printErrorMessage("예외 메시지");
    expect(logSpy).toHaveBeenCalledWith(
      expect.stringContaining("[ERROR] 예외 메시지")
    );
  });
});
