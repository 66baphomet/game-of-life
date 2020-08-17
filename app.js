const start = document.querySelector('.start-btn');
const cells = document.querySelectorAll('.grid');
const totalCells = cells.length;
// const row = 20;
const col = 20;
let gameStateArray = [];

//setting all the cells as false or dead
for(let i = 0; i < totalCells; i++)
{
    gameStateArray[i] = false;
}

//initial gamestate setup by the player
for(let i = 0; i < totalCells; i++)
{
    cells[i].addEventListener('click', ()=>{

        if(!gameStateArray[i])
        {
            gameStateArray[i] = true;
        }
        else
        {
            gameStateArray[i] = false;
        }
        
        //initial UI set up
        if(cells[i].style.backgroundColor == 'black')
        {
            cells[i].style.backgroundColor = 'white';
        }
        else
        {
            cells[i].style.backgroundColor = 'black';
        }
        

    })
}

let InGameStateArray = [];//tracks the in game changes

//starting the game
start.addEventListener('click', ()=>{
    setInterval(()=>{

        for(let i = 0; i < totalCells; i++)//resetting the in game state at every generation
        {
            InGameStateArray[i] = false;
        }

        //checking game state
        checkGameState();

        //updating gameStateArray
        for(let i = 0; i < totalCells; i++)
        {
           gameStateArray[i] = InGameStateArray[i];
        }

        //updating the game UI
        updateUI();
        
    }, 1000);
});

const checkDownRestriction = (i)=>{

    for(let j = col - 1; j <= totalCells; j += col)//restricting cell checking when at the first cell of a row
    {
        if(i == j)
        {
            return true;
        }
    }
}

const checkUpRestriction = (i)=>{

    for(let j = 0; j <= totalCells - col + 1; j += col)//restricting cell checking when at the last cell of a row
    {
        if(i == j)
        {
            return true;
        }
    }
}

const checkGameState = ()=>{
    for(let i = 0; i < totalCells; i++)
    {
        let surroundingCellCounter = 0;

        //sets restriction when a live cell is at the last cell of the row
        let atTheEndOfRow = false;
        atTheEndOfRow = checkDownRestriction(i);

        //checks the right cell
        if(gameStateArray[i + 1] && !atTheEndOfRow)
        {
            surroundingCellCounter++;
        }

        //sets restrictions when a live cell is at the beginning of the row
        let atTheBeginningOfRow = false;
        atTheBeginningOfRow = checkUpRestriction(i);

        //checks the left cell
        if(gameStateArray[i - 1] && !atTheBeginningOfRow)
        {
            surroundingCellCounter++;
        }

        for(let j = 0; j < 3; j++)
        {
            let downTheGrid = (i + (col - 1)) + j;

            if(gameStateArray[downTheGrid])//checks cells below the cell
            {
                if(downTheGrid == i + col)
                {
                    surroundingCellCounter++;
                }
                //restricts down check when at the beginning of a row
                else if(!atTheBeginningOfRow && downTheGrid == i + col - 1)
                {
                    surroundingCellCounter++;
                }
                else if(!atTheEndOfRow && downTheGrid == i + col + 1)
                {
                    surroundingCellCounter++;
                }
            }
        }

        for(let j = 0; j < 3; j++)
        {
            let upTheGrid = (i - (col - 1)) - j;

            if(gameStateArray[upTheGrid])
            {
                if(upTheGrid == i - col)
                {
                    surroundingCellCounter++;
                }
                else if(!atTheEndOfRow && upTheGrid == i - col + 1)
                {
                    surroundingCellCounter++;
                }
                else if(!atTheBeginningOfRow && upTheGrid == i - col - 1)
                {
                    surroundingCellCounter++;
                }
                
            }
        }

        //checking the state of the cell and updating the grid
        inGameStateArrayUpdate(surroundingCellCounter, i);

    }
}

const inGameStateArrayUpdate = (surroundingCellCounter, i)=>{
    if(surroundingCellCounter < 2 || surroundingCellCounter > 3)
    {
        InGameStateArray[i] = false;
    }
    else if(surroundingCellCounter == 3 && !gameStateArray[i])
    {
        InGameStateArray[i] = true;
    }
    else if(surroundingCellCounter >= 2 && surroundingCellCounter <= 3 && gameStateArray[i])
    {
        InGameStateArray[i] = true;
    }
}

const updateUI = ()=>{
    for(let i = 0; i < totalCells; i++)
    {
        if(gameStateArray[i])
        {
            cells[i].style.backgroundColor = 'black';
        }
        else
        {
            cells[i].style.backgroundColor = 'white';
        }
    }
}