import { v2 as cloudinary } from 'cloudinary'
import fs from "fs"
    // Configuration
    cloudinary.config({ 
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
        api_key: process.env.CLOUDINARY_API_KEY, 
        api_secret: process.env.CLOUDINARY_API_SECRET
    });

    const uploadOnCloudinary = async (localFilePath) => {
        try {
            if(!localFilePath) return null
            //return the file on cloudinary 
           const response=  await cloudinary.uploader.upload(localFilePath, {
                resource_type: "auto"
            })
            //file  has been uploded sucessfully
            console.log("file is uploded on cloudinary", response.url);
            return response
        } catch (error) {
            fs.unlinkSync(localFilePath) // remove the locally saved temporary file as th uploded operation got failed
            returnnull;
        }
    }

    export {uploadOnCloudinary}

    