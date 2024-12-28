 import {v2 as cloudinary} from 'cloudinary';
 import songModel from '../models/songModel.js'

// const addSong = async(req,res) => {
//     try{
//         const name = req.body.name;
//         const desc = req.body.desc;
//         const album = req.body.album;
//         const audioFile = req.files.audio[0];
//         const imageFile = req.files.image[0];
//         const audioUpload = await cloudinary.uploader.upload(audioFile.path, {resource_type:"video"});
//         const imageUpload = await cloudinary.uploader.upload(imageFile.path, {resource_type:"image"});

//         console.log(name,desc,album,imageUpload,audioUpload)

//     }
//     catch(error){
//         console.error(error);
//         res.status(500).json({ error: 'Internal Server Error' });
//     }

// }


// const listSong = async (req,res) => {
//     res.send("List of songs");
// }


//  export default {addSong,listSong}




export const addSong = async (req, res) => {
    try {
        const name = req.body.name;
        const desc = req.body.desc;
        const album = req.body.album;
        const audioFile = req.files.audio[0];
        const imageFile = req.files.image[0];
        const audioUpload = await cloudinary.uploader.upload(audioFile.path, {resource_type: "video" });
        const imageUpload = await cloudinary.uploader.upload(imageFile.path, {resource_type: "image" });
        const duration = `${Math.floor(audioUpload.duration/60)}:${Math.floor(audioUpload.duration%60)}`;

        const songData = await songModel.create({
            name,
            desc,
            album,
            image:imageUpload.secure_url,
            file:audioUpload.secure_url,
            duration,
        });

        console.log(name, desc, album, imageUpload, audioUpload);
        console.log('the song details which are added ')
        console.log(songData);

        res.status(200).json({
            success:true,
            message:"song added successfully",
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

export const listSong = async (req, res) => {
    // Define your logic for listing songs here.
    try{
        const allSongs = await songModel.find({});
        res.status(200).json({
            success:true,
            data:allSongs,
        });
    }
    catch(error){
        res.status(402).json({
            success:false,
            message:error.message,
        });
    }
};

export const removeSong = async (req,res) => {
    try{
        await songModel.findByIdAndDelete(req.body.id);
        return res.status(200).json({
            success:true,
            message:"song removed",
        });
    }
    catch(error){
        res.status(402).json({
            success:false,
            message:error.message,
        });
    }
}




// export const addSong = async (req, res) => {
//     try {
//         const name = req.body.name;
//         const desc = req.body.desc;
//         const album = req.body.album;

//         // Check if files exist before accessing
//         const audioFile = req.files?.audio?.[0];
//         const imageFile = req.files?.image?.[0];

//         if (!audioFile || !imageFile) {
//             return res.status(400).json({ message: "Audio and image files are required" });
//         }

//         const audioUpload = await cloudinary.uploader.upload(audioFile.path, { resource_type: "video" });
//         const imageUpload = await cloudinary.uploader.upload(imageFile.path, { resource_type: "image" });

//         console.log(name, desc, album, imageUpload, audioUpload);
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ message: "Internal server error" });
//     }
// };

// export const listSong = async (req, res) => {
//     // Define your logic for listing songs here.
//     res.send("List of songs");
// };
