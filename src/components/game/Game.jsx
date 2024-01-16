import { useState } from "react";
import Board from "../board/Board";
import History from "../history/History";

const Game = () => {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [xIsNext, setXIsNext] = useState(true);
  const [currentMove, setCurrentMove] = useState(0);
  const [showHistory, setShowHistory] = useState(false);

  let currentSqureValue = history[currentMove];

  const handleOnPlay = (nextSquares) => {
    setXIsNext(!xIsNext);
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  };

  const moves = history.map((squre, move) => {
    let description;
    if (move > 0) {
      description = `Go to the move #${move}`;
    }
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });

  const jumpTo = (move) => {
    setCurrentMove(move);
    setXIsNext(move % 2 === 0);
    setShowHistory(false);
  };

  return (
    <main className="w-screen h-screen flex flex-col items-center justify-center gap-16 bg-slate-900 text-white relative overflow-hidden">
      <div className="p-5 scale-150">
        <Board
          squreValue={currentSqureValue}
          xIsNext={xIsNext}
          onPlay={handleOnPlay}
        />
        <div>
          <button
            className="w-full mt-4 mx-1 text-center bg-slate-300 text-slate-900 rounded py-2"
            onClick={() => setShowHistory(!showHistory)}
          >
            {showHistory ? "Hide History" : "View History"}
          </button>
          {showHistory && (
            <div
              onClick={() => setShowHistory(!showHistory)}
              className="bg-[#00000050] absolute -top-20 -left-80 md:-left-96 w-screen h-screen cursor-pointer"
            ></div>
          )}
        </div>
      </div>
      <div
        className={`absolute duration-300 ${
          showHistory ? "top-0 right-0" : "top-0 -right-96"
        } `}
      >
        <History move={moves} />
      </div>
    </main>
  );
};

export default Game;
