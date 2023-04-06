import "./styles.scss";
import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import Form from "../../components/Form";
import TextArea from "../../components/Elements/TextArea";
import Button from "../../components/Elements/Button";
import { setUsername } from "../../actions/userActions";

const Login = (props) => {
  const [text, setText] = useState("");

  useEffect(() => {
    // Atualiza o localStorage sempre que o username é atualizado
    localStorage.setItem("username", props.username);
  }, [props.username]);

  useEffect(() => {
    // Recupera o username do localStorage quando o componente é montado
    const storedUsername = localStorage.getItem("username");
    if (storedUsername) {
      props.setUsername(storedUsername);
    }
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    props.setUsername(text);
  };

  const handleInputChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div className="login-page">
      <div>
        <h3>
          USER NAME: {props.username}
        </h3>
      </div>

      <Form
        onSubmit={handleSubmit}
        id="login-form"
        title="Welcome to CodeLeap network!"
      >
        <TextArea
          label="Please enter your username"
          placeholder="John doe"
          id="login-username-text-area"
          onChange={handleInputChange}
          theme="neutral"
        >
          {text}
        </TextArea>

        <Button
          id="login-submit-button"
          theme={"primary"}
          disabled={!text.trim()}
        >
          ENTER
        </Button>
      </Form>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    username: state.username
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setUsername: (username) => dispatch(setUsername(username))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
