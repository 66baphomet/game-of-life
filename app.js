const start = document.querySelector('.start-btn');
const cells = document.querySelectorAll('.grid');
const totalCells = cells.length;
// const row = 15;
const col = 15;
let gameStateArray = [];

//setting all the cells as or false or dead
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

    for(let j = col - 1; j <= totalCells; j += col)
    {
        if(i == j)
        {
            return true;
        }
    }
}

const checkUpRestriction = (i)=>{

    for(let j = 0; j <= totalCells - col + 1; j += col)
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
        let downTheGridByRightCellRestrict = false;
        downTheGridByRightCellRestrict = checkDownRestriction(i);

        if(gameStateArray[i + 1] && !downTheGridByRightCellRestrict)
        {
            surroundingCellCounter++;
        }

        //sets restrictions when a live cell is at the beginning of the row
        let upTheGridByLeftCellRestrict = false;
        upTheGridByLeftCellRestrict = checkUpRestriction(i);

        if(gameStateArray[i - 1] && !upTheGridByLeftCellRestrict)
        {
            surroundingCellCounter++;
        }

        for(let j = 0; j < 3; j++)
        {
            let downTheGrid = (i + (col - 1)) + j;

            if(gameStateArray[downTheGrid])
            {
                if(downTheGrid == i + col)
                {
                    surroundingCellCounter++;
                }
                else if(!upTheGridByLeftCellRestrict && downTheGrid == i + col - 1)
                {
                    surroundingCellCounter++;
                }
                else if(!downTheGridByRightCellRestrict && downTheGrid == i + col + 1)
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
                else if(!downTheGridByRightCellRestrict && upTheGrid == i - col + 1)
                {
                    surroundingCellCounter++;
                }
                else if(!upTheGridByLeftCellRestrict && upTheGrid == i - col - 1)
                {
                    surroundingCellCounter++;
                }
                
            }
        }

        //checking the state of the cell and updating the grid
        InGameStateArrayUpdate(surroundingCellCounter, i);

    }
}

const InGameStateArrayUpdate = (surroundingCellCounter, i)=>{
    if(surroundingCellCounter < 2 || surroundingCellCounter >3)
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