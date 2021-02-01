import React from "react";
import Styled from "styled-components";
import { Form, Button } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";

const StyledLogin = Styled.div`
  padding:60px
`;

const toPage = (history) => {
  history.push("/");
};

const LoginPage = () => {
  const history = useHistory();

  return (
    <StyledLogin>
      <h1>LoginPage</h1>
      <div>
        <Link to={`/login`}>
          <Button variant="info" className="mx-2">
            會員登入
          </Button>
        </Link>
        <Link to={`/signup`}>
          <Button variant="light">加入會員</Button>
        </Link>
      </div>
      <Form className="my-4">
        <Form.Group controlId="formBasicEmail">
          <Form.Control placeholder="使用者名稱" />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Control type="password" placeholder="密碼" />
        </Form.Group>
        <Form.Group controlId="formBasicCheckbox"></Form.Group>
        <Button
          variant="primary"
          onClick={() => {
            toPage(history);
          }}
        >
          登入
        </Button>
      </Form>
    </StyledLogin>
  );
};

export default LoginPage;
