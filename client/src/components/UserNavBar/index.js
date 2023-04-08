import React from 'react'
import { connect } from "react-redux"
import Button from '../Elements/Button'
import { unsetUsername } from '../../actions/userActions'
import "./styles.scss"

const UserNavBar = (props) => {
  return (
    <div className='nav-bar-container'>
      <ul className='options-container'>
        <div className='user-options'>
          <li>Profile</li>
          <li>User Settings</li>
        </div>
        <div className='auth-options'>

          <li>
            <i>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="25" height="25"><g data-name="Layer 5" fill="#000000" className="color000 svgShape"><path d="M7,28H17a3,3,0,0,0,3-3V24a1,1,0,0,0-2,0v1a1,1,0,0,1-1,1H7a1,1,0,0,1-1-1V7A1,1,0,0,1,7,6H17a1,1,0,0,1,1,1V8a1,1,0,0,0,2,0V7a3,3,0,0,0-3-3H7A3,3,0,0,0,4,7V25A3,3,0,0,0,7,28Z" fill="#000000" className="color000 svgShape"></path><path d="M24.29,11.05a1,1,0,0,0-1.41,1.41L25.41,15H11a1,1,0,0,0,0,2H25.41l-2.53,2.54a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l2.83-2.83a3,3,0,0,0,0-4.24Z" fill="#000000" className="color000 svgShape"></path></g></svg>
            </i>
            <span>Log Out</span>
          </li>
        </div>
      </ul>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    unsetUsername: () => dispatch(unsetUsername())
  };
};

export default connect(mapDispatchToProps)(UserNavBar)