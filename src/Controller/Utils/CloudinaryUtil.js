const cloudinary = require("cloudinary").v2
const streamifier = require("streamifier");


const uploadFileToCloudinary = (buffer, filename) => {
    cloudinary.config({
        cloud_name:"dgontgt2x",
        api_key:"661187482219524",
        api_secret:"A1wEKAMXz43UKY1_A5n0xzPS8n8"
    })
    
        return new Promise((resolve, reject) => {
          const stream = cloudinary.uploader.upload_stream(
            { resource_type: "image", public_id: filename.split('.')[0] },
            (error, result) => {
              if (error) reject(error);
              else resolve(result);
            }
          );
          streamifier.createReadStream(buffer).pipe(stream);
        });
      };

module.exports={uploadFileToCloudinary}