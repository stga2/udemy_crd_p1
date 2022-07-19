import { Component } from "react";
import { Outlet } from "react-router-dom";

class Navigation extends Component {
  render() {
    return (
      <div>
        <h1>Navbar</h1>
        <Outlet />
      </div>
    );
  }
}

export default Navigation;
