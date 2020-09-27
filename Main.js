const print = require('./Implementation');
class Main {
    main() {
        console.log("Welcome To Gambling Simulation");
        var readline = require('readline');
        var input = readline.createInterface(process.stdin, process.stdout);
        input.question("Enter Number Of Days You Want To Play :", function (maxDay) {
        print.Simulation(maxDay);
        process.exit();
        })
    }
}
const object = new Main();
object.main();