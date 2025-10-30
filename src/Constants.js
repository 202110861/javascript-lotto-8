export const INPUT_MESSAGE = {
  PURCHASE_AMOUNT: "구입금액을 입력해 주세요.\n",
  WINNING_NUMBERS: "당첨 번호를 입력해 주세요.\n",
  BONUS_NUMBER: "보너스 번호를 입력해 주세요.\n",
};

export const OUTPUT_MESSAGE = {
  PURCHASE_COUNT: "개를 구매했습니다.",
  RESULT_TITLE: "당첨 통계\n---",
  RESULT_CONTENT: {
    3: "5,000원",
    4: "50,000원",
    5: "1,500,000원",
    "5_BONUS": "30,000,000원",
    6: "2,000,000,000원",
  },
};

export const ERROR_MESSAGES = {
  PURCHASE_AMOUNT: {
    NOT_NUMBER: "구입 금액은 숫자로 입력해야 합니다.",
    NOT_DIVISIBLE_BY_UNIT: "구입 금액은 1,000원 단위로 입력해야 합니다.",
    NOT_POSITIVE: "구입 금액은 0원 이상이어야 합니다.",
    NOT_INTEGER: "구입 금액은 정수로 입력해야 합니다.",
  },
  WINNING_NUMBERS: {
    NOT_NUMBER: "당첨 번호는 숫자로 입력해야 합니다.",
    INVALID_DELIMITER: "당첨 번호는 쉼표(,)로 구분해야 합니다.",
    OUT_OF_RANGE: "당첨 번호는 1부터 45 사이의 숫자여야 합니다.",
    NOT_INTEGER: "당첨 번호는 정수로 입력해야 합니다.",
  },
  BONUS_NUMBER: {
    NOT_NUMBER: "보너스 번호는 숫자로 입력해야 합니다.",
    OUT_OF_RANGE: "보너스 번호는 1부터 45 사이의 숫자여야 합니다.",
    NOT_INTEGER: "보너스 번호는 정수로 입력해야 합니다.",
    DUPLICATE: "보너스 번호는 당첨 번호와 중복되지 않아야 합니다.",
  },
};
