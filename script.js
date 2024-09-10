let boxes = document.querySelectorAll('.box')
let newGame = document.querySelector('#newGame-btn')
let winnerContainer = document.querySelector('.winner-container')
let reset = document.querySelector('#reset-btn')
let msg = document.querySelector('#message')


let turnO = true;   //playerX, playerO

let winning_patterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]

]

const playNewGame = () =>{
    msg.innerText = ''
    resetGame()

}

newGame.addEventListener('click', () => playNewGame())

boxes.forEach( (box) =>{
    box.addEventListener('click', () =>{
        if (turnO){
            box.innerHTML = 'X'
            turnO = false
        }else{
            box.innerHTML = 'O'
            turnO = true
        }
        box.disabled = true

        checkWinner()
    })
})

const resetGame = () => {
        turnO = true;
        enableBoxes()
}

reset.addEventListener('click', () => resetGame())

const enableBoxes = () =>{
    boxes.forEach((box) =>{
        box.disabled = false
        box.innerText = ''
        winnerContainer.classList.add('hide')
    })
}

const disableBoxes = () =>{
    boxes.forEach((box) =>{
        box.disabled = true
    })
}

const showWinner = (winner) =>{
    msg.innerText = `Congrats, Winner is player-${winner}`;
    winnerContainer.classList.remove('hide')
    disableBoxes()
}

const checkWinner = () =>{
    winning_patterns.forEach((pattern) =>{
        let pos1 = boxes[pattern[0]].innerText
        let pos2 = boxes[pattern[1]].innerText
        let pos3 = boxes[pattern[2]].innerText

        if (pos1 != "" && pos2 != "" && pos3 != ""){
            if (pos1 === pos2 && pos2 === pos3){
                showWinner(pos1)
            }
        }
    })
}