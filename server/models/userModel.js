const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, "Please provide a valid email"],
  },
  photoURL: String,
  password: {
    type: String,
    required: [true, "Please provide a password"],
    minlength: [8, "Password should contain at least 8 characters"],
    validate: [
      validator.isAlphanumeric,
      "Password should contain only numbers or letters",
    ],
    select: false,
  },
  passwordConfirm: {
    type: String,
    required: [true, "Please repeat password"],
    validate: {
      validator: function (el) {
        return el === this.password;
      },
      message: "Passwords are not the same",
    },
  },
  passwordChangedAt: Date,
  favorites: [{ type: mongoose.Schema.Types.ObjectId, ref: "Pet" }],

  pets: [{ type: mongoose.Schema.Types.ObjectId, ref: "Pet" }],

  shelter: {
    type: Boolean,
  },
  city: {
    type: String,
    lowercase: true,
    enum: [
      "berlin",
      "hamburg",
      "munich",
      "cologne",
      "frankfurt",
      "stuttgart",
      "düsseldorf",
      "leipzig",
      "dortmund",
      "essen",
      "bremen",
      "dresden",
      "hanover",
      "nuremberg",
      "duisburg",
      "bochum",
      "wuppertal",
      "bielefeld",
      "bonn",
    ],
  },
  location: {
    type: {
      type: String,
      default: "Point",
      enum: ["Point"],
    },
    coordinates: [Number],
    address: String,
    description: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

//Before sent to DB,if password hasn't been modified moves on to the next middleware, if it has, hashes the password

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  this.password = await bcrypt.hash(this.password, 12);

  this.passwordConfirm = undefined;
  next();
});

//compare user password to the one just typed

userSchema.methods.correctPassword = async function (
  candidatePassword,
  userPassword
) {
  return await bcrypt.compare(candidatePassword, userPassword);
};

//check if password has been changed after the toke was created

userSchema.methods.changedPasswordAfter = function (JWTTimestamp) {
  if (this.passwordChangedAt) {
    const changedTimestamp = parseInt(
      this.passwordChangedAt.getTime() / 1000,
      10
    );

    return JWTTimestamp < changedTimestamp; //if token was created before password changed (less milliseconds)
  }

  //false means when password hasn't been changed
  return false;
};

module.exports = mongoose.model("User", userSchema);
