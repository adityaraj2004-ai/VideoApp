import mongoose from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2"


const videoSchema = new mongoose.Schema({
    videoFile: {
        type: String, // using Cloudinary URL
        required: true,
    },
    thumbnail: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },

    description: {
        type: String,
        required: true,
    },
    duration: {
        type: Number, //Using Cloudinary
        required: true,
    },
    views: {
        type: Number,
        default: 0,
    },
    isPublished: {
        type: Boolean, // it is a boolean flag which tells whether the video is publically available.
        default: true,
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    }



}, { timestamps: true })



videoSchema.plugin(mongooseAggregatePaginate)
const Video = mongoose.model("Video", videoSchema)