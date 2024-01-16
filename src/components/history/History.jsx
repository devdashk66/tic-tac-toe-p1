/* eslint-disable react/prop-types */
const History = ({ move }) => {
  return (
    <div className="min-w-[240px] w-[350px] min-h-screen p-8 flex flex-col bg-slate-600 ">
      <p className="text-3xl">Your Game History</p>
      <br />
      <hr />
      <ul className="text-2xl flex flex-col gap-5">{move}</ul>
    </div>
  );
};

export default History;
