const GameWrapper = document.getElementById("game-wrapper");
for(let i = 0; i < 9; i++){
    GameWrapper.innerHTML += `<div class="tile"></div>`
}

const Tiles = document.getElementsByClassName("tile");

const WinningConditions = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 4, 8], [6, 4, 2], [0, 3, 6], [1, 4, 7], [2, 5, 8]];

let turn = "O";
function handleClick(e){
    this.textContent = turn;
    turn = turn == "O" ? "X" : "O";

    checkForWin()

    this.removeEventListener("click", handleClick);
}

function checkForWin(){
    for(let i = 0; i < WinningConditions.length; i++){
        for(let j = 1; j < 3; j++){
            const tileChar = Tiles[WinningConditions[i][j]].textContent;
            const prevTileChar = Tiles[WinningConditions[i][j-1]].textContent;

            if((tileChar != 'O' && tileChar != 'X') || prevTileChar != tileChar)break;
            if(j == 2){
                handleWin(tileChar);
                return;
            }
        }
    }
}

function handleWin(char){
    for(let i = 0; i < Tiles.length; i++){
        const Tile = Tiles[i];
        Tile.removeEventListener("click", handleClick);
    }

    const Win = document.getElementById("win");
    Win.style.display = "block";
    Win.innerHTML = `${char} won!`;
}


for(let i = 0; i < Tiles.length; i++){
    const Tile = Tiles[i];
    Tile.addEventListener("click", handleClick);
}
