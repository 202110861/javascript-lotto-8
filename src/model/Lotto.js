import { ERROR_MESSAGES } from "../constant/Constants.js";
import { OutputView } from "../view/OutputView.js";
import { isDuplicate } from "../utils/isDuplicate.js";

const outputView = new OutputView();

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#validateDuplicate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      outputView.throwError(ERROR_MESSAGES.LOTTO.INVALID_LENGTH);
    }
  }

  // TODO: 추가 기능 구현
  #validateDuplicate(numbers) {
    if (isDuplicate(numbers)) {
      outputView.throwError(ERROR_MESSAGES.LOTTO.DUPLICATE);
    }
  }

  getNumbers() {
    const sortNumberList = this.#numbers.sort((a, b) => {
      return a - b;
    });
    const stringNumberList = `[${sortNumberList.join(", ")}]`;
    return stringNumberList;
  }
}

export default Lotto;
