import React from 'react'
import "./styles.scss"

export default function Button(props) {
  let {theme="simple", disabled, children, loading} = props

  if(disabled) {
    theme = "neutral-2"
  }

  let buttonClass = `button button--${theme ? theme : "neutral-1"}`
  let buttonWrapperClass = `button-wrapper${theme == "icon" ? " button-wrapper--icon" : ""}`

  return (
    <div className={buttonWrapperClass}>
      <button className={buttonClass} disabled={disabled || loading}>
        {children}
      </button>
    </div>
  )
}
