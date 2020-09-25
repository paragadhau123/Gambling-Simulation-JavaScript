class Controller{
    main(){
        console.log("Welcome To Gambling Simulation");
        const print = require('./Model');
        print.Simulation();
            
        
    }
}
const object = new Controller();
object.main();