import React from 'react';
import SendMessage from './SendMessage';
import contactImage from "../../assest/heder-image/contact-image.png"

const index = () => {
    return (
        <div className='flex flex-col justify-center mx-auto pt-11 pb-11 max-w-[90%] mt-10 mb-10 bg-white rounded-2xl'>

            <div className='mx-auto text-center'>
                <h4 className='font-bold text-[1.5rem] text-blue-900'>Hi, Let's have quick chat</h4>
                <div className='h-1 w-20 rounded-md mx-auto bg-black'></div>
                <p>I reply within 2 day</p>
            </div>

            <div className='flex justify-between mx-auto flex-row mt-20'>
                <div className='max-w-[40%]'>
                    <img src={contactImage} alt="contact" />
                </div>

                <div className='max-w-[50%]'>
                    <SendMessage /> 
                </div> 
            </div>

        </div>
    );
}

export default index;