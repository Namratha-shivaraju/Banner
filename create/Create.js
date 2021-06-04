import React, { useState } from 'react'
import './Create.css'
const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [code, setCode] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = { title, body, code };

        console.log(blog);
    }

    return (
        <div className="create">
            <h2>CREATE A NEW POST</h2>
            <div className="ccreate">
            <form onSubmit={handleSubmit}>
                <label>Title</label>
                <input
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label>Description</label>
                <textarea 
                    required
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                ></textarea>
                <label>PinCode</label>
                <input
                    type="text"
                    required
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                />
                <button>POST</button>
            </form>
            </div>
        </div>
    );
}

export default Create;
