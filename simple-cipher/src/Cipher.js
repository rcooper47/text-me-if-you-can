import React from "react";
import { useState } from "react";
import './Cipher.css'
function Cipher () {
    const[text, setText] = useState('');

    return (
    <div>
        <form id='input'>
    <label>Enter your secret message:</label>
    <input type='text' 
    required
    value={text} 
    onChange={(e) => setText(e.target.value)}></input>
  </form>
  <p id='output'>{text}</p>
  </div>)


};

export default Cipher;