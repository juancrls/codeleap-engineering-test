import React from "react";
import { connect } from "react-redux";

const Feed = (props) => {
  return (
    <div>
      Welcome to the Feed, {props.username}!
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    username: state.username
  }
}

export default connect(mapStateToProps)(Feed);
