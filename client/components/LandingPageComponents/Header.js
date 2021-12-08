import React from "react";
import { Link } from "react-router-dom";
// import { HashLink } from "react-router-hash-link";

export class Header extends React.Component {
  render() {
    const { props } = this;

    return (
      <header id="header">
        <div className="intro">
          <div className="overlay">
            <div className="container">
              <div className="row">
                <div className="col-md-8 col-md-offset-2 intro-text">
                  <h1>
                    {props.data ? props.data.title : "Loading"}
                    <span></span>
                  </h1>
                  <p>{props.data ? props.data.paragraph : "Loading"}</p>
                  {/* <HashLink to='#' className="btn btn-custom btn-lg page-scroll">
                    Get Started
                  </HashLink>{" "} */}
                  <Link
                    to="/login"
                    className="btn btn-custom btn-lg page-scroll"
                  >
                    Get Started
                  </Link>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}
