// console.log('hi')

let playerTurn = 1; //"x" or "o"
let gameActive = true;
let winner = false;
let totalTurn = 0;
let boardState = [0,0,0,0,0,0,0,0,0];
let div = document.getElementById('app')

let players = [
    1, // 0
    5 // 1
]
function drawBoard(){
    div.classList.add('container')
    
    let nameRow = createAndAddElement(div, 'div', ['row'], '','')
    let nameCol = createAndAddElement(nameRow, 'div', ['col-12', 'text-center'], '','')
    let name = createAndAddElement(nameCol, 'h1',['p-1'], 'name', 'Tic-Tac-Toe')
    let row1 = createAndAddElement(div, 'div', ['row','d-flex', 'justify-content-center', 'align-items-center'], "","")
    // let row2 = createAndAddElement(div, 'div', ['row','d-flex', 'justify-content-center', 'align-items-center'], "","")
    // let row3 = createAndAddElement(div, 'div', ['row','d-flex', 'justify-content-center', 'align-items-center'], "","")
    let col0 = createAndAddElement(row1, 'div', ['col-4', 'p-5','border'],'0','' )
    let col1 = createAndAddElement(row1, 'div', ['col-4', 'p-5','border'],'1','' )
    let col2 = createAndAddElement(row1, 'div', ['col-4', 'p-5','border'],'2','' )
    let col3 = createAndAddElement(row1, 'div', ['col-4', 'p-5','border'],'3','' )
    let col4 = createAndAddElement(row1, 'div', ['col-4', 'p-5','border'],'4','' )
    let col5 = createAndAddElement(row1, 'div', ['col-4', 'p-5','border'],'5','' )
    let col6 = createAndAddElement(row1, 'div', ['col-4', 'p-5','border'],'6','' )
    let col7 = createAndAddElement(row1, 'div', ['col-4', 'p-5','border'],'7','' )
    let col8 = createAndAddElement(row1, 'div', ['col-4', 'p-5','border'],'8','' )
    let button0 = createAndAddElement(col0, 'div', ['btn','btn-primary','btn-marker'], 'button0','')
    let button1 = createAndAddElement(col1, 'div', ['btn','btn-primary','btn-marker'], 'button1','')
    let button2 = createAndAddElement(col2, 'div', ['btn','btn-primary','btn-marker'], 'button2','')
    let button3 = createAndAddElement(col3, 'div', ['btn','btn-primary','btn-marker'], 'button3','')
    let button4 = createAndAddElement(col4, 'div', ['btn','btn-primary','btn-marker'], 'button4','')
    let button5 = createAndAddElement(col5, 'div', ['btn','btn-primary','btn-marker'], 'button5','')
    let button6 = createAndAddElement(col6, 'div', ['btn','btn-primary','btn-marker'], 'button6','')
    let button7 = createAndAddElement(col7, 'div', ['btn','btn-primary','btn-marker'], 'button7','')
    let button8 = createAndAddElement(col8, 'div', ['btn','btn-primary','btn-marker'], 'button8','')
    let buttonRow = createAndAddElement(div, 'div', ['row'], '','')
    let buttonCol = createAndAddElement(buttonRow, 'div', ['col','text-center','p-3'], '','')
    let button = createAndAddElement(buttonCol, 'div', ['btn','btn-primary'], 'button','reset')
    button.addEventListener('click',()=>{
        // ! add button reset function
        resetState()
        resetTiles()
        console.log('state reset')
    })
    //                     when that button is clicked 
    //                     set the text content on all the div's to none
    //                     and reset the state //end game function
    
}
drawBoard()


function resetState(){
    let boardName = document.getElementById('name')
    boardName.textContent = 'Tic-Tac-Toe'
    totalTurn = 0;
    playerTurn = 0;
    boardState = [0,0,0,0,0,0,0,0,0];
    winner = false;
}
function resetTiles(){
    button0.textContent = ''
    button1.textContent = ''
    button2.textContent = ''
    button3.textContent = ''
    button4.textContent = ''
    button5.textContent = ''
    button6.textContent = ''
    button7.textContent = ''
    button8.textContent = ''
}

function setMarkerAtIndex(index){
    let player = playerTurn ? 1 : 0;
    boardState[index] = players[player];
}

console.log(boardState)


function createAndAddElement(parent, elementType, classes, elementID = '', contents = '', isHTML = false) {
    let el = document.createElement(elementType);
    if(elementID != ''){
        el.id = elementID;
    }
    for(let i = 0; i < classes.length; i++){
        el.classList.add(classes[i]);
    }
    if(contents != ''){
        el.textContent = contents;
        if(isHTML){
            el.innerHTML = contents;
        }
    }
    parent.appendChild(el);
    return el;
}

button0.addEventListener('click', handleClick)
button1.addEventListener('click', handleClick)
button2.addEventListener('click', handleClick)
button3.addEventListener('click', handleClick)
button4.addEventListener('click', handleClick)
button5.addEventListener('click', handleClick)
button6.addEventListener('click', handleClick)
button7.addEventListener('click', handleClick)
button8.addEventListener('click', handleClick)

function handleClick (e){
    let targetId = e.target.id.replace("button", "");
        setMarkerAtIndex(targetId)
        updateTile(e.target);
        checkForWin();
        console.log(boardState)
        e.target.removeEventListener('click', handleClick, false)

}
function test (e){
    
}

function updateTile(element){
    let boardName = document.getElementById('name')
    if (playerTurn == true){
        element.textContent = 'X'
        boardName.textContent = 'Player O Turn'
        // textContent = "X"  
        // checkWinCondition()
    } else {
        element.textContent = "O"
        boardName.textContent = 'Player X Turn'
        // textContent = "O"
        // checkWinCondition()
    }
    totalTurn++
    playerTurn = !playerTurn;

}

function checkForWin(){
    // loop thru all of the win conditions
    winConditions = [
        // Horizontal
        [0,1,2],
        [3,4,5],
        [6,7,8],
        // vertical
        [0,3,6],
        [1,4,7],
        [2,5,8],
        // diagonal
        [0,4,8],
        [2,4,6]
    ];
    let boardName = document.getElementById('name')
    for(let i = 0; i < winConditions.length; i++){
        let currentCondition = winConditions[i];
        // check the indexes at 
        let sum = boardState[currentCondition[0]] + boardState[currentCondition[1]] + boardState[currentCondition[2]];
        console.log(sum);
        if(sum == 3){
            console.log("X wins")
            boardName.textContent = 'Player O Wins'
        }
        if(sum == 15){
            console.log("O wins");
            boardName.textContent = 'Player X Wins'
        }
        if(totalTurn == 9){
            winner = true
            console.log('GAME OVER')
        }
    }
}



