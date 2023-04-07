import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Form from "../../components/Form";
import TextArea from "../../components/Elements/TextArea";
import Button from "../../components/Elements/Button";
import { PulseLoader } from "react-spinners";
import { Card } from "../../components/Card";
import "./styles.scss"

const Feed = (props) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);
  
  let hasEmptyFields = !title.trim() || !content.trim();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("post created!");
  }

  const handleInputChange = (event) => {

  }

  return (
    <div className="feed-wrapper">
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
              value={title}
              id="create-post-title-text-area"
              onChange={handleInputChange}
              theme="neutral"
            />
            <TextArea
              label="Content"
              placeholder="Content here"
              value={content}
              id="create-post-content-text-area"
              onChange={handleInputChange}
              theme="neutral"
              size="medium"
            />
            <Button
              id="create-post-submit-button"
              theme={"primary"}
              disabled={hasEmptyFields}
            >
              {loading ? <PulseLoader size={8} color={"#ffffff"}/> : "Create"}
            </Button>
          </Form>
        </Card>

        <Card title="My First Post at CodeLeap Network!" showEditButtons>

        </Card>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    username: state.username
  }
}

export default connect(mapStateToProps)(Feed);
