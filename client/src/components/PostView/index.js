import React from 'react'
import "./styles.scss"
import { getTimeElapsed } from "../utils/timeUtils"

export default function PostView(props) {
  const { author, timestamp, content } = props;

  return (
    <div className='post-container'>
      <div className='post-info'>
        <span>@{author}</span>
        <span className='post-timestamp'>{getTimeElapsed(timestamp)}</span>
      </div>
      <div className='post-content'>
        {content}
      </div>
    </div>
  )
}