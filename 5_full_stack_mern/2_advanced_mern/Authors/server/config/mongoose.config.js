const mongoose = require("mongoose");
const dbName = "authors";

//need to install software, walkthrough on the platform. Test that you're connected by mongo in terminal
mongoose.connect("mongodb://localhost/" + dbName,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(()=>{
        console.log(`You are connected to the ${dbName} database!`);
    })
    .catch((err)=>{
        console.log(`There was an error connecting to the ${dbName} name :(`);
        console.log(err);
    })