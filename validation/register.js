//all rules for users resgistration
const Validator = require('validator');
const isEmpty  = require('./is-empty');

module.exports = function validateRegisterInput(data) {
    let errors = {};

	//user data
	data.name = !isEmpty(data.name) ? data.name: '';
	data.email = !isEmpty(data.email) ? data.email: '';
	data.password = !isEmpty(data.password) ? data.password: '';
	data.password2 = !isEmpty(data.password2) ? data.password2: '';
	data.phone = !isEmpty(data.phone) ? data.phone: '';
	data.city = !isEmpty(data.city) ? data.city: '';
	data.country = !isEmpty(data.country) ? data.country: '';
	data.address = !isEmpty(data.address) ? data.address: '';

	if(!Validator.isLength(data.name, { min: 2, max: 30 })) {
		errors.name = 'Name must be between 2 and 30 characters';
	}
	if(Validator.isEmpty(data.name)) {
		errors.name = "Name field is required";
	}
	if(Validator.isEmpty(data.email)) {
		errors.email = "Email field is required";
	}
	if(!Validator.isEmail(data.email)) {
		errors.email = "Email is invalid";
	}
	if(Validator.isEmpty(data.password)) {
		errors.password = "Password field is required";
	}
	if(!Validator.isLength(data.password, {min: 6, max:30 })) {
		errors.password = "Password must be at least 6 characters";
	}
	if(Validator.isEmpty(data.password2)) {
		errors.password2 = "Confirm Password field is required";
	}
	if(!Validator.equals(data.password, data.password2)) {
		errors.password2 = "Passwords must match";
	}
	if(Validator.isEmpty(data.phone)) {
		errors.phone = "Telephone field is required";
	}
	if(Validator.isEmpty(data.city)) {
		errors.city = "City field is required";
	}
	if(Validator.isEmpty(data.country)) {
		errors.country = "Country field is required";
	}

	return {
		errors,
		isValid: isEmpty(errors)
	}
}