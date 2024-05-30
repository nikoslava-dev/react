export default function Logs({ turns }){
    return(
        <ol id="log">
            { turns.map(turn => <li key={`${turn.cell.rowIndex} + ${turn.cell.cellIndex}`}>{turn.player} selected row: {turn.cell.rowIndex} column: {turn.cell.cellIndex}</li>)}
        </ol>        
    );
}
