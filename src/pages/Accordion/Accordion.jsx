import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const Accordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  const sections = [
    { title: "Section 1", content: "This is the content for section 1." },
    { title: "Section 2", content: "This is the content for section 2." },
    { title: "Section 3", content: "This is the content for section 3." },
  ];

  return (
    <div className="w-80 mx-auto mt-6 font-sans">
      {sections.map((section, index) => (
        <div key={index} className="border border-gray-300 mb-2 rounded">
          <div
            className="p-3 bg-gray-200 cursor-pointer flex justify-between items-center"
            onClick={() => toggle(index)}
          >
            <span>{section.title}</span>
            {openIndex === index ? <FaChevronUp /> : <FaChevronDown />}
          </div>
          {openIndex === index && (
            <div className="p-3 bg-white">{section.content}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
