
const init = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
];

export default function GameBoard({onCellClick, turns}){
    let gameBoard = init;
    
    for(const turn of turns){
        const {cell, player} = turn;
        const {rowIndex, cellIndex} = cell;

        gameBoard[rowIndex][cellIndex] = player;
    }

    return (
        <ol id="game-board">
            {
                gameBoard.map((row, rowIndex) => <li key={rowIndex}>
                    <ol>
                        {row.map((cell, cellIndex) => <li key={cellIndex}><button onClick={()=> onCellClick(rowIndex, cellIndex)}>{cell}</button></li>)}
                    </ol>
                </li>)
            }
        </ol>
    );
}