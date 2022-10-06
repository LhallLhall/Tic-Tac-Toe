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
    // div.style = 'height: 100vh;'
    let nameRow = createAndAddElement(div, 'div', ['row'], '','')
    let nameCol = createAndAddElement(nameRow, 'div', ['col-12', 'text-center'], '','')
    let name = createAndAddElement(nameCol, 'h1',['p-1'], 'name', 'Tic-Tac-Toe')
    let row1 = createAndAddElement(div, 'div', ['row','d-flex', 'justify-content-center', 'align-items-center'], "","")
    let col0 = createAndAddElement(row1, 'button', ['col-4', 'p-5','border','d-flex', 'justify-content-center', 'align-items-center', 'border-start-0', 'border-top-0', 'border-dark','btnOpacity'],'col0','' )
    let col1 = createAndAddElement(row1, 'button', ['col-4', 'p-5','border','d-flex', 'justify-content-center', 'align-items-center', 'border-top-0', 'border-dark','btnOpacity'],'col1','' )
    let col2 = createAndAddElement(row1, 'button', ['col-4', 'p-5','border','d-flex', 'justify-content-center', 'align-items-center', 'border-top-0', 'border-end-0', 'border-dark','btnOpacity'],'col2','' )
    let col3 = createAndAddElement(row1, 'button', ['col-4', 'p-5','border','d-flex', 'justify-content-center', 'align-items-center', 'border-start-0', 'border-dark','btnOpacity'],'col3','' )
    let col4 = createAndAddElement(row1, 'button', ['col-4', 'p-5','border','d-flex', 'justify-content-center', 'align-items-center', 'border-dark','btnOpacity'],'col4','' )
    let col5 = createAndAddElement(row1, 'button', ['col-4', 'p-5','border','d-flex', 'justify-content-center', 'align-items-center', 'border-end-0', 'border-dark','btnOpacity'],'col5','' )
    let col6 = createAndAddElement(row1, 'button', ['col-4', 'p-5','border','d-flex', 'justify-content-center', 'align-items-center','border-bottom-0', 'border-start-0', 'border-dark','btnOpacity'],'col6','' )
    let col7 = createAndAddElement(row1, 'button', ['col-4', 'p-5','border','d-flex', 'justify-content-center', 'align-items-center','border-bottom-0', 'border-dark','btnOpacity'],'col7','' )
    let col8 = createAndAddElement(row1, 'button', ['col-4', 'p-5','border','d-flex', 'justify-content-center', 'align-items-center','border-bottom-0', 'border-end-0', 'border-dark','btnOpacity'],'col8','' )
    let buttonRow = createAndAddElement(div, 'div', ['row'], '','')
    let buttonCol = createAndAddElement(buttonRow, 'div', ['col','text-center','p-3'], '','')
    let button = createAndAddElement(buttonCol, 'div', ['btn','btn-success'], 'button','Reset Game')
    button.addEventListener('click',()=>{
        resetState()
        resetTiles()
        // console.log('state reset')
    })
}
drawBoard()


function resetState(){
    let boardName = document.getElementById('name')
    boardName.textContent = 'Tic-Tac-Toe'
    totalTurn = 0;
    playerTurn = 1;
    boardState = [0,0,0,0,0,0,0,0,0];
    winner = false;
    addEvents()
}

function resetTiles(){
    col0.style.backgroundImage = 'url()'
    col1.style.backgroundImage = 'url()'
    col2.style.backgroundImage = 'url()'
    col3.style.backgroundImage = 'url()'
    col4.style.backgroundImage = 'url()'
    col5.style.backgroundImage = 'url()'
    col6.style.backgroundImage = 'url()'
    col7.style.backgroundImage = 'url()'
    col8.style.backgroundImage = 'url()'
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

function addEvents(){
    col0.addEventListener('click', handleClick);
    col1.addEventListener('click', handleClick);
    col2.addEventListener('click', handleClick);
    col3.addEventListener('click', handleClick);
    col4.addEventListener('click', handleClick);
    col5.addEventListener('click', handleClick);
    col6.addEventListener('click', handleClick);
    col7.addEventListener('click', handleClick);
    col8.addEventListener('click', handleClick);
}
addEvents()


function handleClick (e){
    let targetId = e.target.id.replace("col", "");
        setMarkerAtIndex(targetId);
        updateTile(e.target);
        checkForWin();
        console.log(boardState);
        removeEvent(e.target);
        
    }

function removeEvent (e){
    e.removeEventListener('click', handleClick, false);
}

function removeAllEvents(){
    col0.removeEventListener('click', handleClick, false)
    col1.removeEventListener('click', handleClick, false)
    col2.removeEventListener('click', handleClick, false)
    col3.removeEventListener('click', handleClick, false)
    col4.removeEventListener('click', handleClick, false)
    col5.removeEventListener('click', handleClick, false)
    col6.removeEventListener('click', handleClick, false)
    col7.removeEventListener('click', handleClick, false)
    col8.removeEventListener('click', handleClick, false)
}
// let image = url('https://png.pngtree.com/png-vector/20210222/ourmid/pngtree-glitch-distorted-letter-x-broken-pixel-effect-png-image_2936132.jpg')
function updateTile(element){
    let boardName = document.getElementById('name')
    if (playerTurn == true){
        element.style.backgroundImage = 'url(./img/pngegg.png)'
        element.style.backgroundPosition = 'center'
        element.style.backgroundSize = '100px'
        element.style.backgroundRepeat = 'no-repeat'
        boardName.textContent = 'Tomato Turn'
    } else {
        element.style.backgroundImage = 'url(/img/tomato.png)'
        element.style.backgroundPosition = 'center'
        element.style.backgroundSize = '100px'
        element.style.backgroundRepeat = 'no-repeat'
        boardName.textContent = 'Potato Turn'
    }
    totalTurn++;
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
            
            boardName.textContent = 'Tomato Wins';
            winner = true;
            removeAllEvents();
        }
        if(sum == 15){
            
            winner = true;
            boardName.textContent = 'Potato Wins';
            removeAllEvents();
        }
        if(totalTurn == 9 && winner === false){
            boardName.textContent = 'It\'s a Tie!';
            removeAllEvents();
        }
    }
}



