console.log("welcome to tic tak toe")
let turn ="X"
let music1 = new Audio("play.mp3")
let music = new Audio("song1.mp3")
let music2 = new Audio("song4.mp3")
let music3 = new Audio("song5.mp3")
gameover=false;

const changeturn = () =>{
    return turn === "X"?"0":"X"
}

const checkwin =()=>{
let boxtext=document.getElementsByClassName('boxtext');
let wins=[
    [0,1,2, 5,5,0],
    [3,4,5,5,15,0],
    [6,7,8,5,25,0],
    [0,3,6,-5,15,90],
    [1,4,7,5,15,90],
    [2,5,8,15,15,90],
    [0,4,8,5,15,45],
    [2,4,6,5,15,135],
]
wins.forEach(e =>{
    if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) &&(boxtext[e[0]].innerText !=='')){
    document.querySelector('.info').innerText = boxtext[e[0]].innerText + "Won"
    gameover=true
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width="200px"
    document.querySelector(".line").style.transform =`translate(${e[3]}vw,${e[4]}vw)rotate(${e[5]}deg)`
    document.querySelector(".line").style.width="20vw";
    music3.play();
    }
})
} 

 let boxes=document.getElementsByClassName("box");
 Array.from(boxes).forEach(element =>{
    let boxtext=element.querySelector(".boxtext");
    element.addEventListener('click',()=>{
        if(boxtext.innerText ===''){
        boxtext.innerText=turn;
        turn = changeturn();
        music.play();
        checkwin();
        music2.play();
        if(! gameover){
        document.getElementsByClassName("info")[0].innerText="Turn for " +turn;
        }
        }
    })
 })

 reset.addEventListener('click',()=>{
    let boxtexts=document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element =>{
        element.innerText= ""
    })
    turn ="X"
    gameover=false
    document.querySelector(".line").style.width="0vw"
    document.getElementsByClassName("info")[0].innerText=" Turn for" + turn;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width="0px"
 })