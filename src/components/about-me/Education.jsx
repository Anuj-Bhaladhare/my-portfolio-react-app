import React from 'react';

const Education = () => {
    return (
        <div className='flex flex-row w-[90%] p-10 justify-between items-center mx-auto bg-white rounded-xl mt-7'>
            
            {/* Education */}
            <div className='w-[45%] flex flex-col gap-10'>
                <div>
                    <p className='font-bold text-[1.2rem]'>bachelor of engineering in mechanical engineering</p>
                    <ul className='font-semibold'>
                        <li> - Tulsiramji Gaikwad Patil College of Engineering and Technology</li>
                        <li> - Aug 2019 - June 2023</li>
                    </ul>
                </div>
                <div>
                    <p className='font-bold text-[1.2rem]'>HSC/ 12th Board</p>
                    <ul className='font-semibold'>
                        <li> - sant kabir high school seoni</li>
                        <li> - Aug 2018 - march 2019</li>
                    </ul>
                </div>
                <div>
                    <p className='font-bold text-[1.2rem]'>SSC/ 10th Board</p>
                    <ul className='font-semibold'>
                        <li> - sant kabir high school seoni</li>
                        <li> - Aug 2014 - march 2015</li>
                    </ul>
                </div>
            </div>

            {/* More */}
            <div className='w-[45%] flex flex-col gap-5'>
                <div className='font-bold text-[1.2rem]'>MORE</div>
                <div className='font-semibold flex flex-col gap-5'>
                    <p> - I'm an engineer passionate about coding. Always ready to try hands-on new and emerging technologies.</p>
                    <p> - I have a strong foundation in <span>MERN Stack</span> and I am skilled in creating interactive and visually appealing websites.</p>
                    <p> - I'm open to <span>Job</span> opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then don't hesitate to <span>contact</span> me.</p>
                </div>
                <button className="bg-blue-500 hover:bg-blue-900 text-white py-2 px-4 border border-blue-700 rounded-md">Contact</button>
            </div>

            
        </div>
    );
}

export default Education;
