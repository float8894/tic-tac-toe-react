export default function GameOver({ winner, onRetry }) {
  return (
    <div id='game-over'>
      <h2>Game Over!</h2>
      {winner && <p>{winner === 'X' ? 'Player 1' : 'Player 2'} won!</p>}
      {!winner && <p>It&apos;s a draw!</p>}
      <p>
        <button onClick={onRetry}>Rematch!</button>
      </p>
    </div>
  );
}
