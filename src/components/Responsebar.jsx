import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
const Responsebar = () => {

const answers = useSelector((state) => state.marks.answers);

// Total questions
const total = Object.keys(answers).length;

// Count how many are correct
const correct = Object.values(answers).filter(item => item.iscorrect).length;

// Optional: percentage score
const percentage = total > 0 ? Math.round((correct / total) * 100) : 0;

return (
  <div className="text-center my-8">
   <div> <h2 className="text-2xl font-semibold text-gray-800">Your Score</h2>
    <p className="text-xl mt-2 text-green-700">
      {correct} / {total} correct
    </p>
    <p className="text-sm text-gray-500">({percentage}%)</p>
    <div>While you correctly formed several sentences, there are a couple of areas where improvement is needed. Pay close attention to sentence structure and word placement to ensure clarity and correctness. Review your responses below for more details.</div>
    </div>
    <div>
        <Link to='/'><button className="w-[270.5px] h-[54px] gap-2 rounded-md px-6 py-4 border text-[#453FE1]">Go to Dashboard</button>
        </Link>
    </div>
  </div>
);
};

export default Responsebar