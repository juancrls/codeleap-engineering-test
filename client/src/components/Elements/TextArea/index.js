import React from "react";
import "./styles.scss";

export default function TextArea(props) {
  const {
    label,
    type,
    value,
    error,
    onChange,
    id,
    placeholder,
    theme,
  } = props;

  return (
    <div className="text-area-container">
      <div className="label-container">
        <label className="label">{label}</label>
        {error && <span className="error-span">{error}</span>}
      </div>

      <div className="text-area-wrapper">
        <input
          onChange={onChange}
          id={id}
          type={type === "password-confirmation" ? "password" : type}
          value={value}
          className={`input input--${theme} ${error ? "input--danger" : ""}`}
          placeholder={placeholder}
        />
      </div>
    </div>
  );
}
