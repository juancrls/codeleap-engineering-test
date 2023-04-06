import React from 'react'
import "./styles.scss"

export default function Button(props) {
  let {theme="simple", disabled, children} = props

  if(disabled) {
    theme = "neutral-2"
  }

  return (
    <div className="button-wrapper">
      <button className={`button button--${theme ? theme : "neutral-1"}`}>
        {children}
      </button>
    </div>
  )
}
