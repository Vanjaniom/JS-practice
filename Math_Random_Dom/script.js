//Task1 ✅ Create a dice roller. On button click, generate two random numbers between 1 and 6 using Math.random() and Math.floor(). Display the corresponding dice images based on the generated numbers. Declare a winner based on which number is higher or if it's a tie.
var audio1 = new Audio('audio/mixkit-sci-fi-click-900.wav');
var btn = document.querySelector("#roll");
var container = document.querySelector(".container");
var result = document.querySelector("#result");
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

// Task2✅ Create a card on button click. Generate a random RGB background color using Math.floor() and Math.random(). Set a random width and height. Assign a unique data-id using setAttribute().

let parent = document.querySelector("#parent");
let rand_btn = document.querySelector("#randomColorCard");

rand_btn.addEventListener("click",
    function(){
        navigator.vibrate(500)
        audio1.play();
        let card = document.createElement("div");
        let rand_height = Math.floor(Math.random()*100)+100;
        let rand_width = Math.floor(Math.random()*100)+100;
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

// Task3✅ Lottery System Take user input (1--50). Generate a random number using `Math.ceil()
// If the number matches user input, display "You Won" otherwise "Try
// Again". Update result dynamically in the DOM.

var userInput = document.querySelector("#UserInput");
var lotteryBtn = document.querySelector("#lotteryBtn");
var lotteryResult = document.querySelector("#lotteryResult");
lotteryBtn.addEventListener("click",
    function(){
        let random_no = Math.ceil(Math.random()*50)
        let no = Number(userInput.value);
        if(no<1 || no>50 || isNaN(no)){
            lotteryResult.textContent="Please enter a number between 1 and 50 and not anything";
            lotteryResult.style.color="orange";
            return;

        }
       if(no==random_no){
        lotteryResult.textContent="You Won!!";
        lotteryResult.style.color="green";
       }
       else{
        lotteryResult.textContent=`Try Again !! The correct no is ${random_no}`;
        lotteryResult.style.color="red";
       }
        

    }
)

// Task4  Store image URLs in an array. On button click, pick a random image using Math.floor(). Create an <img> element dynamically and append it to a container. Use getAttribute("src") to print the image source in console.
let img_urls = [
    'https://images.unsplash.com/photo-1771200478899-85601be7224c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1771323739915-fa011100ce35?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyOHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1771385706196-4cb302a5ad20?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0MHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1771250557679-52dd03d40d92?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0N3x8fGVufDB8fHx8fA%3D%3D',
    'https://plus.unsplash.com/premium_photo-1770738990289-d8f74d952247?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3Mnx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1771136681032-50ba1d52810b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMDB8fHxlbnwwfHx8fHw%3D'
]
let gallery = document.querySelector("#gallery");
let dynamic_btn = document.querySelector('#dynamic_btn')
dynamic_btn.addEventListener('click',
    function(){
        let random_idx = img_urls[Math.floor(Math.random()*img_urls.length)];
        let image = document.createElement("img")
        image.setAttribute("src",random_idx)
        gallery.appendChild(image);
        console.log(image.getAttribute("src"))
    }
)