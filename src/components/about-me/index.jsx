import React from 'react';
import MySkill from './MySkill';
import Education from './Education';

const index = () => {
    return (
        <div className='flex justify-around w-[100%]'>
            <div className='w-[50%]'>      
              <Education />
            </div>
            <div className='w-[50%]'>
               <MySkill /> 
            </div>
        </div>
    );
}

export default index;