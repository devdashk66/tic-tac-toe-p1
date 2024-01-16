/* eslint-disable react/prop-types */

const Squre = ({ value, onSqureClick }) => {
  return (
    <button
      onClick={(e) => onSqureClick(e)}
      className="w-20 h-20 border  flex items-center justify-center text-2xl drop-shadow-3xl hover:bg-slate-950 rounded duration-300"
    >
      {value}
    </button>
  );
};

export default Squre;
