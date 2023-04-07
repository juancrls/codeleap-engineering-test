import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Form from "../../components/Form";
import TextArea from "../../components/Elements/TextArea";
import Button from "../../components/Elements/Button";
import { PulseLoader } from "react-spinners";
import Card from "../../components/Card";
import Header from "../../components/Header";
import "./styles.scss"

const Feed = (props) => {
  // let title = "post_title";
  // let content = "post_content";

  const [postStates, setPostStates] = useState({
    title: { value: "" },
    content: { value: "" },
  })
  const [loading, setLoading] = useState(false);
  
  let hasEmptyFields = !postStates.title.value.trim() || !postStates.content.value.trim();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("post created!");
  }

  const handleInputChange = (event) => {
    let stateId = event.target.id;

    setPostStates((prev) => ({
      ...prev,
      [stateId]: {
        value: event.target.value
      }
    }))
    console.log("state", postStates)
  }

  return (
    <div className="feed">
      <div className="feed-wrapper">
        <Header title={"CodeLeap Network"}/>
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
                >
                  {loading ? <PulseLoader size={8} color={"#ffffff"}/> : "Create"}
                </Button>
              </Form>
            </Card>

            <Card title="My First Post at CodeLeap Network!" showEditButtons>

            </Card>
          </div>
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
