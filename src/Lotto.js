import { ERROR_MESSAGES } from "./Constants.js";
import { OutputView } from "./view/OutputView.js";

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
    if (numbers.some((number) => numbers.includes(number))) {
      outputView.throwError(ERROR_MESSAGES.LOTTO.DUPLICATE);
    }
  }

  getNumbers() {
    const sortNumberList = this.#numbers.sort((a, b) => {
      return a - b;
    });
    return sortNumberList;
  }
}

export default Lotto;
