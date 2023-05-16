const blogModel = require('../models/blogUsers')

exports.getUsers = async(req,res)=>{
    try {
        const allUsers = await blogModel.find({});
        return res.status(200).send({message: 'All Users Loaded', success:true,allUsers})
    } catch (error) {
        return res.status(500).send({message: 'Error Loading All Users', success:false,error})
    }
};

exports.signup = async(req,res)=>{
    try {
        const {username,email,pass} = req.body;
        if(!username){
            return res.status(500).send({message: 'Error in username', success:false})
        }
        const exUser = await blogModel.findOne({email})
        if(exUser)
        {
            return res.status(401).send({message: 'User already exists', success:false})
        }
        const user = new blogModel({username,email,pass})
        await user.save();
        return res.status(201).send({message: 'User Created', success:true,user})
    } catch (error) {
        return res.status(500).send({message: 'Error in registeration ', success:false,error})
    }
};

exports.login = async(req,res)=>{
    try {
        const {email,pass} = req.body;
        if(!email || !pass){
            return res.status(500).send({message: 'Complete all fields', success:false})
        }
        const userEmail = await blogModel.findOne({email})
        if(pass!==userEmail.pass)
        {
            return res.status(401).send({message: 'Incorrect Email or password', success:false})
        }
        
        return res.status(200).send({message: 'User Logged in', success:true,userEmail})
    } catch (error) {
        return res.status(500).send({message: 'Error Logging  In', success:false,error})
    }
};
