import React, { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Menu, Dropdown, Button, Image } from "semantic-ui-react";

// CSS
import "./NavBar.css";
import { logOutUser } from "../../../redux/actions/auth/auth";

const NavBar = ({ logOutUser, user, auth }) => {
  const [activeItem, setActiveItem] = useState(null);

  const handleItemClick = name => {
    setActiveItem(name);
  };

  return (
    <Menu size="mini">
      <Link to="/">
        <Menu.Item
          className="menu"
          name="home"
          active={activeItem === "home"}
          onClick={() => handleItemClick("home")}
        />
      </Link>
      <Link to="/messages">
        <Menu.Item
          className="menu"
          name="messages"
          active={activeItem === "messages"}
          onClick={() => handleItemClick("messages")}
        />
      </Link>

      <Menu.Menu position="right">
        {user && <Image
          className="user_image"
          src={user.image}
        />}
        {user && <Dropdown item text={user.username}>
        <Dropdown.Menu>
          <Dropdown.Item>English</Dropdown.Item>
          <Dropdown.Item>Russian</Dropdown.Item>
          <Dropdown.Item onClick={() => logOutUser()}>Logout</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>}

        <Menu.Item>
          <Button primary>
            <Link className="signIn" to="/login">
              Sign In
            </Link>
          </Button>
        </Menu.Item>
      </Menu.Menu>
    </Menu>
  );
};

const mapStateToProps = state => {
  return {
    user: state.user,
    auth: state.auth
  };
};

export default connect(mapStateToProps, { logOutUser })(NavBar);
