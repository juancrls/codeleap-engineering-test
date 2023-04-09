import React from 'react';
import Header from '../Header';
import "./styles.scss";

export default function Card(props) {
  const { title, showEditButtons, postId, children, size="large" } = props
  return (
    <div className='card-container'>
      {title ? (
        <Header type="card" title={title} postId={postId} showEditButtons={showEditButtons}/>
      ) : null}
      <div className={`card-body${title ? " card-body--hasHeader" : ""} card-body--${size}`}>
        {children}
      </div>
    </div>
  )
}