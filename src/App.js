const { Console } = require('@woowacourse/mission-utils');

const LottoManager = require('./LottoManager');

class App {
  lottoManager;

  play() {
    Console.readLine('구입금액을 입력해주세요.\n', purchaseAmount => {
      try {
        this.lottoManager = new LottoManager(purchaseAmount);
        this.printLottos(this.lottoManager.lottos);
        this.inputWinningNumbers();
      } catch (err) {
        this.exitGame(err.message);
        throw err;
      }
    });
  }

  printLottos(lottos) {
    Console.print('');
    Console.print(`${lottos.length}개를 구매했습니다.`);
    lottos.forEach(lotto => Console.print(`[${lotto.numbers.join(', ')}]`));
  }

  inputWinningNumbers() {
    Console.print('');
    Console.readLine('당첨 번호를 입력해주세요.\n', winningNumbers => {
      this.lottoManager.validateWinningNumbers(winningNumbers);
    });
  }

  exitGame(errorMessage) {
    Console.print(errorMessage);
    Console.close();
  }
}

new App().play();

module.exports = App;
