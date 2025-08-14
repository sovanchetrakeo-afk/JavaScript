function isSnakeEyes(dice1,dice2){
 if(dice1===1&&dice2===1){
    console.log("Snake Eyes!\n");
 }else if (dice1===1&&dice2!=1){
    console.log("Not Snake Eyes!\n")
 }else if(dice1!=1&&dice2===1){
    console.log("Not Snake Eyes!\n")
}else if(dice1!=1&&dice2!=1){
    console.log("Not Snake Eyes!\n")
}
}
isSnakeEyes(1,1);
isSnakeEyes(1,5);
isSnakeEyes(4,5);
