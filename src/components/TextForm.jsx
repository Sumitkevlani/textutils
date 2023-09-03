import React, { useState } from "react";
import TextSummary from "./TextSummary";
import TextPreview from "./TextPreview";

export default function TextForm(props) {
  const [text, setText] = useState("Enter the text here");

  function removeAlert() {
    props.setAlert(null);
  }

  function handleChange(event) {
    setText(event.target.value);
  }

  function handleUpperCaseClick() {
    setText(text.toUpperCase());
    props.setAlert({
      type: "success",
      msg: "Text Converted to upper case",
    });
    setTimeout(removeAlert, 2000);
  }

  function handleLowerCaseClick() {
    setText(text.toLowerCase());
    props.setAlert({
      type: "success",
      msg: "Text Converted to lower case",
    });
    setTimeout(removeAlert, 2000);
  }

  function copyText() {
    navigator.clipboard.writeText(text);
    props.setAlert({
      type: "success",
      msg: "Text copied",
    });
    setTimeout(removeAlert, 2000);
  }

  function handleExtraSpaces() {
    let newText = text.replace(/\s{2,}/g, " ");
    setText(newText);
    props.setAlert({
      type: "success",
      msg: "Extra spaces removed",
    });
    setTimeout(removeAlert, 2000);
  }
  return (
    <div
      className="form-floating container"
      style={{ color: props.mode === "dark" ? "white" : "#343a40" }}
    >
      <h1>{props.title}</h1>
      <textarea
        className="form-control my-3"
        placeholder="Leave a comment here"
        id="floatingTextarea2"
        style={{
          height: "200px",
          color: props.mode === "dark" ? "white" : "#343a40",
          backgroundColor: props.mode === "dark" ? "grey" : "white",
        }}
        value={text}
        onChange={handleChange}
      ></textarea>
      <button
        className="btn btn-primary my-3 mx-2"
        onClick={handleUpperCaseClick}
      >
        Convert Uppercase
      </button>
      <button
        className="btn btn-primary my-3 mx-2"
        onClick={handleLowerCaseClick}
      >
        Convert Lowercase
      </button>
      <button className="btn btn-primary my-3 mx-2" onClick={copyText}>
        Copy Text
      </button>
      <button className="btn btn-primary my-3 mx-2" onClick={handleExtraSpaces}>
        Handle Extra Spaces
      </button>
      <TextSummary text={text} mode={props.mode} />
      <TextPreview text={text} mode={props.mode} />
    </div>
  );
}
