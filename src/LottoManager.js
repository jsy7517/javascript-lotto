const { Random } = require('@woowacourse/mission-utils');

const Lotto = require('./Lotto');

class LottoManager {
  #lottos = [];
  #winningNumbers;
  #earningsRate = 0;

  initLottos(purchaseAmountInput) {
    this.validatePurchaseAmount(purchaseAmountInput);
    this.#lottos = this.issueLottos(parseInt(purchaseAmountInput, 10));
  }

  validatePurchaseAmount(purchaseAmountInput) {
    if (this.isInvalidPurchaseAmount(purchaseAmountInput)) {
      throw new Error(
        '[ERROR] 구입 금액은 1,000으로 나누어 떨어지는 숫자여야 합니다.',
      );
    }
  }

  isInvalidPurchaseAmount(purchaseAmountInput) {
    return (
      !/^\d+$/g.test(purchaseAmountInput) ||
      parseInt(purchaseAmountInput, 10) % 1000 !== 0
    );
  }

  issueLottos(purchaseAmount) {
    const lottoCount = purchaseAmount / 1000;
    const lottos = [];

    for (let i = 0; i < lottoCount; i++) {
      lottos.push(new Lotto(this.createLottoNumbers()));
    }

    return lottos;
  }

  createLottoNumbers() {
    const numberSet = new Set();

    while (numberSet.size < 6) {
      numberSet.add(Random.pickNumberInRange(1, 45));
    }

    return [...numberSet].sort((a, b) => a - b);
  }

  get lottos() {
    return this.#lottos;
  }

  get winningNumbers() {
    return this.#winningNumbers;
  }

  get earningsRate() {
    return this.#earningsRate;
  }
}

module.exports = LottoManager;
