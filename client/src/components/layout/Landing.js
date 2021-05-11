import React, { Component } from "react";
import { Link } from "react-router-dom";

class Landing extends Component {

  render() {
    return (
      <React.Fragment>
        <div className="home">
          <div className="landing">
            <div className="dark-overlay landing-inner text-light">
              <div className="container">
                <div className="row">
                  {/**   <div className="col-md-12 text-center">
                <h1 className="display-3 mb-4">UNICEF AUTH</h1>
              </div>
              */}
                </div>

                <div id="showcase">
                  <div className="container">
                    <div className="row">
                      <div className="col-md-6 col-sm-6">
                        <div className="showcase-left">
                          {/* <img
                            src={require("../../img/b.jfif")}
                             alt="lal"
                          /> */}
                           {/* <SearchBar/> */}
                        </div>
                      </div>

                      <div className="col-md-6 col-sm-6">
                        <div className="showcase-right">
                          <h1> Hands-free Lorem Ipsum is simply dummy</h1>
                          <p className="lead">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                          </p>
                        </div>
                        <br />
                        <hr />
                        <Link
                          to="/register"
                          className="btn btn-lg btn-info mr-2"
                        >
                          Sign Up
                        </Link>
                        <Link to="/login" className="btn btn-lg btn-light">
                          Login
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </div>
          </div>
       </React.Fragment>
    );
  }
}



export default Landing;
