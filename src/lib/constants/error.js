const ERROR_TAG = '[ERROR]';
const NOT_NUMBER_TEMPLATE = `에 숫자가 아닌 문자가 존재합니다.`;
const OUT_OF_BOUND_TEMPLATE = `는 1부터 45까지의 숫자여야 합니다.`;

const ERROR_TITLE = {
  PURCHASE_AMOUNT: `구입 금액`,
  WINNING_NUMBERS: `당첨 번호`,
  BONUS_NUMBER: `보너스 번호`,
  LOTTO: `로또 번호`,
};

const ERROR = {
  PURCHASE_AMOUNT: {
    NOT_NUMBER: `${ERROR_TAG} ${ERROR_TITLE.PURCHASE_AMOUNT}${NOT_NUMBER_TEMPLATE}`,
    SMALLER: `${ERROR_TAG} ${ERROR_TITLE.PURCHASE_AMOUNT}은 1,000원 이상이어야 합니다.`,
    CANNOT_BE_DIVIDED: `${ERROR_TAG} ${ERROR_TITLE.PURCHASE_AMOUNT}은 1,000으로 나누어 떨어지는 숫자여야 합니다.`,
  },
  WINNING_NUMBERS: {
    NOT_NUMBER: `${ERROR_TAG} ${ERROR_TITLE.WINNING_NUMBERS}${NOT_NUMBER_TEMPLATE}`,
    NOT_LOTTO_LENGTH: `${ERROR_TAG} ${ERROR_TITLE.WINNING_NUMBERS}의 개수는 로또 번호의 개수와 같아야 합니다.`,
    OUT_OF_BOUND: `${ERROR_TAG} ${ERROR_TITLE.WINNING_NUMBERS}${OUT_OF_BOUND_TEMPLATE}`,
    DUPLICATE: `${ERROR_TAG} ${ERROR_TITLE.WINNING_NUMBERS}에 중복된 숫자가 없어야 합니다.`,
  },
  BONUS_NUMBER: {
    NOT_NUMBER: `${ERROR_TAG} ${ERROR_TITLE.BONUS_NUMBER}${NOT_NUMBER_TEMPLATE}`,
    OUT_OF_BOUND: `${ERROR_TAG} ${ERROR_TITLE.BONUS_NUMBER}${OUT_OF_BOUND_TEMPLATE}`,
    DUPLICATE: `${ERROR_TAG} ${ERROR_TITLE.BONUS_NUMBER}는 이전에 입력한 당첨 번호에 없는 숫자여야 합니다.`,
  },
  LOTTO: {
    NOT_LOTTO_LENGTH: `${ERROR_TAG} ${ERROR_TITLE.LOTTO}는 6개여야 합니다.`,
    OUT_OF_BOUND: `${ERROR_TAG} ${ERROR_TITLE.LOTTO}${OUT_OF_BOUND_TEMPLATE}`,
    DUPLICATE: `${ERROR_TAG} ${ERROR_TITLE.LOTTO}는 중복이 없어야 합니다.`,
  },
};

module.exports = { ERROR };
