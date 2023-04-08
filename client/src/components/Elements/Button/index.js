import React from 'react'
import "./styles.scss"

const Button = React.forwardRef((props, ref) => {
  let {theme="simple", size, disabled, children, loading, onClick} = props

  if(disabled && theme !== "icon") {
    theme = "neutral-2"
  }

  let buttonClass = `button button--${theme ? theme : "neutral-1"}`
  let buttonWrapperClass = `button-wrapper${theme == "icon" ? " button-wrapper--icon" : ""}${size == "full" ? " button-wrapper--full" : ""}`

  return (
    <div ref={ref} className={buttonWrapperClass}>
      <button type="submit" className={buttonClass} disabled={disabled || loading} onClick={onClick}>
        {children}
      </button>
    </div>
  )
})

export default Button
