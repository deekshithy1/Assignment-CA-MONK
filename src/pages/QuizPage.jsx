import React, { useEffect, useState } from 'react'
import QuizCopm from '../components/QuizCopm'

import axios from 'axios';
const QuizPage = () => {
const [questions,setQuestions]=useState([]);
   console.log(questions[0])


  

  useEffect(()=>{
     fetchJson();
  },[]);

  const fetchJson=async()=>{
    
   const dat=await fetch('https:localhost:5001/data');

    setQuestions(data.data.questions)
  }

  return (
    <div className='min-h-screen  flex items-center justify-center'>
        <QuizCopm data={questions}/>
    
    </div>
  )
}

export default QuizPage
