class Model{
 bet(){
    
    var toss= Math.floor((Math.random() * 2));
    if(toss ==1){
        console.log("Won");
    }
    else{
        console.log("Loose");
    }
}
}
module.exports=new Model();
