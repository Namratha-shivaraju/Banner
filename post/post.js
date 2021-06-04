import React, { useState } from 'react'
import './post.css';
import { Avatar } from '@material-ui/core';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
function Post() {
    const[input,setInput] = useState("");
    const[code, setCode] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = { input, code };

        console.log(blog);
    };

    return (
    <div className="post">
        <div className="Post_top">
        <Avatar  />
        <form>
            <input 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="Post_Input" placeholder={`Fill in the information`}
            />
            <input 
            value={code}
            onChange={(e) => setCode(e.target.value)}
            placeholder="PinCode"/>
            <button onClick={handleSubmit} type="submit">
                POST
            </button>
        </form>
        </div>
        <div className="Post_bottom">
            <div className="Post_opt">
                <PhotoLibraryIcon style={{ color:"purple"}} />
                <h3>Images</h3>
            </div>

        </div>
            
        </div>
    )    
}

export default Post
