const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const user = new Schema({
    field: {
        name: String,
        email: String,
        password: String,
        telephone: String,
        city: String,
        country: String
    },
});

const User = mongoose.model("User", user);

module.exports = User;
