import React from 'react';
import vector from '../assets/Vector-2.png';
import coin from '../assets/Ellipse 15.png';
import { Link } from 'react-router-dom';
const MainComp = () => {
  return (
    <div className='flex justify-center items-start min-h-screen'>
      <div className='w-[39.188rem] h-[29.5rem] flex flex-col items-center bg-white mt-20'>
        <div className='flex flex-col'>
          <div className='flex flex-col items-center'>
            <img src={vector} className='w-[4.5rem]' alt="" />
            <div className='flex flex-col items-center'>
              <h3 className='text-[40px] font-semibold leading-[46px] text-[#0F1010] text-center'>
                Sentence Construction
              </h3>

              <h6 className='font-inter font-normal text-[20px] leading-[28px] tracking-[-1%] text-[#7C8181] text-center mt-[3rem]'>
                Select the correct words to complete the sentence by arranging the provided options in the right order.
              </h6>
            </div>
          </div>
          <div className='flex justify-between w-full px-4 mt-[3rem] '>
            <div><h3>Time Per Question</h3> <div className='font-inter font-medium text-[18px] leading-[28px] tracking-[-1%] text-center text-[#7C8181]'>
  30 sec
</div>

</div>
            <div className=''><h3>Total Questions</h3><div className='font-inter font-medium text-[18px] leading-[28px] tracking-[-1%] text-center text-[#7C8181]'>
10
</div>
</div>
            <div><h3>Coins</h3> <div className='font-inter font-medium text-[18px] leading-[28px] tracking-[-1%] text-center text-[#7C8181] flex' > <img src={coin} alt="" />0 </div></div>
          </div>
        </div>
        <div className='flex gap-2 mt-4'>  
          <button className='w-[8.75rem] h-[2.625rem] border-1 rounded-xl border-[#453FE1] text-[#453FE1]'>Back</button>
       <Link to='/quiz'>  <button className='w-[8.75rem] h-[2.625rem] border-1 rounded-xl border-[#453FE1] bg-[#453FE1] text-inter text-white'>Start</button></Link> 
        </div>
      </div>
    </div>
  );
}

export default MainComp;
