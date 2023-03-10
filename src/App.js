import React from "react";
import "./styles.css";
import { useState } from "react";

export default function App() {
  const emojiDictionary = {
    "đ": "Grinning Face",
    "đ": "Winking Face",
    "đ": "Upside-Down Face",
    "đ": "Face with Tears of Joy",
    "đ": "Smiling Face with Heart-Eyes",
    "đ": "Face with Tongue",
    "đ": "Neutral Face",
    "âšī¸": "Frowning Face",
    "đ¨": "Fearful Face",
    "đ": "Thumbs Up",
    "đ": "Thumbs Down",
    "": "Please enter an emoji or select below đ"
  };

  const [meaning, setMeaning] = useState(
    "Please enter an emoji or select below đ"
  );
  const changeHandler = (event) => {
    let meaning = emojiDictionary[event.target.value];
    console.log(meaning);
    if (meaning) {
      setMeaning(meaning);
    } else {
      setMeaning("We dont know what that means. Choose from the emojis below!");
    }
  };

  let emojiArray = Object.keys(emojiDictionary);

  const handleClick = (emoji) => {
    let word = emojiDictionary[emoji];
    setMeaning(word);
  };

  return (
    <div className="App">
      <h1>inside outtt!</h1>
      <textarea onChange={changeHandler}></textarea>
      <h1>{meaning}</h1>
      <h3>emojis we know</h3>
      <ul>
        {emojiArray.map((emoji) => {
          return (
            <li key={emoji} onClick={() => handleClick(emoji)}>
              {emoji}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
