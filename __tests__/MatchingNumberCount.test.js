import { MatchingNumberCount } from "../src/MatchingNumberCount.js";

describe("MatchingNumberCount 테스트", () => {
  test("3개 일치하는 로또 개수를 출력한다.", () => {
    const lotto = "[1, 2, 3, 4, 5, 6]";
    const winningNumber = "1,2,3,7,8,9";

    const result = MatchingNumberCount(3, lotto, winningNumber);
    expect(result).toBe(1);
  });

  test("4개 일치하는 로또 개수를 출력한다.", () => {
    const lotto = "[1, 2, 3, 4, 5, 6]";
    const winningNumber = "1,2,3,4,8,9";
    const result = MatchingNumberCount(4, lotto, winningNumber);
    expect(result).toBe(1);
  });
  test("5개 일치하는 로또 개수를 출력한다.", () => {
    const lotto = "[1, 2, 3, 4, 5, 6]";
    const winningNumber = "1,2,3,4,5,9";
    const result = MatchingNumberCount(5, lotto, winningNumber);
    expect(result).toBe(1);
  });
  test("5개 일치, 보너스 볼 일치하는 로또 개수를 출력한다.", () => {
    const lotto = "[1, 2, 3, 4, 5, 6]";
    const winningNumber = "1,2,3,5,6,7";
    const bonusNumber = "4";
    const result = MatchingNumberCount(5, lotto, winningNumber, bonusNumber);
    expect(result).toBe(1);
  });
  test("6개 일치하는 로또 개수를 출력한다.", () => {
    const lotto = "[1, 2, 3, 4, 5, 6]";
    const winningNumber = "1,2,3,4,5,6";
    const result = MatchingNumberCount(6, lotto, winningNumber);
    expect(result).toBe(1);
  });
});
