import { MissionUtils } from "@woowacourse/mission-utils";
import { INPUT_MESSAGE } from "../src/constant/Constants";
import { InputView } from "../src/view/InputView";

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();

    return Promise.resolve(input);
  });
};

describe("InputView 테스트", () => {
  test("구매 금액을 입력 받는다.", async () => {
    const input = "1000";
    mockQuestions([input]);

    const result = await new InputView().inputPurchase();

    expect(result).toBe(input);
    expect(MissionUtils.Console.readLineAsync).toHaveBeenCalledWith(
      INPUT_MESSAGE.PURCHASE_AMOUNT
    );
  });

  test("당첨 번호를 입력 받는다.", async () => {
    const input = "1,2,3,4,5,6";
    mockQuestions([input]);

    const result = await new InputView().inputWinningNumber();
    expect(result).toBe(input);
    expect(MissionUtils.Console.readLineAsync).toHaveBeenCalledWith(
      INPUT_MESSAGE.WINNING_NUMBERS
    );
  });

  test("보너스 번호를 입력 받는다.", async () => {
    const input = "7";
    mockQuestions([input]);

    const result = await new InputView().inputBonusNumber();
    expect(result).toBe(input);
    expect(MissionUtils.Console.readLineAsync).toHaveBeenCalledWith(
      INPUT_MESSAGE.BONUS_NUMBER
    );
  });
});
