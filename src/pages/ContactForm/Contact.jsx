import axios from 'axios'
import React, { useState } from 'react'

const Contact = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
    const [status, setStatus] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await axios.post("https://jsonplaceholder.typicode.com/posts", {
                name,
                email,
                message
            });

            console.log("Response from the server", res)

            if (res.status === 201) {
                setStatus("Message sent successfully")
                setName("");
                setEmail("");
                setMessage("");
            }
            alert("Message sent successfully", res)
        } catch (error) {
            console.log("Error in in submitting the from", error)
            setStatus("Error in submitting the form")
        }
    }
    return (
        <div className='max-w-md mx-auto mt-10 p-6 border rounded-lg shadow-lg'>
            <h2 className='text-xl font-semibold mb-4'>Contact Us</h2>
            {status && <p className='text-xl font-semibold mb-4'> {status}</p>}
            <form className='space-y-4' onSubmit={handleSubmit}>
                <input type="text" name='name' placeholder='Enter your name' required className='w-full p-2 border rounded' value={name} onChange={(e) => setName(e.target.value)} />
                <input type="email" name='email' placeholder='Enter your email' required className='w-full p-2 border rounded' value={email} onChange={(e) => setEmail(e.target.value)} />
                <textarea name="message" placeholder='Enter your message' rows={4} className='w-full p-2 border rounded' value={message} onChange={(e)=> setMessage(e.target.value)}></textarea>
                <button type='submit' className='rounded p-2 w-1/2 bg-blue-400 shadow-md font-semibold text-white'>Send</button>
            </form>
        </div>
    )
}

export default Contact