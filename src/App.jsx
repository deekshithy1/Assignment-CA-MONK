import React from 'react';
import { Routes, Route, Outlet } from 'react-router-dom'; 
import HomePage from './pages/HomePage';
import QuizPage from './pages/QuizPage'; 
import Feedback from './pages/Feedback';
import Navbar from './components/Navbar';

const Layout=()=>{
  return (<>
  
  <Navbar/>
  <Outlet/>
  
  </>)
}

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="quiz" element={<QuizPage />} />
        <Route path="feedback" element={<Feedback />} />
      </Route>
    </Routes>
  );
}

export default App;
