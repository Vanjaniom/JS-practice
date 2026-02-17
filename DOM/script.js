//For Task1 ✅
let ct = document.getElementById('content')
var button1 = document.querySelector('#btn1')
button1.addEventListener('click',function(){
    if(ct.innerHTML=='Hello') {

        ct.innerHTML='Welcome'
        button1.innerHTML='Hello'
    }
    else{
        ct.innerHTML='Hello'
        button1.innerHTML='Welcome'
    }
})

//For Task2 ✅
let box = document.querySelector('#box')
let button2 = document.querySelector('#changeColor')

button2.addEventListener('click',function(){

        if(box.style.backgroundColor=='red')
        {
            box.style.backgroundColor='green'
        }
        else if(box.style.backgroundColor=='green')
        {
            box.style.backgroundColor='blue'
        }
        else{
            box.style.backgroundColor='red'
        }        
})

//For Task3 ✅
let boxsh = document.querySelector('#tsk3')
let button3 = document.querySelector('#togglebtn')
let visible = false
button3.addEventListener('click',
    function(){
        if(visible==true)
        {
            boxsh.style.display='block'
            button3.textContent='Hide'
            console.log("Before",visible);
            visible=false
            console.log("After",visible);
            
        }
        else{
            boxsh.style.display='none'
            button3.textContent='Show'
            console.log(visible);
            visible=true
            console.log(visible);
        }
    }
)

//For Task4 ✅
let rotateBox = document.querySelector('#tsk4')
let rtleft = document.querySelector('#rotleft')
let rtright = document.querySelector('#rotright')
let angle = 0

rtright.addEventListener('click',function()
    {
        angle=angle+45
        console.log(rotateBox.style.transform=`rotate(${angle}deg)`)
    })

rtleft.addEventListener('click',function(){
    angle=angle-45
    console.log(rotateBox.style.transform=`rotate(${angle}deg)`)
})    


//For Task5 ✅
let given_no = document.querySelector('#num_inc_dec')
let inc = document.querySelector('#increase')
let dec = document.querySelector('#decrease')
let currentNo=0
inc.addEventListener('click',function(){
    currentNo++
    given_no.innerHTML=currentNo
    console.log(currentNo)
})

dec.addEventListener('click',function(){
    if(currentNo>0) 
    {
        currentNo--
        given_no.innerHTML=currentNo
        console.log(currentNo)
    }
   
})

//For Task6✅
let whole = document.body;
let changeMode = document.querySelector('#changeMode')
changeMode.addEventListener('click',
    function(){
        if(whole.style.backgroundColor==='black'){
            
            whole.style.backgroundColor='white'
           whole.style.color='black'
        }
        else{
            whole.style.backgroundColor='black'
            whole.style.color='white'
        }
    }
)

//For Task7✅
let inp = document.getElementById('input');
let immediateText = document.getElementById('cpymess')
inp.addEventListener('input',
    function(event)
    {
        immediateText.innerHTML=inp.value;
    }
)

//For Task8✅
let changeBoxColor = document.querySelector('#tsk8')
changeBoxColor.addEventListener('mouseenter',
    function(){
        changeBoxColor.style.backgroundColor='yellow'
    }
)

changeBoxColor.addEventListener('mouseleave',
    function(){
        changeBoxColor.style.backgroundColor='green'
    }
)

//For Task9
let text = document.getElementById('text')
let btn9 = document.getElementById('btn9')
btn9.addEventListener('click',
    function(){
        text.innerHTML='Button Clicked!'
        text.style.color='green'
        btn9.disabled=true
    }
)