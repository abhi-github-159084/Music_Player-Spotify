import { v2 as cloudinary } from 'cloudinary';
import albumModel from '../models/albumModel.js';

export const addAlbum = async (req, res) => {
    try {
        const { name, desc, bgColor } = req.body;
        const imageFile = req.file;

        // Check if the image file is provided
        if (!imageFile) {
            return res.status(400).json({
                success: false,
                message: "Image file is required",
            });
        }

        // Upload image to Cloudinary
        const imageUpload = await cloudinary.uploader.upload(imageFile.path, {
            resource_type: "image",
        });

        // Construct album data
        const albumData = {
            name,
            desc,
            bgColor,
            image: imageUpload.secure_url,
        };

        // Save to the database
        const album = new albumModel(albumData);
        await album.save();

        return res.status(200).json({
            success: true,
            message: "Album is added",
            album,
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

// Controller to list albums
export const listAlbum = async (req, res) => {
    try {
        const albums = await albumModel.find();
        res.status(200).json({
            success: true,
            albums,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

// Controller to remove an album by ID
export const removeAlbum = async (req, res) => {
    try {
        const album = await albumModel.findByIdAndDelete(req.body.id);
        if (!album) {
            return res.status(404).json({
                success: false,
                message: "Album not found",
            });
        }
        res.status(200).json({
            success: true,
            message: "Album removed successfully",
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};
