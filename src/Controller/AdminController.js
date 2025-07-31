const adminModel = require("./model/AdninModel")
const bcrypt = require("bcrypt")




const admin = async(req,res)=>{
    const saveadmin = await adminModel.create(req.body)
    res.status(201).json({
        data:saveadmin,
        message:"admin added sucessfully"
    })
}


const logina = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "Email and password required" });
    }

    const admin = await adminModel.findOne({ email });

    if (!admin || admin.password !== password) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    res.status(200).json({
      data: admin,
      message: "Login successful",
    });

  } catch (error) {
    res.status(500).json({
      message: "Login failed",
      error: error.message,
    });
  }
};


module.exports={
    admin,logina
}