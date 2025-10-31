import { MissionUtils } from "@woowacourse/mission-utils";
import { LottoController } from "../src/controller/LottoController.js";

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
};

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickUniqueNumbersInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickUniqueNumbersInRange);
};

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, "print");
  logSpy.mockClear();
  return logSpy;
};

describe("LottoController 테스트", () => {
  test("정상적으로 로또 구매 및 당청금 계산을 수행한다.", async () => {
    const logSpy = getLogSpy();
    mockQuestions(["8000", "1,2,3,4,5,6", "7"]);
    mockRandoms([
      [8, 21, 23, 41, 42, 43],
      [3, 5, 11, 16, 32, 38],
      [7, 11, 16, 35, 36, 44],
      [1, 8, 11, 31, 41, 42],
      [13, 14, 16, 38, 42, 45],
      [7, 11, 30, 40, 42, 43],
      [2, 13, 22, 32, 38, 45],
      [1, 3, 5, 14, 22, 45],
    ]);

    const controller = new LottoController();
    await controller.play();
    const logs = [
      "8개를 구매했습니다.",
      "[8, 21, 23, 41, 42, 43]",
      "[3, 5, 11, 16, 32, 38]",
      "[7, 11, 16, 35, 36, 44]",
      "[1, 8, 11, 31, 41, 42]",
      "[13, 14, 16, 38, 42, 45]",
      "[7, 11, 30, 40, 42, 43]",
      "[2, 13, 22, 32, 38, 45]",
      "[1, 3, 5, 14, 22, 45]",
      "3개 일치 (5,000원) - 1개",
      "4개 일치 (50,000원) - 0개",
      "5개 일치 (1,500,000원) - 0개",
      "5개 일치, 보너스 볼 일치 (30,000,000원) - 0개",
      "6개 일치 (2,000,000,000원) - 0개",
      "총 수익률은 62.5%입니다.",
    ];

    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });

  describe("로또 구입 금액 유효성 테스트", () => {
    test("잘못된 로또 구입 금액 입력 시 예외를 발생시킨다.", async () => {
      const logSpy = getLogSpy();
      mockQuestions(["8000j", "1,2,3,4,5,6", "7"]);
      mockRandoms([
        [8, 21, 23, 41, 42, 43],
        [3, 5, 11, 16, 32, 38],
        [7, 11, 16, 35, 36, 44],
        [1, 8, 11, 31, 41, 42],
        [13, 14, 16, 38, 42, 45],
        [7, 11, 30, 40, 42, 43],
        [2, 13, 22, 32, 38, 45],
        [1, 3, 5, 14, 22, 45],
      ]);
      const controller = new LottoController();
      await controller.play();
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("[ERROR]"));
    });
    test("1000원으로 나누어 떨어지지 않는 로또 구입 금액 입력 시 예외를 발생시킨다.", async () => {
      const logSpy = getLogSpy();
      mockQuestions(["8200", "1,2,3,4,5,6", "7"]);
      mockRandoms([
        [8, 21, 23, 41, 42, 43],
        [3, 5, 11, 16, 32, 38],
        [7, 11, 16, 35, 36, 44],
        [1, 8, 11, 31, 41, 42],
        [13, 14, 16, 38, 42, 45],
        [7, 11, 30, 40, 42, 43],
        [2, 13, 22, 32, 38, 45],
        [1, 3, 5, 14, 22, 45],
      ]);
      const controller = new LottoController();
      await controller.play();
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("[ERROR]"));
    });
    test("0원 이하의 로또 구입 금액 입력 시 예외를 발생시킨다.", async () => {
      const logSpy = getLogSpy();
      mockQuestions(["-1000", "1,2,3,4,5,6", "7"]);
      mockRandoms([
        [8, 21, 23, 41, 42, 43],
        [3, 5, 11, 16, 32, 38],
        [7, 11, 16, 35, 36, 44],
        [1, 8, 11, 31, 41, 42],
        [13, 14, 16, 38, 42, 45],
        [7, 11, 30, 40, 42, 43],
        [2, 13, 22, 32, 38, 45],
        [1, 3, 5, 14, 22, 45],
      ]);
      const controller = new LottoController();
      await controller.play();
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("[ERROR]"));
    });
    test("정수가 아닌 로또 구입 금액 입력 시 예외를 발생시킨다.", async () => {
      const logSpy = getLogSpy();
      mockQuestions(["8000.5", "1,2,3,4,5,6", "7"]);
      mockRandoms([
        [8, 21, 23, 41, 42, 43],
        [3, 5, 11, 16, 32, 38],
        [7, 11, 16, 35, 36, 44],
        [1, 8, 11, 31, 41, 42],
        [13, 14, 16, 38, 42, 45],
        [7, 11, 30, 40, 42, 43],
        [2, 13, 22, 32, 38, 45],
        [1, 3, 5, 14, 22, 45],
      ]);
      const controller = new LottoController();
      await controller.play();
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("[ERROR]"));
    });
  });

  describe("당첨 번호 유효성 테스트", () => {
    test("6개가 아닌 당첨 번호 입력 시 예외를 발생시킨다.", async () => {
      const logSpy = getLogSpy();
      mockQuestions(["8000", "1,2,3,4,5,6,7"]);
      mockRandoms([
        [8, 21, 23, 41, 42, 43],
        [3, 5, 11, 16, 32, 38],
        [7, 11, 16, 35, 36, 44],
        [1, 8, 11, 31, 41, 42],
        [13, 14, 16, 38, 42, 45],
        [7, 11, 30, 40, 42, 43],
        [2, 13, 22, 32, 38, 45],
        [1, 3, 5, 14, 22, 45],
      ]);
      const controller = new LottoController();
      await controller.play();
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("[ERROR]"));
    });

    test("중복된 당첨 번호 입력 시 예외를 발생시킨다.", async () => {
      const logSpy = getLogSpy();
      mockQuestions(["8000", "1,2,3,4,5,5"]);
      mockRandoms([
        [8, 21, 23, 41, 42, 43],
        [3, 5, 11, 16, 32, 38],
        [7, 11, 16, 35, 36, 44],
        [1, 8, 11, 31, 41, 42],
        [13, 14, 16, 38, 42, 45],
        [7, 11, 30, 40, 42, 43],
        [2, 13, 22, 32, 38, 45],
        [1, 3, 5, 14, 22, 45],
      ]);
      const controller = new LottoController();
      await controller.play();
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("[ERROR]"));
    });
    test("숫자가 아닌 당첨 번호 입력 시 예외를 발생시킨다.", async () => {
      const logSpy = getLogSpy();
      mockQuestions(["8000", "1,2,3,4,5,a"]);
      mockRandoms([
        [8, 21, 23, 41, 42, 43],
        [3, 5, 11, 16, 32, 38],
        [7, 11, 16, 35, 36, 44],
        [1, 8, 11, 31, 41, 42],
        [13, 14, 16, 38, 42, 45],
        [7, 11, 30, 40, 42, 43],
        [2, 13, 22, 32, 38, 45],
        [1, 3, 5, 14, 22, 45],
      ]);
      const controller = new LottoController();
      await controller.play();
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("[ERROR]"));
    });
    test("1~45 이외의 숫자 당첨 번호 입력 시 예외를 발생시킨다.", async () => {
      const logSpy = getLogSpy();
      mockQuestions(["8000", "1,2,3,4,5,50"]);
      mockRandoms([
        [8, 21, 23, 41, 42, 43],
        [3, 5, 11, 16, 32, 38],
        [7, 11, 16, 35, 36, 44],
        [1, 8, 11, 31, 41, 42],
        [13, 14, 16, 38, 42, 45],
        [7, 11, 30, 40, 42, 43],
        [2, 13, 22, 32, 38, 45],
        [1, 3, 5, 14, 22, 45],
      ]);
      const controller = new LottoController();
      await controller.play();
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("[ERROR]"));
    });
    test("정수가 아닌 당첨 번호 입력 시 예외를 발생시킨다.", async () => {
      const logSpy = getLogSpy();
      mockQuestions(["8000", "1,2,3,4,5,5.5"]);
      mockRandoms([
        [8, 21, 23, 41, 42, 43],
        [3, 5, 11, 16, 32, 38],
        [7, 11, 16, 35, 36, 44],
        [1, 8, 11, 31, 41, 42],
        [13, 14, 16, 38, 42, 45],
        [7, 11, 30, 40, 42, 43],
        [2, 13, 22, 32, 38, 45],
        [1, 3, 5, 14, 22, 45],
      ]);
      const controller = new LottoController();
      await controller.play();
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("[ERROR]"));
    });
    test("쉼표(,)가 아닌 당첨 번호 입력 시 예외를 발생시킨다.", async () => {
      const logSpy = getLogSpy();
      mockQuestions(["8000", "1 2 3 4 5 6"]);
      mockRandoms([
        [8, 21, 23, 41, 42, 43],
        [3, 5, 11, 16, 32, 38],
        [7, 11, 16, 35, 36, 44],
        [1, 8, 11, 31, 41, 42],
        [13, 14, 16, 38, 42, 45],
        [7, 11, 30, 40, 42, 43],
        [2, 13, 22, 32, 38, 45],
        [1, 3, 5, 14, 22, 45],
      ]);
      const controller = new LottoController();
      await controller.play();
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("[ERROR]"));
    });
  });

  describe("보너스 번호 유효성 테스트", () => {
    test("숫자가 아닌 보너스 번호 입력 시 예외를 발생시킨다.", async () => {
      const logSpy = getLogSpy();
      mockQuestions(["8000", "1,2,3,4,5,6", "a"]);
      mockRandoms([
        [8, 21, 23, 41, 42, 43],
        [3, 5, 11, 16, 32, 38],
        [7, 11, 16, 35, 36, 44],
        [1, 8, 11, 31, 41, 42],
        [13, 14, 16, 38, 42, 45],
        [7, 11, 30, 40, 42, 43],
        [2, 13, 22, 32, 38, 45],
        [1, 3, 5, 14, 22, 45],
      ]);
      const controller = new LottoController();
      await controller.play();
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("[ERROR]"));
    });
    test("1~45 이외의 숫자 보너스 번호 입력 시 예외를 발생시킨다.", async () => {
      const logSpy = getLogSpy();
      mockQuestions(["8000", "1,2,3,4,5,6", "50"]);
      mockRandoms([
        [8, 21, 23, 41, 42, 43],
        [3, 5, 11, 16, 32, 38],
        [7, 11, 16, 35, 36, 44],
        [1, 8, 11, 31, 41, 42],
        [13, 14, 16, 38, 42, 45],
        [7, 11, 30, 40, 42, 43],
        [2, 13, 22, 32, 38, 45],
        [1, 3, 5, 14, 22, 45],
      ]);
      const controller = new LottoController();
      await controller.play();
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("[ERROR]"));
    });
    test("정수가 아닌 보너스 번호 입력 시 예외를 발생시킨다.", async () => {
      const logSpy = getLogSpy();
      mockQuestions(["8000", "1,2,3,4,5,6", "5.5"]);
      mockRandoms([
        [8, 21, 23, 41, 42, 43],
        [3, 5, 11, 16, 32, 38],
        [7, 11, 16, 35, 36, 44],
        [1, 8, 11, 31, 41, 42],
        [13, 14, 16, 38, 42, 45],
        [7, 11, 30, 40, 42, 43],
        [2, 13, 22, 32, 38, 45],
        [1, 3, 5, 14, 22, 45],
      ]);
      const controller = new LottoController();
      await controller.play();
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("[ERROR]"));
    });
    test("당첨 번호와 중복된 보너스 번호 입력 시 예외를 발생시킨다.", async () => {
      const logSpy = getLogSpy();
      mockQuestions(["8000", "1,2,3,4,5,6", "6"]);
      mockRandoms([
        [8, 21, 23, 41, 42, 43],
        [3, 5, 11, 16, 32, 38],
        [7, 11, 16, 35, 36, 44],
        [1, 8, 11, 31, 41, 42],
        [13, 14, 16, 38, 42, 45],
        [7, 11, 30, 40, 42, 43],
        [2, 13, 22, 32, 38, 45],
        [1, 3, 5, 14, 22, 45],
      ]);
      const controller = new LottoController();
      await controller.play();
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("[ERROR]"));
    });
  });
});
