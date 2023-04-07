import React from 'react';
import Header from '../Header';
import "./styles.scss";

export default function Card(props) {
  const { title, showEditButtons, children } = props
  return (
    <div className='card-container'>
      {title ? (
        <Header type="card" title={title} showEditButtons={showEditButtons}/>
      ) : null}
      <div className={`card-body ${title ? "card-body--hasHeader" : ""}`}>
        {children}
      </div>
    </div>
  )
}