# Requirements
- Let the player know who's turn it is
- Tiles should only be clickable once
    - game over makes no tiles clickable
- Display who wins if no one wins say tie
# State
- playerTurn: 1 "x" or "o"
- winner: boolean
- totalTurn: 1-9 on 9 return tie
- players: ???? <!--stretch goals maybe-->
- boardState: ["", "", "", "", "", "", "", ""]
# Variables

# Functions
- checkForWin()
    ~~~ 
    if player turn === 9
        replace the "tic-tac-toe" with "it's a tie!"
    winConditions:
        Horizontal
        [0,1,2]
        [3,4,5]
        [6,7,8]

        Vertical
        [0,3,6]
        [1,4,7]
        [2,5,8]

        Diagonal
        [0,4,8]
        [2,4,6]

    loop through the winConditions
        grab the current index of the item inside the array
            grab the combined numbers of each item inside the array thats inside the array
                if that combined number === 3
                    winner = true
                    set text content to o
                    removeAllEvents()

                if that combined number === 15
                    winner = true
                    text content to X
                    removeAllEvents()

                if totalTurn is 9 and winner is false
                    set text content to a tie
                    removeAllEvents()
   
    ~~~
    <!-- still need to figure out how to do the array updated with state -->
- createAndAddElement()
    - function I ported over from mind reader project

- removeEvent()
    ~~~
    passes a parameter that grabs the event
        remove the event listener on the event target

    ~~~
- removeAllEvents()
    - removes all of the events on function call

- addEvents()
    - adds all of the events on function call

- resetState()
    ~~~
    totalTurn = 0
    playerTurn = 1
    boardState = ["", "", "", "", "", "", "", ""]
    winner = false
    game active = false
    ~~~



- drawBoard() <!-- will not need this until friday-->
    ~~~
    getElementById('app') //div
        add the class to app (container)

    Create a div
        add class row
        create div 
        add class col-12
        create a h1 that has "tic-tac-toe"

    Create 3 div's 
        row and all centering content classes on the 3 div's
        append them to the container
            create 9 div's
                add class col-4 
                set id's to them 0-8
                append them to the rows. 3 each

    Create a div
        add class row
        append it to the container
            create a div inside that
                add a col-12 div
                have a button with "Restart Game"
                    when that button is clicked 
                    set the text content on all the div's to none
                    and reset the state //end game function

    ~~~

- handleClick()
    ~~~
    pass in an event that grabs the event
     setMarkerAtIndex(targetId)
     updateTile(e.target)
     checkForWin()
     removeEvent()
    ~~~

- UpdateTile(e)
    ~~~
    Have the function take in parameters of the clicked element

    If player turn == true
        set event target id text content = "X"
            set player turn to false
        
        totalTurn++
        

    Else

        set event target id text content = "O"
        set player turn to true
        
        totalTurn++
        
    playerTurn = !playerTurn
    ~~~
# Questions

# Procedure
~~~
    - init()
        - createBoard()
            - setGameState
    
    - on first click
        - x is first player
        - tile clicked gets an x
        - update the state
        - remove the ability to click selected tile
        - change player to "o"
~~~

# Junk Drawer
- first click is x
    - second click is o
    - tile clicked gets an x
    - update State
    - remove ability to click selected tile

    <!-- let xArray = []
    let oArray = []

    For each item in board state
        If item === "x"
            let x = "x"
            xArray.push(x)
        If item === "o"
            let o = "o"
            oArray.push(o)
    If xArray.length === 2
        displayGameResults()

    If oArray.length === 2
        displayGameResults() -->

