import Squre from "./squre/Squre";

/* eslint-disable react/prop-types */
const Board = ({ squreValue, xIsNext, onPlay }) => {
  const winner = calculateWinner(squreValue);
  let winnerStatus;

  if (winner) {
    winnerStatus = `Congratulations ${winner} is win`;
  } else {
    winnerStatus = `Next Player ${xIsNext ? "❌" : "❤️"}`;
  }

  const handleSqureClick = (i) => {
    if (squreValue[i] || calculateWinner(squreValue)) {
      return;
    }
    const nextSquares = squreValue.slice();
    nextSquares[i] = xIsNext ? "❌" : "❤️";
    onPlay(nextSquares);
  };

  function calculateWinner(squreValue) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squreValue[a] &&
        squreValue[a] === squreValue[b] &&
        squreValue[a] === squreValue[c]
      ) {
        return squreValue[a];
      }
    }
    return null;
  }

  return (
    <main>
      <div className="mb-4 text-center bg-slate-300 text-slate-900 font-bold rounded py-2">
        <h1>{winnerStatus}</h1>
      </div>
      <div className="min-w-[250px] max-w-[250px] flex flex-wrap items-center justify-center ">
        {squreValue.map((v, i) => (
          <Squre
            key={i}
            value={squreValue[i]}
            onSqureClick={() => handleSqureClick(i)}
          />
        ))}
      </div>
    </main>
  );
};

export default Board;
