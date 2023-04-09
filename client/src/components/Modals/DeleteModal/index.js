import React from "react";
import Button from "../../Elements/Button";
import { connect } from "react-redux";
import { deletePost } from "../../../actions/postActions";

import "./styles.scss";

const DeleteModal = (props) => {
  const { toggleDeleteModal, deletePost, postId } = props

  const deletePostFromId = () => {
    deletePost(postId)
    toggleDeleteModal()
  }

  return (
    <div className="delete-modal-container">
      <div className="delete-modal-wrapper">
        <span>Are you sure you want to delete this item?</span>

        <div className="modal-buttons-container">
          <Button onClick={toggleDeleteModal} theme="neutral-1">Cancel</Button>
          <Button onClick={deletePostFromId} theme="danger">Delete</Button>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    deletePost: (id) => dispatch(deletePost(id)),
  };
};

const mapStateToProps = (state) => {
  return {
    posts: state.posts.posts,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DeleteModal);
