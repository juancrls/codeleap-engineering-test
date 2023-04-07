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
    size,
  } = props;

  return (
    <div className="text_area-container">
      <div className="label-container">
        <label className="label">{label}</label>
        {error && <span className="error-span">{error}</span>}
      </div>

      <div className="text_area-wrapper">
        {type == "input" ? (
          <input
            onChange={onChange}
            id={id}
            value={value}
            className={`text_area text_area--${theme}${error ? " text_area--danger" : ""}${size == "medium" ? " text_area--medium" : ""}`}
            placeholder={placeholder}
          />
        ) : (
          <textarea
            onChange={onChange}
            id={id}
            value={value}
            className={`text_area text_area--${theme}${error ? " text_area--danger" : ""}${size == "medium" ? " text_area--medium" : ""}`}
            placeholder={placeholder}
          />
        )}
      </div>
    </div>
  );
}
