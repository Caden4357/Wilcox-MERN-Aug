const mongoose = require("mongoose");

const CartoonSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "A cartoon name is required!"],
        minLength: [5, "A cartoon name must be at least five characters long!"]
    },
    image: {
        type: String,
        required: [true, "Image URL required"]
    },
    // enumeration will allow us to limit the answers to specific strings
    // test the enum w a previous assignment
    genre: {
        type: String,
        required: [true, "Cartoon genre required!!!"],
        enum: [
            "Anime",
            "Manga",
            "Comedy",
            "Drama",
            "Action",
            "Children",
            "Mystery",
            "Horror",
            "Comic",
            "Parody"
        ]
    },
    era: {
        type: Number,
        required: [true, "A cartoon era is required!"],
        // enumeration will allow us to limit the answers to specific strings
        // test the enum w a previous assignment
        enum: [
            1920,
            1930,
            1940,
            1950,
            1960,
            1970,
            1980,
            1990,
            2000,
            2010,
            2020
        ]
    },
    //this is optional because no required 
    rating: {
        type: Number,
        min: [0, "rating must be between 0-10"], 
        max: [10, "rating must be between 0-10"]
    },
    suitableForKids:{
        type: Boolean
    } 


}, {timestamps:true})
    //timestamps automatically create "createdAt" and"updatedAt" date and time info for each document
    //everytime a doc is updated, it will change the "updatedAt"

//Model is a combination of the 1. collectionName and 2.Schema
//Name will be collection name that's held in the db
//schema is going to be the singular of what will show as plural in the db
    const Cartoon = mongoose.model("Cartoon", CartoonSchema);
//This returns a cartoon model with the collection name and that schema

module.exports = Cartoon;

