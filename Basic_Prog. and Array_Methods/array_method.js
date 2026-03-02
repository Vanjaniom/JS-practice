//1 Write a function that uses forEach() to calculate the total sum of an array.
let sum = 0 
arr=[1,2,3,4,5]
arr.forEach((ele)=>{
    sum+=ele
})
console.log(sum);


//2 Write a function that uses map() to return a new array where each number is squared.
arr2_sqrt = arr.map(ele=>ele*2)
console.log(arr2_sqrt);

//3 Write a function that uses filter() to return only numbers greater than 50.
arrayy=[34,5,75,23,678,4,90,77]
let arr_filter = arrayy.filter((ele)=>ele>50)
console.log(arr_filter);

//4 Write a function that checks whether two values are strictly equal using ===.
let check_strict = (a,b)=> a===b ? "Yes Sir" : "Nope"
let result = check_strict(12,2)
console.log(result);

//5 Write a function that demonstrates array mutability by modifying the original array using push().
function demonstrate(ele)
{
        ele.push(909)
        console.log(ele);        

}
demonstrate(arrayy)
// setInterval(function()
// {
//     demonstrate(arrayy)
// },2000)
// console.log(arrayy); // So here affect original array so it demonstrate

//6 Write a function that removes the last element immutably (without modifying original array).
console.log("Before slice ",arrayy);

function poppp(arr)
{
   let res = arr.slice(0,arr.length-1)
   console.log(res);
    console.log(arr);
    
}
poppp(arrayy)

//7 Write a function that sorts numbers in ascending order using a proper compare function.
let sortNum = arrayy.sort((a,b)=>a-b)
console.log(sortNum);

//8 Write a function that sorts strings alphabetically.
let str = [ 'function','art','mar','ds','drt','ommm','bde','exce']
let sortStr = str.sort()
console.log(sortStr);

//9 Write a function that reverses an array without using reverse().
let numbers=[11,22,33,44,35]
let emptyRev=[]
for(i=numbers.length-1;i>=0;i--)
{
    emptyRev.push(numbers[i])
}
console.log(emptyRev);


//10 Write a function that merges two arrays using concat() and returns the result.
let arr1=['OM','Krish','Rudra','Yupp']
let arr2=[5,6,7,8]
function merger(a1,a2){
    return a1.concat(a2)
}
let res = merger(arr1,arr2) // original remain as it is
console.log(res);

//11 Write a function that manually checks whether a value exists in an array (without using includes()).

// function find_ele(ele,val)
// {
//     for(let i of ele)
//     {
//         if(val===i) return "element Got it"
//     }
//     return "Nai mila yaar"
// }
// console.log(find_ele(arr1,"Rudra"))

// //12 
// let m1=[1,2,3,45,10]
// let m2=[2,3,45,7,8,10,9]
// function merger_arr(arr1,arr2)
// {
//     let uniques=[]
//     let res = arr1.concat(arr2)
//     console.log(res);
//     for(let i=0;i<res.length;i++)
//     {
//         let isDuplicate = false
        
//         for(let j=0;j<uniques.length;j++)
//         {
//             if(res[i]==uniques[j])
//             {
//                 isDuplicate=true
//                 break
//             }
//         }
//         if(!isDuplicate)
//         {
//             uniques.push(res[i])
//         }
//     }
//     console.log(uniques);
    
// }
// merger_arr(m1,m2)


// Write a function that uses includes() to check if an array contains a specific value.
let fruits=["apple","orange","banana"]
function use_include(arr,val)
{
   console.log( "Check includes method :: "+arr.includes(val))

}
use_include(fruits,"ple")

//Write a function that filters strings starting with "A" using startsWith().
function filterby_st(arr)
{
    let arr2 = arr.filter(val=> val.startsWith("A") || val.startsWith("a"))
    console.log(arr2);
}
filterby_st(fruits)

// Write a function that uses find() to return the first number greater than 100.
function find_greater(arr)
{
    let res = arr.find(val=>val>100)
    console.log(res);
}
find_greater(fruits) // here it will return undefined as there is no number in fruits array
find_greater(arrayy) // here it will return 678 as it is the first number greater than 100 in arrayy

// Create an object and write a function that returns all its keys using a loop.
let obj = {
        name:"OM",
        age:18,
        city:"Banglore",
        profession:"Student",
    }

// function get_keys(o)
// {
//     let keys=[]
//     for (let key in o)
//     {
//         keys.push(key)
//     }
//     return keys
// }    
// console.log(get_keys(obj))

// Write a function that adds a new property to an object immutably.
// function add_p_imm(obj,key,val)
// {
//  obj[key]=val
//  return obj;
// }
// let ans = add_p_imm(obj,"isSingle",true)
// console.table(ans);
// console.table(obj);

// Write a function that checks whether a specific key exists inside an object.
// function getExistKey(obj,key)
// {
//     for (const element in obj) {
//             if(element==key) return "Exist it!!"
            
//         }
//          return "Not Exist"
// }
// console.log(getExistKey(obj,"ame"))

//Write a function that converts an object into an array of key-value pairs.
function convertintoarray(o)
{
    // let result=[]
    // for(let key in o)
    // {
    //     result.push([key,o[key]])
    // }
    // return result
    return Object.entries(o)
    

}
console.log(convertintoarray(obj))