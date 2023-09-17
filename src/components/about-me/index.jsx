import React from 'react';
import MySkill from './MySkill';
import Education from './Education';

const index = () => {
    return (
        <div className='flex flex-col gap-19 justify-center items-center'>
            <div className='p-5'>
                <h1 className='font-bold text-[2rem]'>Get Know To Me</h1>  
                <div className='flex justify-center items-center text-center mx-auto h-1 w-20 bg-blue-500'></div>
            </div>

            <div className='mt-10'>
                <div className='font-bold text-[1.5rem] mb-5 ml-9'>My Skill</div>
                <MySkill /> 
            </div>

            <div className='mt-10'>  
                <div className='font-bold text-[1.5rem] mb-5 ml-20'>Education</div>    
                <Education />
            </div>
        </div>
    );
}

export default index;