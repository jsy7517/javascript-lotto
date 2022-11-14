class WinningHistory {
  #winningList;
  #profitRate;

  initWinningList({ lottos, winningNumbers, bonusNumber }) {
    this.#winningList = lottos.reduce(
      (prevWinningList, lotto) => {
        const correctNumberCount = this.calcCorrectNumberCount(
          lotto.numbers,
          winningNumbers,
        );
        const isBonus = this.isBonus(lotto.numbers, bonusNumber);
        return this.updateWinningList(prevWinningList, {
          correctNumberCount,
          isBonus,
        });
      },
      [0, 0, 0, 0, 0],
    );
  }

  calcCorrectNumberCount(lottoNumbers, winningNumbers) {
    return lottoNumbers.filter(lottoNumber =>
      winningNumbers.includes(lottoNumber),
    ).length;
  }

  isBonus(lottoNumbers, bonusNumber) {
    return lottoNumbers.includes(bonusNumber);
  }

  updateWinningList(winningList, { correctNumberCount, isBonus }) {
    const lottoRank = this.getLottoRank(correctNumberCount, isBonus);

    if (lottoRank) {
      winningList[lottoRank - 1]++;
    }

    return winningList;
  }

  getLottoRank(correctNumberCount, isBonus) {
    switch (true) {
      case correctNumberCount === 3:
        return 5;
      case correctNumberCount === 4:
        return 4;
      case correctNumberCount === 5 && isBonus === false:
        return 3;
      case correctNumberCount === 5 && isBonus === true:
        return 2;
      case correctNumberCount === 6:
        return 1;
      default:
        return null;
    }
  }

  calcProfitRate(purchaseAmount) {
    /**
     * TODO: 소수점 둘째 자리에서 반올림
     */
  }

  get winningList() {
    return this.#winningList;
  }

  get profitRate() {
    return this.#profitRate;
  }
}

module.exports = WinningHistory;