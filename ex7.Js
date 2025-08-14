const sumArray=function(array){
    let sum=0;
 for(let i=0;i<array.length;i++ ){
    sum+=array[i];
 }
 return sum;
};
console.log(sumArray([1,2,3]));
console.log(sumArray([2,2,2,2]));
console.log(sumArray([50,50,1]));