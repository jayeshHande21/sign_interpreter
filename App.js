import "./styles.css";
import React, { useState } from "react";

var signDictionary = {
  "🚭": "No Smoking",
  "🚳": "No Cycling",
  "📵": "No Phone Allowed",
  "🚯": "No Littering",
  "🔞": "Only 18+",
};

var signsWeKnow = Object.keys(signDictionary);

export default function App() {
  var [meaning, Setmeaning] = useState(" ");

  function inputHandlerEvent(event) {
    var userInput = event.target.value;
    meaning = signDictionary[userInput];

    if (meaning === undefined) {
      meaning = "We dont have this in our DataBase";
    }
    Setmeaning(meaning);
  }
  function signClickHandler(sign) {
    var meaning = signDictionary[sign];
    Setmeaning(meaning);
  }

  return (
    <div className="App">
      <h1 style={{ color: "Red", fontFamily: "cursive" }}>SIGN BOARD</h1>
      <input onChange={inputHandlerEvent}></input>
      <div>
        <h2 style={{ color: "grey", fontFamily: "cursive" }}>Signs We Know</h2>

        {signsWeKnow.map(function (sign) {
          return (
            <span
              onClick={() => signClickHandler(sign)}
              style={{ padding: "1rem", fontSize: "30px", cursor: "pointer" }}
              key={sign}
            >
              {sign}
            </span>
          );
        })}
      </div>
      <h2>{meaning}</h2>
    </div>
  );
}
