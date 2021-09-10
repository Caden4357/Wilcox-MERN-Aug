const Cartoon = require("../models/cartoon.model");


module.exports = {

    //get all documents from the "cartoons" collection 
    //and return an array of "cartoon" documents (js objects)

//get all documents from the "cartoons" collection and return an array of "cartoon" documents (js objects)
findAllCartoons: (req,res)=>{
    console.log("All the cartoons!");
    //use the model yto connect to the collection and find/return all documents
    Cartoon.find({}) //find all documents. don't filter anything out
    .then((allCartoons) => {
        res.json(allCartoons);
    })
    .catch((err)=>{
        console.log("Get all cartoons failed");
        res.status(400).json(err);
    })
},

findOneCartoon: (req, res)=>{
    //id will come to us from the param/url/route call    /api/cartoons/:id
    Cartoon.findOne({_id: req.params.id})            
    .then((oneCartoon)=>res.json(oneCartoon))
    .catch((err)=>{
        console.log("Find one  cartoon failed");
        res.status(400).json(err)  
    })
},

createNewCartoon: (req, res)=>{
    Cartoon.create(req.body)
    .then((newCartoon)=> res.json(newCartoon))
    .catch((err)=> {
        console.log("Create cartoon failed");
        res.status(400).json(err)
    })
},

updateCartoon: (req, res) => {
    Cartoon.findOneAndUpdate(
        //id will come to us from the param/url/route call    /api/cartoons/:id
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedCartoon => res.json(updatedCartoon))
        .catch((err)=>{
            console.log("Update cartoon failed");
            res.status(400).json(err);
        })
},

deleteCartoon: (req, res)=>{
    //id will come to us from the param/url/route call    /api/cartoons/:id
    Cartoon.deleteOne({_id: req.params.id})
    .then((deletedCartoon)=>res.json(deletedCartoon))
    .catch((err)=>{
        console.log("Delete Cartoon failed");
        res.status(400).json(err);
    })
}

}


//ALTERNATIVE WAY TO WRITE IN IN THE PLATFORM.
//THEY HAVE MODULE.EXPORT.KEY_NAME FOR EVERY SINGLE METHOD
//I THINK THIS WAY IS EASIER, BUT THEY ARE ULTIMATELY THE SAME, SO DO WHAT FEELS GOOD!