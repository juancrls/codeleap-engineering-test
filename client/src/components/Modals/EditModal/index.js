import React from "react";
import { editPost } from "../../../actions/postActions";
import { connect } from "react-redux";
import Button from "../../Elements/Button";
import Form from "../../Form";
import TextArea from "../../Elements/TextArea";
import { useState } from "react";

import "./styles.scss";

const EditModal = (props) => {
  const { title, content, postId, toggleEditModal, editPost } = props;

  // useEffect(() => {
  //   localStorage.setItem("posts", JSON.stringify(posts));
  // }, [posts]);

  const [editedPostStates, setEditedPostStates] = useState({
    "edit-post-title": { value: "" },
    "edit-post-content": { value: "" },
  })

  let hasEmptyFields = !editedPostStates["edit-post-title"].value.trim() || !editedPostStates["edit-post-content"].value.trim();

  const handleInputChange = (event) => {
    let stateId = event.target.id;

    setEditedPostStates((prev) => ({
      ...prev,
      [stateId]: {
        value: event.target.value
      }
    }))
  }

  const editPostFromId = () => {
    editPost(postId, editedPostStates["edit-post-title"].value, editedPostStates["edit-post-content"].value);
    toggleEditModal();
  };

  return (
    <div className="edit-modal-container">
      <div className="edit-modal-wrapper">
        <Form
          onSubmit={editPostFromId}
          id="login-form"
          title="Edit item"
          size="large"
        >
          <TextArea 
            label="Title"
            placeholder="Hello world"
            value={editedPostStates["edit-post-title"].value}
            id="edit-post-title"
            type="input"
            onChange={handleInputChange}
            theme="neutral"
          />
          <TextArea 
            label="Content"
            placeholder="Content here"
            value={editedPostStates["edit-post-content"].value}
            id="edit-post-content"
            onChange={handleInputChange}
            theme="neutral"
            size="medium"
          />
          <div className="modal-buttons-container">
            <Button size="big" onClick={toggleEditModal} theme="neutral-1">
              Cancel
            </Button>
            <Button disabled={hasEmptyFields} size="big" theme="success">
              Save
            </Button>
          </div>
        </Form>

      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    editPost: (id, title, content) => dispatch(editPost(id, title, content)),
  };
};

const mapStateToProps = (state) => {
  return {
    posts: state.posts.posts,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditModal);
