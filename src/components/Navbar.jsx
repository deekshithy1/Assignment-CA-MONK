import React from 'react';
import vector from '../assets/Vector.png';

const Navbar = () => {
  return (
    <div className='sticky top-0 z-50 flex flex-row bg-[#F8F8F8BF]/75% justify-between px-20 h-[4rem] w-full backdrop-blur-[50px] shadow-[0px_2px_36px_0px_rgba(0,0,0,0.08)] items-center'>

      <div></div>
      <div className='font-inter font-medium text-lg leading-7 tracking-tighter text-[1.125rem]'>
        Sentence Construction
      </div>
      <div>
        <img src={vector} alt="vector" />
      </div>
    </div>
  );
};

export default Navbar;
