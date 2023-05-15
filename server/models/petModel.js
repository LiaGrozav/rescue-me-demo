const mongoose = require("mongoose");

// Define a schema for the pet model
const petSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      minlenth: [2, "Name must have more than one character"],
      maxlenth: [20, "Name must have less than one character"],
    },
    type: {
      type: String,
      required: true,
    },
    breed: {
      type: String,
    },
    age: {
      type: Number,
      required: true,
      // enum: ["puppy", "adult", "senior"],
    },
    size: {
      type: String,
      required: true,
      enum: ["small", "medium", "big"],
    },
    gender: {
      type: String,
      required: true,
      enum: ["male", "female"],
    },
    sterilized: {
      type: String,
      required: true,
      enum: ["yes", "no"],
    },
    vaccinated: {
      type: String,
      required: true,
      enum: ["yes", "no"],
    },
    color: {
      type: String,
      required: true,
    },
    goodWith: {
      type: String,
      required: true,
      enum: ["kids", "dogs", "cats"],
    },
    city: {
      type: String,
      required: true,
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
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      //required: true,
    },

    photoURL: String,
    location: {
      type: {
        type: String,
        default: "Point",
        enum: ["Point"],
      },
      coordinates: [Number],
      address: String,
      description: String,
      //required: true,
    },
    description: {
      type: String,
      trim: true,
    },
    picture: {
      type: String,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      select: true,
    },
    updatedAt: {
      type: Date,
      default: Date.now,
      select: false, //info just for us , set to true in case needed
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
    toObject: {
      virtuals: true,
    },
  }
);

petSchema.index({ location: "2dsphere" });

// Create a model for the pet schema
const Pet = mongoose.model("Pet", petSchema);

module.exports = Pet;
