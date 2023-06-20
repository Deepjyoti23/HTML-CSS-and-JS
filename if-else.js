// let num =42;
// if(num<0){
//     console.log(num);
// }
// else
//     console.log(-num);

//Question
// let myArray = [34,15,88,2];
// // let small = 0;
// for(let i=0; i<myArray.length; i++){
//      let arrNumber = myArray[i];
//      if(small > arrNumber)
//             small=arrNumber;
    
// }
// console.log(small)

//Question
// let sum=0;
// const summation = (n) => {
//     for(let i=1; i<=n; i++)
//     {
//         sum = sum+i;
//     }
//     return sum;
// }
// const res = summation(4);
// console.log(res);

//Question
let sum=0;
// let avg=0;
function getAverage(scoreArray){
    for(let i=0; i<scoreArray.length; i++){
        sum= sum+scoreArray[i];
    }   
    //  sum/scoreArray.length;

    return sum/scoreArray.length;;
}

const result =Math.floor( getAverage([100,25,45,80]));
console.log(result);

//Question

let str="deepjyoti"
// const res = str.slice(1,str.length-1);
console.log(str.slice(1,-1));