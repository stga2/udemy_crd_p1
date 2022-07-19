import { Component, Fragment } from "react";
import { Outlet, Link } from "react-router-dom";

class Navigation extends Component {
  render() {
    return (
      <Fragment>
        <div className="navigation">
          <Link class="logo-container" to="/">
            <div>Logo</div>
          </Link>

          <div className="nav-links-container">
            <Link className="nav-link" to="/shop">
              SHOP
            </Link>
          </div>
          <Outlet />
        </div>
      </Fragment>
    );
  }
}

export default Navigation;
