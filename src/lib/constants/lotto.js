const ONE_BILLION = 10000 * 10000 * 10;
const ONE_MILLION = 10000 * 100;
const ONE_THOUSAND = 1000;

const LOTTO = {
  NUMBER_COUNT: 6,
  MIN_NUMBER_LIMIT: 1,
  MAX_NUMBER_LIMIT: 45,
  UNIT_PRICE: 1000,
};

const LOTTO_PRIZE = {
  FIRST: {
    CONDITION: `6개 일치`,
    PRIZE_MONEY: ONE_BILLION * 2,
  },
  SECOND: {
    CONDITION: `5개 일치, 보너스 볼 일치`,
    PRIZE_MONEY: ONE_MILLION * 30,
  },
  THIRD: {
    CONDITION: `5개 일치`,
    PRIZE_MONEY: ONE_MILLION * 1.5,
  },
  FOURTH: {
    CONDITION: `4개 일치`,
    PRIZE_MONEY: ONE_THOUSAND * 50,
  },
  FIFTH: {
    CONDITION: `3개 일치`,
    PRIZE_MONEY: ONE_THOUSAND * 5,
  },
};

module.exports = {
  LOTTO,
  LOTTO_PRIZE,
};