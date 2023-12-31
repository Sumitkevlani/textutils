import React from "react";

export default function Alert(props) {
  //syntax props.alert && () => this will return the alert component only when the props.alert is not null.
  return (
    <div className="my-3" style={{ height: "50px" }}>
      {props.alert && (
        <div className={`alert alert-${props.alert.type}`} role="alert">
          {props.alert.msg}
        </div>
      )}
    </div>
  );
}
