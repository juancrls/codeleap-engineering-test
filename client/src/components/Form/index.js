import React from "react";
import "./styles.scss"

export default function Form(props) {
  const { onSubmit, id, title, children } = props
  return (
    <div className="form-container">
      <span className="title">{title}</span>
      <form
        noValidate
        onSubmit={onSubmit}
        title={title}
        id={id}
      >
        {children}
      </form>
    </div>
  );
}