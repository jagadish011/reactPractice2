import React, { useState } from 'react'

const FileExplorer = () => {
    const [selectFile, setSelectFile] = useState({});

    const data = [
        { id: 1, name: "README.md" },
        {
            id: 2, name: "Documents",
            children: [
                { id: 3, name: "html.docx" },
                { id: 4, name: "css.docx" },
                { id: 5, name: "javascript.docx" },
            ]
        },
        {
            id: 6, name: "Downloads",
            children: [
                {
                    id: 7, name: "IMAGES",
                    children: [
                        { id: 10, name: "image1.jpg" },
                        { id: 11, name: "image2.jpg" },
                        { id: 12, name: "image3.jpg" },
                    ]
                },
                { id: 8, name: "File2.docx" },
                { id: 9, name: "File3.docx" },
            ]
        },
    ];

    const handleToggle = (id) => {
        if (selectFile[id]) {
            setSelectFile({ ...selectFile, [id]: false })
        }
        else {
            setSelectFile({ ...selectFile, [id]: true })
        }
    }

    return (
        <div >
            <h1>File Explorer</h1>
            {data.map((file) => (
                <div key={file.id}>
                    {file.children ? (
                        <div>
                            <button onClick={() => handleToggle(file.id)}>{selectFile[file.id] ? "-" : "+"} {file.name}</button>
                            {selectFile[file.id] && (
                                file.children.map((child) => (
                                    <div>
                                        {child.children ? (
                                            <div>
                                                <button onClick={() => handleToggle(child.id)}>{selectFile[child.id] ? "-" : "+"} {child.name}</button>
                                                {selectFile[child.id] && (
                                                    child.children.map((subChild) => (
                                                        <div>
                                                            <p>{subChild.name}</p>
                                                        </div>
                                                    ))
                                                )}
                                            </div>
                                        ) : (
                                            <div>
                                                <p>{child.name}</p>
                                            </div>
                                        )}
                                    </div>
                                ))
                            )}
                        </div>
                    ) : (
                        <div>
                            <p>{file.name}</p>
                        </div>
                    )}
                </div>
            ))}
        </div>
    )
}

export default FileExplorer