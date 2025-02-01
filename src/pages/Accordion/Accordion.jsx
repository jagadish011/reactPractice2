import React from 'react'
import { useState } from 'react'

const Accordion = () => {
    const content = [
        {
            title: "HTML",
            content: "HTML is a markup language that is used to create the structure of a webpage."
        },
        {
            title: "CSS",
            content: "CSS is a styling language that is used to style the structure created with HTML."
        },
        {
            title: "JavaScript",
            content: "JavaScript is a programming language that is used to add interactivity to a webpage."
        }
    ]

    const [activeIndex, setActiveIndex] = useState(null)

    const toggleActiveIndex = (index) => {
        if (activeIndex === index){
            setActiveIndex(null)
        }
        else {
            setActiveIndex(index)
        }
    }
  return (
    <div className='w-96 mx-auto mt-10'>Accordion</div>
    {content.map((item, index) => (
        <div key={index} className='border border-gray-200 rounded-lg mt-4'>
            <button onClick={() => toggleActiveIndex(index)} className='w-full p-4 text-left bg-gray-100 hover:bg-gray-200'>
                {item.title}
            </button>

            {activeIndex == index && (
                <div>
                    <p className='p-4'>{item.content}</p>
                </div>
            )}
        </div>
    ))}
  )
}

export default Accordion