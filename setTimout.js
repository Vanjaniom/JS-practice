console.log("Start....");
let timer = setTimeout(function () {
  console.log("Set Timeout ..");
});

clearInterval(timer);
console.log("Timer Cancelled");

//Immediate Invoke Function
((naam) => {
  console.log("Munjo Nalo ", naam);
})("OM");

//This for Toast
let cl = document.querySelector("button");
let toast = document.querySelector(".toast");
let timers;
cl.addEventListener("click", function () {
  toast.classList.add("show");

  clearInterval(timer);
  timers = setTimeout(function () {
    toast.classList.remove("show");
  }, 2000);
});
