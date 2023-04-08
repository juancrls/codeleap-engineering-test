import React, { useState, useEffect, useRef } from "react";
import Button from "../Elements/Button";
import UserNavBar from "../UserNavBar";
import "./styles.scss";
import { connect } from "react-redux";
import { unsetUsername } from "../../actions/userActions";
import userPlaceholderImage from "../assets/images/user-photo-placeholder.png"

const Header = (props) => {
  const { type, title, showEditButtons, showUserOptions, username } = props;
  const [showUserNavBar, setShowUserNavBar] = useState(false);
  const userNavBarRef = useRef(null);
  
  const toggleUserNavBar = async () => {
    setShowUserNavBar(!showUserNavBar);
  };

const toggleButtonRef = useRef(null);

const handleClickOutside = (event) => {
  if (userNavBarRef.current && !userNavBarRef.current.contains(event.target)) {
    if (!toggleButtonRef.current.contains(event.target)) {
      setShowUserNavBar(false);
    }
  }
};

  useEffect(() => {
    if (showUserNavBar) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [showUserNavBar]);
  

  let className=`header${type ? " header--" + type : ""}`

  return (
    <div className={className}>
      {title ? (
        <div className="title">
          <span>{title}</span>
        </div>
      ) : null}

      {showEditButtons ? (
        <div className="edit-buttons-container">
          <Button id="post-edit-button" theme={"icon"}>
            <i>
              <svg
                width="22"
                height="20"
                viewBox="0 0 19 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.80087 20.75C1.80087 22.125 2.971 23.25 4.40115 23.25H14.8023C16.2324 23.25 17.4025 22.125 17.4025 20.75V5.75H1.80087V20.75ZM4.99921 11.85L6.83241 10.0875L9.6017 12.7375L12.358 10.0875L14.1912 11.85L11.4349 14.5L14.1912 17.15L12.358 18.9125L9.6017 16.2625L6.84541 18.9125L5.01221 17.15L7.76851 14.5L4.99921 11.85ZM14.1522 2L12.852 0.75H6.35136L5.05122 2H0.500732V4.5H18.7027V2H14.1522Z"
                  fill="white"
                />
              </svg>
            </i>
          </Button>
          <Button id="post-delete-button" theme={"icon"}>
            <i>
              <svg
                width="27"
                height="25"
                viewBox="0 0 32 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.10095 21.2663L14.8385 21.2475L27.3614 9.3225C27.8528 8.85 28.1233 8.2225 28.1233 7.555C28.1233 6.8875 27.8528 6.26 27.3614 5.7875L25.2994 3.805C24.3165 2.86 22.6016 2.865 21.6265 3.80125L9.10095 15.7288V21.2663ZM23.461 5.5725L25.5269 7.55125L23.4506 9.52875L21.3886 7.5475L23.461 5.5725ZM11.7012 16.7713L19.5411 9.305L21.6031 11.2875L13.7645 18.7513L11.7012 18.7575V16.7713Z"
                  fill="white"
                />
                <path
                  d="M6.50067 26.25H24.7026C26.1367 26.25 27.3029 25.1288 27.3029 23.75V12.915L24.7026 15.415V23.75H10.6065C10.5727 23.75 10.5376 23.7625 10.5038 23.7625C10.4609 23.7625 10.418 23.7513 10.3738 23.75H6.50067V6.25H15.4027L18.003 3.75H6.50067C5.06661 3.75 3.90039 4.87125 3.90039 6.25V23.75C3.90039 25.1288 5.06661 26.25 6.50067 26.25Z"
                  fill="white"
                />
              </svg>
            </i>
          </Button>
        </div>
      ) : null}

      {showUserOptions ? (
        <div className="user-options-container">
          <span>@{username}</span>

          <Button
            ref={toggleButtonRef} // Assign the toggleButtonRef to the button element
            theme={"icon"}
            onClick={toggleUserNavBar}
          >
            <div className="user-avatar-wrapper">
              <img className="user-avatar" src={userPlaceholderImage} alt="User avatar"/>
            </div>
          </Button>
          {showUserNavBar && (
            <div ref={userNavBarRef} className="nav-bar-wrapper">
              <UserNavBar />
            </div>
          )}
        </div>
      ) : null}
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    unsetUsername: () => dispatch(unsetUsername())
  };
};

const mapStateToProps = (state) => {
  return {
    username: state.user.username
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
