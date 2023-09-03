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
    if (text.length > 0) {
      props.setAlert({
        type: "success",
        msg: "Text Converted to upper case",
      });
      setTimeout(removeAlert, 2000);
    }
  }

  function handleLowerCaseClick() {
    setText(text.toLowerCase());

    if (text.length > 0) {
      props.setAlert({
        type: "success",
        msg: "Text Converted to lower case",
      });
      setTimeout(removeAlert, 2000);
    }
  }

  function copyText() {
    navigator.clipboard.writeText(text);
    if (text.length > 0) {
      props.setAlert({
        type: "success",
        msg: "Text copied",
      });
      setTimeout(removeAlert, 2000);
    }
  }

  function handleExtraSpaces() {
    let newText = text.replace(/\s{2,}/g, " ");
    setText(newText);
    if (newText.length > 0) {
      props.setAlert({
        type: "success",
        msg: "Extra spaces removed",
      });
    }
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
          backgroundColor: props.mode === "dark" ? "#13466e" : "white",
        }}
        value={text}
        onChange={handleChange}
      ></textarea>
      <button
        className={`btn btn-${
          props.mode === "dark" ? "outline-light" : "dark"
        } my-3 mx-2`}
        onClick={handleUpperCaseClick}
        disabled={text.length === 0}
      >
        Convert Uppercase
      </button>
      <button
        className={`btn btn-${
          props.mode === "dark" ? "outline-light" : "dark"
        } my-3 mx-2`}
        onClick={handleLowerCaseClick}
        disabled={text.length === 0}
      >
        Convert Lowercase
      </button>
      <button
        className={`btn btn-${
          props.mode === "dark" ? "outline-light" : "dark"
        } my-3 mx-2`}
        onClick={copyText}
        disabled={text.length === 0}
      >
        Copy Text
      </button>
      <button
        className={`btn btn-${
          props.mode === "dark" ? "outline-light" : "dark"
        } my-3 mx-2`}
        onClick={handleExtraSpaces}
        disabled={text.length === 0}
      >
        Handle Extra Spaces
      </button>
      <TextSummary text={text} mode={props.mode} />
      <TextPreview text={text} mode={props.mode} />
    </div>
  );
}
