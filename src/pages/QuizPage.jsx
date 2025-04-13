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
    
   const dat=await fetch('https://f993-2409-40f0-11d4-f56a-d1f7-2887-9a06-9f54.ngrok-free.app/data');

    setQuestions(data.data.questions)
  }

  return (
    <div className='min-h-screen  flex items-center justify-center'>
        <QuizCopm data={questions}/>
    
    </div>
  )
}

export default QuizPage
