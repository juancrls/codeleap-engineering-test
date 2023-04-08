import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { connect } from "react-redux";

const PrivateRoute = (props) => {
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
    username: state.user.username
  }
}

export default connect(mapStateToProps)(PrivateRoute);