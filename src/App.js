import "./styles.css";
import React, { useState } from "react";

const emojiDictionary = {
  "😊": "Smiling",
  "😳": "disbelief",
  "😔": "sad",
  "🥡": "takeout box",
  "❤️": "love",
  "😑": "annoyance",
  "💀": "skull"
};
var emojis = Object.keys(emojiDictionary);
export default function App() {
  const [meaning, setMeaning] = useState("");

  function onChangeHandler(event) {
    var userInput = event.target.value;
    var emojiMeaning = emojiDictionary[userInput]; //this method(object[key]) is used to fetch the value of a key from object when the key:value pair is not known beforehand

    if (emojiMeaning === undefined) {
      emojiMeaning = "Oops! emoji not in database ⚠️";
    }
    setMeaning(emojiMeaning);
    // console.log(emojiMeaning);
  }

  function emojiClickHandler(emoji) {
    var emojiMeaning = emojiDictionary[emoji];
    setMeaning(emojiMeaning);
    // console.log("clicked",emoji)
  }

  return (
    <div className="App">
      <h1>inside outtt!</h1>

      <input
        placeholder="enter your emoji here"
        onChange={onChangeHandler}
      ></input>

      <div className="output">{meaning}</div>

      <h2>emojis in database</h2>
      {emojis.map((emoji) => {
        return (
          <span
            style={{
              padding: "0rem 0.4rem",
              fontSize: "1.65rem",
              cursor: "pointer"
            }}
            onClick={() => emojiClickHandler(emoji)}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
