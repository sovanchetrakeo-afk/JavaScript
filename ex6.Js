function lastElement(arr){
   let measure=arr.length;
   if(measure===0){
    return null;
   }
   let setarray=measure-1;
   return arr[setarray];
}
console.log(lastElement([3,5,7]));
console.log(lastElement([1]));
console.log(lastElement([]));
