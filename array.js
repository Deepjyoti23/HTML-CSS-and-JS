// const arrNumber=[1,2,'a','b',3,15];

// const res = arrNumber.filter((n)=>{
//     return typeof(n)==='number' 
        
// })
// console.log(res);

// // const str="kjbgdkj"
// // console.log(typeof(str));

// function arrayDiff(a,b){
//     if(a.length == 0)
//         return b;
//     else{
//         const arr = a.filter((e) => !b.includes(e) )
//         return arr
//     }

// }

// const result=arrayDiff([1,2,2,2,3],[2])
// console.log(result);

// var first = [ 1, 2, 3, 4, 5 ];
// var second = [ 4, 5, 6 ];
 
// var difference = first.filter(x => 
//     // console.log(second.indexOf(x));
//     second.indexOf(x) === -1);
// console.log(difference);


// const obj = [{ name:"Bart"},{ name:"Lisa"},{ name:"Maggie"},];
// // if(obj.length===0)
// // console.log(obj)

// if(obj.length===1)
// console.log(obj[0].name)
// else{

//     let newobj = [];
//     for(i=0; i<obj.length; i++){
//         if(i !== obj.length-1)
//             newobj.push(obj[i].name)
//     }
//     console.log(newobj.join(), "&" ,obj[obj.length-1].name);
// }


// let count=0;
// function persistence(num){

// let stringTo = num.toString().split('');
// // console.log(stringTo);
// let mul=1;
// for(let i=0; i<stringTo.length; i++){
//     mul=mul*stringTo[i]
    
// }
// // console.log(mul);
// count++
// // console.log(count);
// if(mul>9)
// {
//     persistence(mul);
// }
// return count;
// }
// const numPassed = 999;
// if(numPassed>9){
//     const res2=persistence(numPassed)
//     console.log(res2);
// }
// else
//     console.log(0)

// function pinGeneration(pin){
//     return /^(\d{4}|\d{6})$/.test(pin)
// }
// const res3 = pinGeneration(2564);
// console.log(res3);



// function lowerCaseCount(str){
//     const regex =  /[a-z]+/
//     const strMatch =str.match(regex)
//     console.log(strMatch[0].split('').length);
// }

// lowerCaseCount('abchchgjgbkhABC123');

// function capitalise(s){
//     const res4 = s.split('').map((arritem,index)=>index%2==0?arritem.toUpperCase():arritem)
//     const res6 = s.split('').map((arritem,index)=> index%2==0? arritem : arritem.toUpperCase())
//     return [res4.join(""),res6.join("")];
// } 

// const res5=  capitalise('abcdef');
// console.log(res5);


// function maxNumber(n){
//     return Number(n.toString().split("").sort().reverse().join(""));
// }
// const res7 = maxNumber(7389);
// console.log(res7);

arr=[1,2,3,4,5,6,7,8,9,10]
// const res = arr.reduce((sum,arritem) =>  sum=sum+arritem)
console.log( arr.reduce((sum,arritem) =>  sum=sum+arritem));