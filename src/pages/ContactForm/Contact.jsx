import axios from 'axios';
import React, { useState } from 'react'

const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res =  await axios.post("https://jsonplaceholder.typicode.com/posts", {
                name,
                email,
                message
            });

            console.log("Response from the server", res);
            alert("Form submitted successfully");
            

        } catch (error) {
            console.log("Error in submitting the form", error);
            alert("Error in submitting the form");
        }        
    }

  return (
    <div className='w-80 mx-auto mt-6 font-sans border border-gray-300 mb-10 rounded p-5'>
        <h1 className='text-2xl font-semibold mb-5'>Contact Us</h1>
        <form className='space-y-4' onSubmit={handleSubmit}>
            <input type="text" placeholder='Enter your name' className='border rounded-md w-full p-3' required value={name} onChange={(e) => setName(e.target.value)}/>
            <input type="email" placeholder='Enter your email' className='border rounded-md w-full p-3' required value={email} onChange={(e) => setEmail(e.target.value)}/>
            <textarea placeholder='Enter your message' className='border rounded-md w-full p-3' value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
            <button type='submit' className='bg-blue-500 text-white p-3 rounded-md w-full'>
                Submit
            </button>
        </form>
    </div>
  )
}

export default Contact