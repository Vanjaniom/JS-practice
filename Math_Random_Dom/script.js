//Task1 ✅ Create a dice roller. On button click, generate two random numbers between 1 and 6 using Math.random() and Math.floor(). Display the corresponding dice images based on the generated numbers. Declare a winner based on which number is higher or if it's a tie.
var audio1 = new Audio('audio/mixkit-sci-fi-click-900.wav');
var btn = document.querySelector("#roll");
var container = document.querySelector(".container");
var result = document.querySelector("#result");
var reset = document.querySelector("#reset");
var dice_img =[
    'https://cdn-icons-png.flaticon.com/128/8336/8336943.png',
    'https://cdn-icons-png.flaticon.com/128/8336/8336956.png',
    'https://cdn-icons-png.flaticon.com/128/8336/8336955.png',
    'https://cdn-icons-png.flaticon.com/128/8336/8336933.png',
    'https://cdn-icons-png.flaticon.com/128/8336/8336931.png',
    'https://cdn-icons-png.flaticon.com/128/8336/8336948.png'
];


function diceFacotry(){
    let rand_dice1 = Math.floor(Math.random()*6);
    let rand_dice2 = Math.floor(Math.random()*6);
    
}

btn.addEventListener("click",
    function(){
        navigator.vibrate(300)
        container.innerHTML="";
        let rand_dice1 = Math.floor(Math.random()*6);
        let rand_dice2 = Math.floor(Math.random()*6);
        let dice1 = document.createElement("img");
        let dice2 = document.createElement("img");
        dice1.setAttribute("src",dice_img[rand_dice1]);
        dice2.setAttribute("src",dice_img[rand_dice2]);
        console.log(rand_dice1,rand_dice2)
        
        container.appendChild(dice1);
        container.appendChild(dice2);
        if(rand_dice1>rand_dice2){
            result.innerHTML="Player 1 wins!!";
            result.style.color="green";
            container.appendChild(result);
            console.log(result);
        }
        else if(rand_dice1<rand_dice2){
            result.innerHTML="Player 2 wins!!";
            result.style.color="green";
            container.appendChild(result);
            console.log(result);
        }
        else{
            result.innerHTML="It's a tie!!";
            result.style.color="royalblue";
            container.appendChild(result);
            console.log(result);
        }
        
    }
)

// Task2 Create a card on button click. Generate a random RGB background color using Math.floor() and Math.random(). Set a random width and height. Assign a unique data-id using setAttribute().

let parent = document.querySelector("#parent");
let rand_btn = document.querySelector("#randomColorCard");

rand_btn.addEventListener("click",
    function(){
        navigator.vibrate(500)
        audio1.play();
        let card = document.createElement("div");
        let rand_height = Math.floor(Math.random()*200)+100;
        let rand_width = Math.floor(Math.random()*200)+100;
        let r = Math.floor(Math.random()*256)
        let g = Math.floor(Math.random()*256)
        let b = Math.floor(Math.random()*256)
        card.style.height=`${rand_height}px`;
        card.style.width=`${rand_width}px`;
        card.style.display="inline-block";
        console.log(card.style.backgroundColor=`rgb(${r},${g},${b})`)
       card.setAttribute("data-id",Date.now());
        console.log(card);
        
        parent.appendChild(card);
    }
)