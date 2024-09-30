import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("Uppercase was clicked "+ text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase!", "success");
  };

  const handleLoClick = () => {
    // console.log("Lowercase was clicked "+ text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase!", "success");
  };

  const handleClearClick = () => {
    setText("");
    props.showAlert("Text has been cleared!", "success");
  };

  const handleCopyClick = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Text has been copied to clipboard!", "success");
  };
  
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra space has been removed!", "success");
  };

  const handleOnChange = (event) => {
    // console.log("On change");
    setText(event.target.value);
  };

  const calculateWords = () => {
    let words = text.split(" ");
    let count = words.length;
    if (words[words.length - 1] === "") {
      count--;
    }
    return count;
  };

  const [text, setText] = useState("");

  return (
    <>
      <div
        className="conatiner"
        style={{ color: props.mode === "light" ? "black" : "white" }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
            style={{
              backgroundColor: props.mode === "light" ? "white" : "grey",
              color: props.mode === "light" ? "black" : "white",
            }}
          ></textarea>
        </div>
        <button
          className="btn btn-primary mx-1 my-1"
          onClick={handleUpClick}
          style={{
            color: props.mode === "light" ? "white" : "#042743",
            backgroundColor: props.mode === "light" ? "#042743" : "white",
          }}
        >
          Convert to Uppercase
        </button>
        <button
          className="btn btn-primary mx-1 my-1"
          onClick={handleLoClick}
          style={{
            color: props.mode === "light" ? "white" : "#042743",
            backgroundColor: props.mode === "light" ? "#042743" : "white",
          }}
        >
          Convert to Lowercase
        </button>
        <button
          className="btn btn-primary mx-1 my-1"
          onClick={handleClearClick}
          style={{
            color: props.mode === "light" ? "white" : "#042743",
            backgroundColor: props.mode === "light" ? "#042743" : "white",
          }}
        >
          Clear Text
        </button>
        <button
          className="btn btn-primary mx-1 my-1"
          onClick={handleCopyClick}
          style={{
            color: props.mode === "light" ? "white" : "#042743",
            backgroundColor: props.mode === "light" ? "#042743" : "white",
          }}
        >
          Copy Text
        </button>
        <button
          className="btn btn-primary mx-1 my-1"
          onClick={handleExtraSpaces}
          style={{
            color: props.mode === "light" ? "white" : "#042743",
            backgroundColor: props.mode === "light" ? "#042743" : "white",
          }}
        >
          Remove Extra Spaces
        </button>
      </div>
      <div
        className="container my-3 "
        style={{ color: props.mode === "light" ? "black" : "white" }}
      >
        <h1>Your text summary</h1>
        <p>
          {calculateWords()} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>
          {text === ""
            ? "Enter something in the textbox above to preview here"
            : text}
        </p>
      </div>
    </>
  );
}
