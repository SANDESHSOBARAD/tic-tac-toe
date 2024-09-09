let boxes = document.querySelectorAll('.box')

let reset = document.querySelector('#reset-btn')

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

    reset.addEventListener('click', () =>{
        boxes.forEach((box) =>{
            box.innerHTML = ''
            turnO = true
            box.disabled = false
        })
    })


const checkWinner = () =>{
    winning_patterns.forEach((pattern) =>{
        let pos1 = boxes[pattern[0]].innerText
        let pos2 = boxes[pattern[1]].innerText
        let pos3 = boxes[pattern[2]].innerText

        if (pos1 != "" && pos2 != "" && pos3 != ""){
            if (pos1 === 'X' && pos2 === 'X' && pos3 === 'X'){
                console.log("PlayerX is the winner")
            }
            else if (pos1 === 'O' && pos2 === 'O' &&  pos3 === 'O'){ 
                console.log("PlayerO is the winner")
            }
        }
    })

    

}