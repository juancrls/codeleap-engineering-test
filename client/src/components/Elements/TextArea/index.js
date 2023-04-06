import React from "react";
import "./styles.scss";

export default function TextArea(props) {
  const {
    label,
    type,
    value,
    errorMsg,
    onChange,
    id,
    placeholder,
    theme,
  } = props;

  return (
    <div className="text-area-container">
      <label className="label">{label}</label>

      <div className="text-area-wrapper">
        <input
          onChange={onChange}
          id={id}
          type={type === "password-confirmation" ? "password" : type}
          value={value}
          className={`input input--${theme} ${errorMsg ? "input--danger" : ""}`}
          placeholder={placeholder}
        />
      </div>
      {errorMsg && <span className="error-span">{errorMsg}</span>}
    </div>
  );
}
