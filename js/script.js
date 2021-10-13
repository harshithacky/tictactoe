const boxes = document.querySelectorAll('.box');
let turn = "X";
let gameOver = false;

//Change turn
const changeTurn = ()=>{
    return turn === "X" ? "0" : "X";
}

//Check for win
const checkWin = ()=>{
    let boxText = document.querySelectorAll('.boxtext');
    let wins = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ];
    wins.forEach(e=>{
        if((boxText[e[0]].innerText===boxText[e[1]].innerText)&&(boxText[e[1]].innerText===boxText[e[2]].innerText)&&(boxText[e[0]].innerText!=''))
        {
            let turnInfo = document.querySelector('.turn-info');
            turnInfo.innerText = turn + " Won";
            gameOver = true;
        }
    })

}
//Game Logic
boxes.forEach((box)=>{
    let boxText = box.querySelector(".boxtext");
    box.addEventListener("click",()=>{
        if(boxText.innerText==='' && !gameOver)
        {
            boxText.innerHTML = turn;
            checkWin();
            if(!gameOver)
            {
                turn = changeTurn();
                let turnInfo = document.querySelector(".turn-info");
                turnInfo.innerText = "Turn for " + turn;
            }
            
        }
    })
})

//Reset Game
let resetBtn = document.querySelector("#reset-btn");
resetBtn.addEventListener('click',()=>{
    let boxText = document.querySelectorAll('.boxtext');
    boxText.forEach((e)=>{
        e.innerText = "";
    })
    turn = "X";
    let turnInfo = document.querySelector(".turn-info");
    turnInfo.innerText = "Turn for " + turn;
    gameOver = false
})