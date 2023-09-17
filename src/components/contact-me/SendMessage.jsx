import React, { useState } from 'react';
import emailjs from 'emailjs-com'; // Make sure to import emailjs properly
import { toast } from 'react-toastify';

const SendMessage = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    // const serviceId = process.env.REACT_APP_SERVICE_ID; 
    // const templateId = process.env.REACT_APP_TEMPLATE_ID; 
    // const publicKey = process.env.REACT_APP_PUBLIC_KEY;

    const serviceId = "service_rfxmbne"; 
    const templateId = "template_9kxzt5y"; 
    const publicKey = "DeT0ENBDTyzUhP7Wx";

    const templateParams = {
        form_name: name,
        form_email: email,
        to_name: "anuj",
        message: message,
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.send(serviceId, templateId, templateParams, publicKey)
            .then((response) => {
                console.log("Email sent successfully", response);
                setName("");
                setEmail("");
                setMessage("");
            })
            .catch((error) => {
                console.log(error);
            });
            toast.success("Message Send succesfully")
    };

    return (
        <form className='flex flex-col gap-10 bg-blue-900 h-full w-full p-20 text-white rounded-xl' onSubmit={handleSubmit}>
            <div>
                <h4 className='font-bold text-[2.5rem]'>Contact Me</h4>
            </div>
            <div>            
                {/* <label>Name</label> */}
                <input
                    type='text'
                    placeholder='Enter Your Name'
                    value={name}
                    className='bg-blue-900 border-b'
                    onChange={(e) => setName(e.target.value)} // Use parentheses, and update the state variable correctly
                />
            </div>
            <div>
                {/* <label>Email</label> */}
                <input
                    type='text'
                    placeholder='Enter Your Email'
                    value={email} // Use the email state variable here
                    className='bg-blue-900 border-b'
                    onChange={(e) => setEmail(e.target.value)} // Use parentheses, and update the state variable correctly
                />
            </div>
            <div>
                {/* <label>Message</label> */}
                <input
                    type='text'
                    placeholder='Enter Your Message'
                    value={message} // Use the message state variable here
                    className='bg-blue-900 border-b'
                    onChange={(e) => setMessage(e.target.value)} // Use parentheses, and update the state variable correctly
                />
            </div>
            <button type="submit" className='bg-white text-blue-900 font-bold rounded-md p-2'>Send</button>
        </form>
    );
}

export default SendMessage;
