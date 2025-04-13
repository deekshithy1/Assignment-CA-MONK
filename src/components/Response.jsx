import React from 'react';
import { useSelector } from 'react-redux';

const Response = () => {
  const answers = useSelector((state) => state.marks.answers);

  const renderFilledQuestion = (question, answersArray, highlightColor) => {
    if (!question) return null;

    const parts = question.split("_____________");
    return parts.map((part, i) => (
      <React.Fragment key={i}>
        {part}
        {i < answersArray.length && (
          <span
            className={`font-semibold ${highlightColor} px-1 py-0.5 rounded-md mx-1`}
          >
            {answersArray[i]}
          </span>
        )}
      </React.Fragment>
    ));
  };

  return (
    <div className="space-y-8 px-10 py-8 gap-8">
      {Object.entries(answers).map(([questionId, data], idx) => (
        <div
          key={questionId}
          className="w-[43.75rem] border-0 rounded-2xl m-auto shadow-custom bg-white"
        >
          {/* Prompt Section */}
          <div className="px-4 pt-4">
            <div className="flex justify-between mb-2">
              <div className="text-[14px] leading-[20px] tracking-[-0.01em] font-medium text-[#616464] font-inter bg-[#F0F0F0] w-[57px] h-6 px-1 py-0.5 rounded-[8px]">
                Prompt
              </div>
              <div>{`${idx + 1}/${Object.keys(answers).length}`}</div>
            </div>

            {/* Correctly Filled Prompt */}
            <div className="mb-4 text-[#333] leading-6">
              {renderFilledQuestion(data.question, data.correctAnswer, 'text-[#2E7D32] bg-[#EEFBEF]')}
            </div>
          </div>

          {/* User Response Section */}
          <div className="p-6 rounded-2xl bg-[#F6F9F9]">
            <div className="flex gap-2 items-center mb-2">
              <div className="font-medium">Your response</div>
              <span
                className={`px-2 py-0.5 rounded-2xl text-sm ${
                  data.iscorrect
                    ? 'text-green-800 bg-[#EEFBEF]'
                    : 'text-red-600 bg-red-100'
                }`}
              >
                {data.iscorrect ? 'Correct' : 'Incorrect'}
              </span>
            </div>

            {/* Your Answer in Context */}
            <div className="text-[#1C1C1C] leading-6">
              {renderFilledQuestion(
                data.question,
                data.answer,
                data.iscorrect ? 'text-[#2E7D32] bg-[#EEFBEF]' : 'text-[#B71C1C] bg-red-100'
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Response;
