let obj = {
  uname: "OM",
  age: 19,
  city: "Rajkot",
  skills: ["Discipline", "Consistency"],
  address: {
    newaddress:{
        home:"HELLO JI"
    },
    near: "Shubah Chandra Boss",
    flatNo: "a-24",
  },
};


let {address:{newaddress:{home}}} = obj
let {skills:[first]} = obj
console.log(home);
console.log(first);
