import "./styles.scss";
import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import Form from "../../components/Form";
import TextArea from "../../components/Elements/TextArea";
import Button from "../../components/Elements/Button";
import Card from "../../components/Card";
import { setUsername } from "../../actions/userActions";
import { useNavigate } from "react-router-dom";
import { PulseLoader } from "react-spinners";

const Login = (props) => {
  const [currentUser, setCurrentUser] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

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
    setError("");
    event.preventDefault();
    if (currentUser.trim()) {
      setLoading(true);
      setTimeout(() => {
        props.setUsername(currentUser);
        localStorage.setItem("username", currentUser);
        navigate("/feed");
        setLoading(false);
      }, 2000);
    } else {
      setError("Username can not be empty!")
    }
  };

  const handleInputChange = (event) => {
    setCurrentUser(event.target.value);
  };

  return (
    <div className="login-page">
      <Card>
        <Form
          onSubmit={handleSubmit}
          id="login-form"
          title="Welcome to CodeLeap network!"
        >
          <TextArea
            label="Please enter your username"
            placeholder="John doe"
            value={currentUser}
            type="input"
            id="login-username-text-area"
            onChange={handleInputChange}
            theme="neutral"
          />

          <Button
            id="login-submit-button"
            theme={"primary"}
            disabled={!currentUser.trim()}
          >
            {loading ? <PulseLoader size={8} color={"#ffffff"}/> : "ENTER"}
          </Button>

        </Form>

      </Card>
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
