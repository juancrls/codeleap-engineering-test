import React from "react";
import { Card, CardHeader } from "../Card"
import "./styles.scss"

export default function Form(props) {
  const { onSubmit, id, title, children } = props
  return (
    <>
      <span className="form-title">{title}</span>
      <form
        noValidate
        onSubmit={onSubmit}
        title={title}
        id={id}
      >
        {children}
      </form>
    </>
  );
}