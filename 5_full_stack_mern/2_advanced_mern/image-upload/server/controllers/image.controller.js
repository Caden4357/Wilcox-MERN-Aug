const Image = require('../models/image.model');

module.exports = { 
    add_photo: (req,res) => {
        if (!req.files) {
            return res.status(500).send({ msg: "file is not found" })
        }
            // accessing the file
        const img = req.files.file;
        const myFile = req.files.file;
        console.log(req.files);
        console.log("34-myFile", myFile);
        console.log(`THIS IS 39 ${__dirname}/images/${myFile.name}`);
        img.mv("./images/" + img.name, function
                    (err) {
                        if (err) {
                            console.log(err)
                            return res.status(500).send({ msg: "Error occured" });
                        }
                        // returing the response with file path and name
                        // res.send({name: myFile.name, path: `/${myFile.name}`});
                        else{
                            res.send({
                                status: true,
                                message: 'File is uploaded',
                                data: {
                                    name: img.name,
                                    mimetype: img.mimetype,
                                    size: img.size
                                }
                            });
                            const image = new Image(req.body);
                            image.img = {
                                name: img.name,
                                mimetype: img.mimetype,
                                size: img.size
                            }
                            Image.create(image)
                        }
                    })
                }
}