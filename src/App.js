import React from "react";
import "./styles.css";
import { useState } from "react";

export default function App() {
  const emojiDictionary = {
    "😀": "Grinning Face",
    "😉": "Winking Face",
    "🙃": "Upside-Down Face",
    "😂": "Face with Tears of Joy",
    "😍": "Smiling Face with Heart-Eyes",
    "😛": "Face with Tongue",
    "😐": "Neutral Face",
    "☹️": "Frowning Face",
    "😨": "Fearful Face",
    "👍": "Thumbs Up",
    "👎": "Thumbs Down",
    "": "Please enter an emoji or select below 👍"
  };

  const [meaning, setMeaning] = useState(
    "Please enter an emoji or select below 👍"
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
