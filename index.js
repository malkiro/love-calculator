function loveCalculator(){
    var randomNumber = Math.floor(Math.random() * 100) + 1;
    return randomNumber;
}


prompt("What is your name?");
prompt("Your partner Name?");

var randomNumber = loveCalculator();
// alert("You have " + randomNumber + "% matching");

if(randomNumber >= 70){
    alert("You have " + randomNumber + "% matching and you guys are made for each other.");
}else if(randomNumber > 50 && randomNumber < 70){
    alert("You have " + randomNumber + "% matching and you guys are OK.");
}else{
    alert("You have " + randomNumber + "% matching and you guys are like water and oil.");
}

