import React from "react";

export default function TextSummary(props) {
  function getWords() {
    let newText = props.text.replace(/\s{2,}/g, " ");
    newText = newText.trim();
    if (newText === "") {
      return 0;
    } else {
      return newText.split(" ").length;
    }
  }
  return (
    <>
      <h1>Your Text Summary</h1>
      <p>
        {getWords()} words and {props.text.length} characters
      </p>
      <p>{0.008 * getWords()} minutes read</p>
    </>
  );
}
