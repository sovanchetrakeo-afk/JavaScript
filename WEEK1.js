//1
let firstName="Sovanchetra";
let lastName="Keo";
console.log("Hello, my name is ",firstName,lastName);
//2
let a=10;
let b=5;
let c=2;
console.log("The result of this formula:", a*b+c);
//3
let isSunny=false;
if(isSunny){
    console.log("Wear sunglasses");
}else{
   console.log("Take an umbrella ");
}
//4
let fiveNum=["10","3","12","13","15"];
let numGreatthan10="";
for (let index = 0; index < 5; index++) {
   if(fiveNum[index]>10){
    numGreatthan10+=fiveNum[index] + " "; 
   }   
}
console.log("the  number are greater than 10: ", numGreatthan10);
//5
const Book={title: "JavaScript Basics",   author: "sreypov",   pages: 120 };
console.log("The book ",Book.title,"by ",Book.author,"has ",Book.pages,"pages");
//6
let even_num="";
for(let i=1;i<=20;i++){
    if(i%2==0){
        even_num+=i+" ";
    }
}
console.log("The even numbers are:",even_num.trim());
//7
let CountDown_num="";
let i=10;
while(i===10||i>=1){
    CountDown_num+=i+" ";
    i-=1;
}
console.log("The numbers are counted down from 10 to 1:",CountDown_num.trim());
//8
const numbers = [1, 2, 3, 4, 5];

numbers.forEach((number) => {
  console.log(number * 2);
});
//9
let phrase = "  JavaScript is fun!  ";
let trimmed = phrase.trim();
let uppercased = trimmed.toUpperCase();
console.log(uppercased);
//10
let studentScores = [85, 42, 77, 60, 90, 35, 68, 59, 73];
let passCount = 0;

for (let i = 0; i < studentScores.length; i++) {
  if (studentScores[i] >= 60) {
    passCount++;
  }
}

console.log("Number of students who passed:", passCount);


