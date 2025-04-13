import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import vector from '../assets/Vector-3.png';
import { addanswers, addQuestions } from '../store/Markslice/Markslice';

const QuizComp = ({ data }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [index, setIndex] = useState(0);
  const [options, setOptions] = useState([]);
  const [filteredOptions, setFilteredOptions] = useState([]);
  const [timeLeft, setTimeLeft] = useState(30);

  const question = data[index];

  const validate = () => {
    const areEqual = JSON.stringify(options) === JSON.stringify(question.correctAnswer);
    dispatch(addanswers({
      questionId: question.questionId,
      answer: options,
      iscorrect: areEqual,
      correctAnswer: question.correctAnswer,
      question: question.question,
      isSkipped: false
    }));
  };

  useEffect(() => {
    if (question) {
      setOptions([]);
      setFilteredOptions(question.correctAnswer);
      dispatch(addQuestions(question.question));
      setTimeLeft(30);
    }
  }, [index, question]);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev === 1) {
          clearInterval(timer);
          handleNext(true);
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [index]);

  const handleNext = (isSkipped = false) => {
    if (filteredOptions.length === 0 && options.length !== 0) {
      validate();
    } else if (isSkipped) {
      dispatch(addanswers({
        questionId: question.questionId,
        answer: [],
        iscorrect: false,
        correctAnswer: question.correctAnswer,
        question: question.question,
        isSkipped: true
      }));
    }

    if (index < data.length - 1) {
      setIndex(index + 1);
    } else {
      navigate('/feedback');
    }
  };

  const handleOption = (e) => {
    if (options.length < 4) {
      setOptions([...options, e]);
      setFilteredOptions(filteredOptions.filter(opt => opt !== e));
    }
  };

  const handleRemoveFromBlank = (word) => {
    const updatedOptions = options.filter(opt => opt !== word);
    setOptions(updatedOptions);
    setFilteredOptions([...filteredOptions, word]);
  };

  const handleQuit = () => {
    navigate('/feedback');
  };

  const renderFilledQuestion = () => {
    const parts = question.question.split("_____________");
    return parts.map((part, i) => (
      <React.Fragment key={i}>
        {part}
        {i < 4 && options[i] ? (
          <button
            onClick={() => handleRemoveFromBlank(options[i])}
            className="mx-1 text-black px-[0.75rem] py-[0.5rem] border-1 border-[#BFC6C6] rounded-xl mb-4"
          >
            {options[i]}
          </button>
        ) : (
          i < 4 && (
            <span className="inline-block w-24 border-b border-gray-400 mx-1 mb-4">
              ------------
            </span>
          )
        )}
      </React.Fragment>
    ));
  };
  

  // Check if all four options are selected
  const isNextDisabled = options.length !== 4;

  return (
    <div className='bg-white w-[60.9375rem] h-[40.625rem] top-[7rem] left-[12.25rem] rounded-[1.5rem] p-[2.5rem] gap-[3.5rem] shadow-[0px_2px_50px_0px_#45454512] flex flex-col justify-evenly'>
      <div className='gap-8'>
        <div className='flex flex-row justify-between'>
          <h6 className="text-[#7C8181] font-medium text-[18px] leading-[28px] font-inter">{`0:${timeLeft < 10 ? '0' + timeLeft : timeLeft}`}</h6>
          <button className='px-5 py-2 gap-2 border border-[#DFE3E3] rounded-[0.5rem]' onClick={handleQuit}>
            Quit
          </button>
        </div>
        <div className='flex'>
          <span className='w-1.5'></span>
        </div>
      </div>

      <div>
        <div className='flex flex-col items-center gap-16'>
          <div>
            <h6 className="font-[Inter] font-semibold text-[1.25rem] leading-[1.375rem] tracking-[0%] text-center text-[#616464] mb-30">
              Select the missing words in the correct order
            </h6>
            <div className="text-center mt-4">
              {question && renderFilledQuestion()}
            </div>
          </div>

          <div className='flex flex-row justify-between items-center gap-2 flex-wrap'>
            {question &&
              filteredOptions.map((option) => (
                <button
                  key={option}
                  className='border border-[#BFC6C6] px-4 py-3 rounded-[0.5rem]'
                  onClick={() => handleOption(option)}
                >
                  {option}
                </button>
              ))}
          </div>
        </div>
      </div>

      <div className='flex flex-row-reverse items-center'>
        <button
          className='flex w-16 h-16 border border-[#DFE3E3] items-center justify-around'
          onClick={() => handleNext()}
          disabled={isNextDisabled} // Disable if not all options are selected
        >
          <img src={vector} alt="Next" />
        </button>
      </div>
    </div>
  );
};

export default QuizComp;
