import { Component, Fragment } from "react";
import { Outlet } from "react-router-dom";

class Navigation extends Component {
  render() {
    return (
      <Fragment>
        <div className="navigation">
          <h1>Navbar</h1>
          <Outlet />
        </div>
      </Fragment>
    );
  }
}

export default Navigation;
