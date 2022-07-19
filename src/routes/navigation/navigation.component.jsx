import { Component, Fragment } from "react";
import { Outlet, Link } from "react-router-dom";

// import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import "./navigation.style.scss";

class Navigation extends Component {
  render() {
    return (
      <Fragment>
        <div className="navigation">
          <Link class="logo-container" to="/">
            <img className="logo" src="/crown.png" />
          </Link>

          <div className="nav-links-container">
            <Link className="nav-link" to="/shop">
              SHOP
            </Link>
            <Link className="nav-link" to="/sign-in">
              SIGN IN
            </Link>
          </div>
        </div>
        <Outlet />
      </Fragment>
    );
  }
}

export default Navigation;
