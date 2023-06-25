let ting = new Audio("ting.mp3"); 
let gameover = new Audio("gameover.mp3");

let turn = "X";

//Change Turn
const changeTurn = () => {
    return turn == "X" ? "O" : "X";
}

//Check winner
let isgameOver = false;
const checkWin = () => {
    const boxtexts = document.getElementsByClassName("boxText");
    const wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]
    wins.forEach(e=>{
        let i=e[0], j=e[1], k=e[2];
        if(boxtexts[i].innerText !== ""){
            if(boxtexts[i].innerText === boxtexts[j].innerText){
                if(boxtexts[j].innerText === boxtexts[k].innerText){
                    document.getElementsByClassName("info")[0].innerText = boxtexts[i].innerText + " Won.";
                    document.querySelector(".imgBox").getElementsByTagName("img")[0].style.display = "flex";
                    isgameOver=true;
                    gameover.play();
                    return;
                }
            }
        }
    });
}

//Game Login
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach((box) => {
    let boxtext = box.querySelector(".boxText");
    box.addEventListener("click" , () => {
        if(!isgameOver){
            if(boxtext.innerText === ""){
                boxtext.innerText = turn;
                turn = changeTurn();
                checkWin();
                if(!isgameOver) {
                    ting.play();
                    document.getElementsByClassName("info")[0].innerText = "Turn for "+ turn;
                }
            }
        }
    })
})

//Reset
document.getElementById("reset").addEventListener("click", ()=>{
    let boxes = document.getElementsByClassName("box");
    Array.from(boxes).forEach((box) => {
        let boxtext = box.querySelector(".boxText");
        boxtext.innerText = "";
    })
    turn = "X";
    isgameOver=false;
    document.getElementsByClassName("info")[0].innerText = "Turn for "+ turn;
    document.querySelector(".imgBox").getElementsByTagName("img")[0].style.display = "none";
})
