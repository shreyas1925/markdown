import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import MenuIcon from "@material-ui/icons/Menu";
import "./App.css";

const App = () => {
  const [input, setInput] = useState("");
  const [effect, setEffect] = useState(false);

  const submitEffect = () => {
    {
      effect ? setEffect(false) : setEffect(true);
    }
  };
  return (
    <div className="main">
      <div className="main__window">
        <div className="left__window">
          <header>
            <MenuIcon />
            <button className="btn" onClick={submitEffect}>
              Raw
            </button>
          </header>
          <textarea
            className="left__window"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          ></textarea>
        </div>
        {effect && (
          <div className="right__window">
            <ReactMarkdown>{input}</ReactMarkdown>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
