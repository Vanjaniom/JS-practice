// // 1.  Write a function that prints "Hello World".
// function printHelloWorld()
// {
//     console.log("Hello World");
// }
// printHelloWorld()


// // 2.  Write a function that adds two numbers and returns the result.
// function addTwoNum(num1,num2)
// {
//     return result = num1 + num2
// }
// console.log(addTwoNum(4,5));
// //! console.log(result+1); not directly here assign result because it becomes global variable


// // 3.  Write a function that takes a name as a parameter and prints it.
// function greet(uname)
// {
//     console.log("Hello ,",uname);
// }
// greet("Om")


// // 4.  Create a function that returns the square of a number.
// let sqrt = (num)=>num**2
// console.log(sqrt(8));


// // 5.  Write a function that checks if a number is even.
// function isEven(num)
// {
//     if(num%2==0) return "Even"
//     return "Odd"
// }
// console.log(isEven(19));


// // 6.  Create a function that returns the last character of a string.
// function lastChar(str)
// {
//     console.log(str[str.length-1])
// }
// lastChar("zindex")


// // 7.  Write a function that returns the first element of an array.
 let arr1=[12,34,53,11,56,78]
// function firstEle(arr)
// {
//     if(arr.length===0) return "Empty"
//     return arr[0];
// }
// console.log(firstEle(arr1));


// // 8.  Write a function that returns the last element of an array.
// function lastEle(arr)
// {
//     if(arr.length===0) return "Empty Array"
//     return arr[arr.length-1]
// }
// console.log(lastEle(arr1));


// // 9.  Write a function that prints all elements of an array.
// function printAllEle(arr)
// {
//     console.log("Array All element ::");
//     for(let i of arr)
//     {
//         console.log(i);
//     }
// }
// printAllEle(arr1)


// // 10. Write a function that returns the length of an array.
// function getLength(arr)
// {
//     return arr.length
// }
// console.log("Length of Array ::"+ getLength(arr1));


// 11. Write a function declaration that multiplies two numbers.
// function multiplies(num1,num2)
// {
//     return num1 * num2
// }
// console.log(multiplies(4,2));


// // 12. Write a function expression that subtracts two numbers.
// let subtracts = (num1,num2)=> num1-num2
// console.log(subtracts(7,2));


// // 13. Write an arrow function that converts a string to uppercase.
// let uppercase = (str)=> str.toUpperCase()
// console.log(uppercase("prettty little thing"));


// // 14. Write an arrow function that calculates a number's cube.
// let cube =(num)=> num**3
// console.log(cube(3));


// // 15. Create a function that joins two strings and returns the result.
// function joinStr(st1,st2)
// {
//     return st1 + st2;
// }
// console.log(joinStr('Om','Vanjani'))


// // 16. Write a function that takes two parameters and returns which one is  bigger.
// function bigger(a,b)
// {
//     if(a>b) return `${a} is bigger`
//     return `${b} is bigger`
// }
// console.log(bigger(11,9));


// // 17. Write a function that takes three parameters and returns the smallest number.
// function three_small(a,b,c)
// {
//     if(a<=b && a<=c) return `${a} is Small`
//     else if (b<=a && b<=c) return `${b} is Small`
//     return `${c} is Small`
// }
// console.log(three_small(11,11,5));


// // 18. Write a function that prints any message five times (using a parameter).
// function printFiveTime(message)
// {
   
//     for(let i=0;i<5;i++)
//     {
//         console.log(message);
//     }
//     // console.log((message+"\n").repeat(5));

// }
// printFiveTime("Waheguru Ji") 


// // 19. Write a function that takes an array and returns only even numbers.
// function isEvenArr(arr)
// {
//    let evenArr = arr.filter((num)=> num%2===0)
//     return evenArr
    
// }
// console.log(isEvenArr(arr1));


// // 20. Write a function that takes an array and returns only odd numbers.
// function isOddArr(arr)
// {
//     let oddArr = arr.filter((num)=> num%2!==0)
//     return oddArr
// }
// console.log(isOddArr(arr1));


// 21. Write a function that removes the first element of an array (using shift).
// function removeFirstEle(arr){
//     arr.shift()
//     console.log("After Removing First Element ::",arr);
// }
// removeFirstEle(arr1)


// 22. Write a function that adds a value to the start of an array (using unshift).
// 

// 31. Write a function that returns the sum of all numbers in an array.
function getSum(arr)
{
   let sum =  arr.reduce( function(accumulator,currentVal){
    return accumulator+currentVal
   },0)
   console.log(sum);
}
getSum([2,3,4,5])


// 32. Write a function that returns the biggest number from an array.
function getBiggestNum(arr)
{
  return arr.reduce((accumulator,currentVal)=>{
      return currentVal>accumulator ? currentVal : accumulator
         
  })
}
console.log(getBiggestNum([3,5,1,2,11,12,44]));


// 33. Write a function that returns the smallest number from an array.
function getSmallestNum(arr)
{
   return arr.reduce((accumulator,currentVal)=>{
         return currentVal<accumulator?currentVal:accumulator
   })
}
console.log(getSmallestNum([3,5,34,2,11,12,44])); 


// 34. Write a function that doubles each number in an array.
function getDouble(arr)
{
   return arr.map((num)=>num+num)
}
console.log(getDouble([2,3,4,5]));


// 35. Write a function that removes duplicate items from an array.
function removeDup(arr)
{
   let uni=[]
   for(let i of arr)
   {
      if(!uni.includes(i))
      {
         uni.push(i)
         
      }
   }
   return uni
}
console.log(removeDup([1,2,3,2,4]));
// 36. Write a function that takes an array and returns only positive numbers.
function getPositiveNum(arr)
{
   return arr.filter((num)=>num>0)
}
console.log(getPositiveNum([2,4,-12,-45,23,5]));


// 37. Write a function that checks if a number is divisible by 10.
function divisible(arr)
{
   return arr.filter((num)=>num%10===0)
}
console.log(divisible([100,2,3,546,35,5,1]));
// 38. Write a function that prints the index of each item in an array.
function printIdx(arr)
{
   arr.forEach(function(val,idx){
      console.log("Value is::"+val +" and index is::"+idx)
   })
   return "Executed Done"
}
console.log(printIdx([2,3,4,3,12,45,7]));


// 39. Write a function that returns the middle element of an array.
function middleEle(arr)
{
   return arr[Math.floor(arr.length/2)]

}
console.log(middleEle([1,2,3,4,5,6,7]));
// 40. Write a function that removes 1 element from the middle of an array    using splice.
function removeMiddleEle(arr)
{
   let mid = Math.floor(arr.length/2)
   arr.splice(mid,1)
   return arr
}
console.log(removeMiddleEle([1,2,3,4,5,6,7]));