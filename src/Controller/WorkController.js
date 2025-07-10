const multer = require("multer");
const WorkModel = require("./model/WorkModel");
const cloudinaryUtil = require("./Utils/CloudinaryUtil");

// Use memory storage for handling file buffers for Cloudinary
const storage = multer.memoryStorage();
const upload = multer({ storage });

// Cloudinary upload function
const uploadFileToCloudinary = (file) => {
  return new Promise((resolve, reject) => {
    cloudinaryUtil.uploadFileToCloudinary(file.buffer, file.originalname)
      .then(resolve)
      .catch(reject);
  });
};

const additemwithfile = (req, res) => {
  const uploadMultiple = upload.array("images", 10); // Field name must be "image"

  uploadMultiple(req, res, async (err) => {
    if (err) {
      console.error("Multer error:", err);
      return res.status(500).json({ message: "File upload failed", error: err.message });
    }

    try {
      const { work } = req.body;
      const files = req.files;

      if (!work || !files || files.length === 0) {
        return res.status(400).json({ message: "Work and images are required." });
      }

      const cloudinaryResults = await Promise.all(
        files.map(file => uploadFileToCloudinary(file))
      );

      const imageURLs = cloudinaryResults.map(result => result.secure_url);

      const savedItem = await WorkModel.create({
        work,
        imageURL: imageURLs,
      });

      return res.status(200).json({
        message: "Item saved successfully",
        data: savedItem,
      });
    } catch (error) {
      console.error("Error saving item:", error);
      return res.status(500).json({ message: error.message });
    }
  });
};
const deleteWorkById = async (req, res) => {
    const { id } = req.params;
  
    try {
      const deletedDoc = await WorkModel.findByIdAndDelete(id);
  
      if (!deletedDoc) {
        return res.status(404).json({ message: "Work item not found" });
      }
  
      return res.status(200).json({
        message: "Work item deleted successfully",
        data: deletedDoc,
      });
    } catch (error) {
      console.error("Error deleting work:", error);
      return res.status(500).json({ message: error.message });
    }
  };
  const getWorkById = async (req, res) => {
    const { id } = req.params;
  
    try {
      const workItem = await WorkModel.findById(id);
  
      if (!workItem) {
        return res.status(404).json({ message: "Work item not found" });
      }
  
      res.status(200).json({ message: "Success", data: workItem });
    } catch (error) {
      console.error("Error fetching work item by ID:", error);
      res.status(500).json({ message: error.message });
    }
  };  
const allitems =  async(req,res)=>{
    try{
        const gitem = await WorkModel.find()
        res.status(200).json({
            message:"items fetched",
            data:gitem
        })
        console.log(res.data);
        

    }catch{
        res.status(404).json({
            message:"error found"
        })
    }
}

module.exports = { additemwithfile,allitems,deleteWorkById,getWorkById};
