import React, { Component } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { registerUser } from "../../actions/authActions";
import TextFieldGroup from "../common/TextFieldGroup";

class Register extends Component {
  constructor() {
    super();
    this.state = {
      // name
      name: "",
      // email
      email: "",
      //password
      password: "",
      //password2
      password2: "",
      //phone
      phone: "",
      //address
      address: "",
      //city
      city: "",
      //country
      country: "",
 
      //image
      image: "",
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    //newUser
    const newUser = {
        name: this.state.name,
        email: this.state.email,
        password: this.state.password,
        password2: this.state.password2,
        phone: this.state.phone,
        address: this.state.address,
        city: this.state.city,
        country: this.state.country,
        image: this.state.image
    };   

    this.props.registerUser(newUser, this.props.history);
    };

  render() {
    const { errors } = this.state;
      
    //Customer Form
    const userRegisterForm = (
        <div className="register">
            <div className="container">
              <div className="row">
                <div className="col-md-8 m-auto">
                  <h1 className="display-4 text-center">Sign Up</h1>
                  <p className="lead text-center">Create Account</p>
                  <form noValidate onSubmit={this.onSubmit}>
                    <TextFieldGroup
                      placeholder="Name"
                      name="name"
                      value={this.state.name}
                      onChange={this.onChange}
                      error={errors.name}
                    />
                    <TextFieldGroup
                      placeholder="Email"
                      name="email"
                      type="email"
                      value={this.state.email}
                      onChange={this.onChange}
                      error={errors.email}
                      info="Google Email uses a Gravatar email"
                    />
                    <TextFieldGroup
                      placeholder="Password"
                      name="password"
                      type="password"
                      value={this.state.password}
                      onChange={this.onChange}
                      error={errors.password}
                    />
                    <TextFieldGroup
                      placeholder="Confirm Password"
                      name="password2"
                      type="password"
                      value={this.state.password2}
                      onChange={this.onChange}
                      error={errors.password2}
                    />
                    <TextFieldGroup
                      placeholder="Telephone"
                      name="phone"
                      value={this.state.phone}
                      onChange={this.onChange}
                      error={errors.phone}
                    />
                    <TextFieldGroup
                      placeholder="Address"
                      name="address"
                      value={this.state.address}
                      onChange={this.onChange}
                      error={errors.address}
                    />
                    <TextFieldGroup
                      placeholder="City"
                      name="city"
                      value={this.state.city}
                      onChange={this.onChange}
                      error={errors.city}
                    />
                    <TextFieldGroup
                      placeholder="User Country"
                      name="country" 
                      value={this.state.country}
                      onChange={this.onChange}
                      error={errors.country}
                    />
                    <TextFieldGroup
                      placeholder="Avatar"
                      name="image" 
                      value={this.state.image}
                      onChange={this.onChange}
                      error={errors.image}
                    />
                    <input type="submit" className="btn btn-info btn-block mt-4" />
                  </form>
                </div>
              </div>
            </div>
          </div>
      );
  
    
    return (
     <div>  { 
         userRegisterForm
     } </div>
    );
  }
}

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  selectUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { registerUser }
)(withRouter(Register));
