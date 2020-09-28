let array = new Array(30);
let stake = 100;

class Implementation {

  GenerateRandomNumber = () => {
    let r1, r2;
    let Random = Math.floor((Math.random() * 10));
    r1 = Random % 10;
    r2 = r1 % 2;
    return r2;
  }

  Simulation = (maxDay) => {
    let winAmount = 0;
    let lostAmount = 0;
    do {
      let day = 1;
      let dailyWin = 0;

      while (day <= maxDay) {
        let winStake = 100;
        let lostStake = 100;

        while (winStake < 150 || lostStake > 50) {
          let random = this.GenerateRandomNumber();
          switch (random) {
            case 0:
              lostStake = lostStake - 1;
              dailyWin = dailyWin - 1;
              array[day - 1] = dailyWin;
              break;

            case 1:
              winStake = winStake + 1;
              dailyWin = dailyWin + 1;
              array[day - 1] = dailyWin;
              break;
          }
        }
        winAmount = winStake - stake;
        lostAmount = stake - lostStake;
        console.log("----------------------------------------------------------------------------------");
        console.log("Day => " + day);
        console.log("Win amount is :" + winAmount + " and Lost amount is :" + lostAmount);
        if (winAmount > lostAmount) {
          console.log("Day " + day + " win by " + (winAmount - lostAmount));
        }
        else {
          console.log("Day " + day + " lost by " + (lostAmount - winAmount));
        }
        day = day + 1;
      }
      this.GetLuckyUnluckyDay(array);
    } while (winAmount > lostAmount);
  }

  GetLuckyUnluckyDay = (array) => {
    let luckyDay = 0;
    let unluckyDay = 0;
    let high = array[0];
    let low = array[0];
    for (let i = 1; i < array.length; i++) {
      if (high < array[i]) {
        high = array[i];
        luckyDay = i + 1;
      }
      if (low > array[i]) {
        low = array[i];
        unluckyDay = i + 1;
      }
    }
    console.log("Luckiest day is day : " + luckyDay + " and He won : " + high);
    console.log("Unluckiest day is day : " + unluckyDay + " and He lost : " + low);
  }
}

module.exports = new Implementation();
