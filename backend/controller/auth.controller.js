const Users = require('../model/User');



exports.postUser = async (req,res) => {
    try{
        const email = req.body.email;
        const firstName = req.body.firstName;
        const lastName = req.body.lastName;

        const user = await Users.create({
            email : email,
            firstName : firstName,
            lastName : lastName
        });

        res.status(200).json({user});
    }
    catch(err){
        console.log(err);
        res.status(500).json({error : err.message});
    }
};

exports.validators = {
    validateUserInfo:{

    }
}