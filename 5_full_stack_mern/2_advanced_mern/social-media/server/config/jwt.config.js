//here were creating middleware like in our UserSchema we have that middleware that runs in the middle of something else being run to verify something 
// if a user is not logged in send an error response back 

const jwt = require('jsonwebtoken');

module.exports = {
    authenticate(req, res, next){
        //here we are verifing the user is logged in by checking our cookie we made earlier 
        jwt.verify(req.cookies.usertoken,
            process.env.JWT_SECRET,
            //once we compare the unhashed version of the cookie, run this callback function
            (err, payload) => {
                if(err){
                    res.status(401).json({verified: false})
                }
                else{
                    console.log('verified')
                    next();
                }
            })
    }
}