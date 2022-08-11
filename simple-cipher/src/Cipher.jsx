import React from "react";
import { useState } from "react";
import './Cipher.css';
//TODO: add space and capital letter functionality
function Cipher () {
    const[oldText, setOldText] = useState('');
    var dict = {"a":"y",
                "b": "t",
                "c": "o",
                "d": "r",
                "e": "f",
                "g": "x",
                "h": "u",
                "i":"q",
                "j": "w",
                "k": "p",
                "l": "s",
                "n": "v",
                "o": "m",
                "p": "l",
                "q": "a",
                "r": "k",
                "s": "l",
                "t": "e",
                "u": "j",
                "v": "g",
                "w": "d",
                "x": "h",
                "y": "f",
                "z": "b",
                " ": " "}
    //const[newText, setNewText] = useIterate(oldText);
    return (
    <div>
        <form id='input'>
    <label>Enter your secret message:  </label>
    <input type='text' 
    required
    value={oldText} 
    onChange={(e) => setOldText(e.target.value)}></input>
  </form>
  <p id='output'>{oldText.split("").map((letter) => dict[letter])}</p>
  </div>)


};

export default Cipher;