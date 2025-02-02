import React, { useState } from 'react'

const Tabs = () => {
    const [activeTab, setActiveTab] = useState("html")
  return (
    <div>
        <div className='flex justify-center space-x-4 mt-10'>
            <button className='rounded-md w-32 p-3 bg-red-500 text-white' onClick={() => setActiveTab("html")}>HTML</button>
            <button className='rounded-md w-32 p-3 bg-green-500 text-white' onClick={() => setActiveTab("css")}>CSS</button>
            <button className='rounded-md w-32 p-3 bg-blue-500 text-white' onClick={() => setActiveTab("javascript")}>JAVASCRIPT</button>
        </div>
        <div className='w-2/3 mx-auto mt-6 font-sans border  mb-10 rounded p-5'>
            {activeTab === "html" && (
                <p>HTML stands for Hyper Text MarkUp Language</p>
            )}
            {activeTab === "css" && (
                <p>CSS stands for Cascading Style Sheets</p>
            )}
            {activeTab === "javascript" && (
                <p>JavaScript is a programming language used for logical parts</p>
            )}
        </div>
    </div>
  )
}

export default Tabs