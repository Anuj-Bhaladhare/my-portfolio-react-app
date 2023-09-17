import React from 'react';

const Education = () => {
    return (
        <div className='flex flex-row w-[90%] p-10 justify-between items-center mx-auto bg-white rounded-xl'>
            
            {/* Education */}
            <div className='w-[45%] '>
                <div>
                    <p>bachelor of engineering in mechanical engineering</p>
                    <ul>
                        <li>Tulsiramji Gaikwad Patil College of Engineering and Technology</li>
                        <li>Aug 2019 - June 2023</li>
                    </ul>
                </div>
                <div>
                    <p>HSC/ 12th Board</p>
                    <ul>
                        <li>sant kabir high school seoni</li>
                        <li>Aug 2018 - march 2019</li>
                    </ul>
                </div>
                <div>
                    <p>SSC/ 10th Board</p>
                    <ul>
                        <li>sant kabir high school seoni</li>
                        <li>Aug 2014 - march 2015</li>
                    </ul>
                </div>
            </div>

            {/* More */}
            <div className='w-[45%]'>
                <div>MORE</div>
                <div>
                    <p>I'm an engineer passionate about coding. Always ready to try hands-on new and emerging technologies.</p>
                    <p>I have a strong foundation in <span>MERN Stack</span> and I am skilled in creating interactive and visually appealing websites.</p>
                    <p>I'm open to <span>Job</span> opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then don't hesitate to <span>contact</span> me.</p>
                </div>
            <button>Contact</button>
            </div>

            
        </div>
    );
}

export default Education;
