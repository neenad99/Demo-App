const Users = require('../model/User');


exports.getAllUsers = async (req,res) => {
    try{
        const users = await Users.find();
        res.status(200).json({users});
    }
    catch(err){
        console.log(err);
        res.status(500).json({error : err.message});
    }
};
