import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { connect } from "react-redux";

const PrivateRoute = (props) => {
  console.log("PRIVATE PROPS", props)
  const { username: currentUser } = props;

  return currentUser ? (
    <>
      <Outlet />
    </>
  ) : (
    <Navigate to="/login" />
  );
}

const mapStateToProps = (state) => {
  return {
    username: state.username
  }
}

export default connect(mapStateToProps)(PrivateRoute);