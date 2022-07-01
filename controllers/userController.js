const userModel = require('../models/userModel');
const aws = require('../aws/s3Upload');

const createUser = async (req,res)=> {

    try {
        let requestBody = req.body;
        let files = req.files;

        let {Name, Email, Phone, Address, WorkExperience, Education, Certifications, Skills, Profile} = requestBody;

        if(!Name){
            return res.status(400).json({status:false, msg: `Name is mandatory!`});  
        }
          
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(Email)) {
            return res.status(400).json({ status: false, msg: `Invalid EMail Address!` });
        }
    
        if (!/^[6-9]\d{9}$/.test(Phone)) {
            return res.status(400).json({ status: false, msg: `Invalid Phone Number!` });
        }

        if(!Address){
            return res.status(400).json({status:false, msg: `Address is mandatory!`});  
        }

        if(!files.length > 0){
            return res.status(400).json({ status: false, msg: `Profile hoto is mandatory!` });
        }

        Profile = await aws.uploadFile(files[0]);

        let resumeDetails = {Name, Email, Phone, Address, WorkExperience, Education, Certifications, Skills, Profile};  

        const userData = await userModel.create(resumeDetails);
        res.status(201).json({status:true, data:userData});
        
    } catch (error) {
        res.status(500).json({status:false, error: error.message});
        
    }
}

module.exports = {createUser};
