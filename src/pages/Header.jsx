import React from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import { useHistory, Link } from "react-router-dom";
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import "antd/dist/antd.css";

const toPage = (history, url) => {
  history.push(url);
};

const Header = () => {
  const history = useHistory();
  return (
    <Navbar bg="info" variant="dark">
      <Button variant="info" onClick={() => toPage(history, "/")}>
        聽團der人
      </Button>
      <Nav className="ml-auto">
        <Button
          variant="warning"
          className="mx-1"
          onClick={() => toPage(history, "/")}
        >
          Home
        </Button>
        <Button
          variant="warning"
          className="mx-1"
          onClick={() => toPage(history, "/events")}
        >
          Events
        </Button>
        <Button
          variant="warning"
          className="mx-1"
          onClick={() => toPage(history, "/artists")}
        >
          Artists
        </Button>
        <Button
          variant="warning"
          className="mx-1"
          onClick={() => toPage(history, "/login")}
        >
          Login
        </Button>
        <Link to={"/login"}>
          <Avatar size={40} icon={<UserOutlined />} />
        </Link>
      </Nav>
    </Navbar>
  );
};

export default Header;
