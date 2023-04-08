import React, { useEffect, useState } from "react";
import { PulseLoader } from "react-spinners";

import Form from "../../components/Form";
import PostView from "../../components/PostView"
import TextArea from "../../components/Elements/TextArea";
import Button from "../../components/Elements/Button";
import Card from "../../components/Card";
import Header from "../../components/Header";

import { connect } from "react-redux";
import { unsetUsername } from "../../actions/userActions";
import { createPost, editPost, deletePost } from "../../actions/postActions";

import "./styles.scss"

const Feed = (props) => {
  const { createPost, editPost, deletePost, username, posts } = props;

    // set the username on localStorage

    useEffect(() => {
      localStorage.setItem("posts", JSON.stringify(posts));
    }, [posts]);

  const [postStates, setPostStates] = useState({
    title: { value: "" },
    content: { value: "" },
  })
  const [loading, setLoading] = useState(false);
  
  let hasEmptyFields = !postStates.title.value.trim() || !postStates.content.value.trim();

  const handleSubmit = (event) => {
    event.preventDefault();
      setLoading(true);
      setTimeout(() => {
        createPost(postStates.title.value, postStates.content.value, username);
        setLoading(false);
      }, 2000);
  }

  const handleInputChange = (event) => {
    let stateId = event.target.id;

    setPostStates((prev) => ({
      ...prev,
      [stateId]: {
        value: event.target.value
      }
    }))
  }

  const postCards = posts.map(post => (
    <Card key={post.id} title={post.title} showEditButtons={post.author == username ? true : false}>
      <PostView author={post.author} content={post.content} timestamp={post.timestamp} />
    </Card>
  ))

  const contentTest = "Curabitur suscipit suscipit tellus. Phasellus consectetuer vestibulum elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas egestas arcu quis ligula mattis placerat. Duis vel nibh at velit scelerisque suscipit."

  return (
    <div className="feed">
      <div className="feed-wrapper">
        <Header title={"CodeLeap Network"} showUserOptions/>
        <div className="feed-container">
            <Card>
              <Form
                onSubmit={handleSubmit}
                id="login-form"
                title="What's on your mind?"
                size="large"
              >
                <TextArea
                  label="Title"
                  placeholder="Hello world"
                  value={postStates.title.value}
                  id="title"
                  type="input"
                  onChange={handleInputChange}
                  theme="neutral"
                />
                <TextArea
                  label="Content"
                  placeholder="Content here"
                  value={postStates.content.value}
                  id="content"
                  onChange={handleInputChange}
                  theme="neutral"
                  size="medium"
                />
                <Button
                  id="create-post-submit-button"
                  theme={"primary"}
                  disabled={hasEmptyFields}
                  loading={loading}
                >
                  {loading ? <PulseLoader size={8} color={"#ffffff"}/> : "Create"}
                </Button>
              </Form>
            </Card>
            { postCards }
          </div>
        </div>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    unsetUsername: () => dispatch(unsetUsername()),
    createPost: (title, content, username) => dispatch(createPost(title, content, username)),
  };
};

const mapStateToProps = (state) => {
  return {
    username: state.user.username,
    posts: state.posts.posts
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Feed);
