const mongoose = require("mongoose");
const dbName = "image-upload";

mongoose.connect("mongodb://localhost/" + dbName,{
    //allows us to use the most updated way with Mongo (no depreciation)
    useNewUrlParser: true,
    //also allows us to use the lastest
    useUnifiedTopology: true
})
    .then(()=>{
        console.log(`You are connected to the ${dbName} database!`);
    })
    .catch((err)=>{
        console.log(`There was an error connecting to the ${dbName} name :(`);
        console.log(err);
    })