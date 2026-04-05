
import mongoose from "mongoose"
import jwt from "jsonwebtoken"

const userSchema = new mongoose.Schema({

    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        index: true,
    },

    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
    },

    fullName: {
        type: String,
        required: true,
        trim: true,
        index: true,
    },

    avatar: {
        type: String, // using cloudinary URL
        required: true,

    },
    coverImage: {
        type: String, // using cloudinary URL 
    },
    watchHistory: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Video"
        }
    ],

    password: {
        type: String,
        required: [true, "Password is required"],
    },

    refreshToken: {
        type: String,
    }


}, { timestamps: true })


userSchema.pre("save", async function (next) {
    // if we dont write any time any field int he data gets updated and whole models gets save again it will again and again hash the password.
    if (!this.isModified("password")) return next();
    this.password = await bcrypt.hash(this.password, 10)
    next();
})

/*
 password is the plain text password provided by the user during login.
 this.password is the hashed password stored in the database for that user.
*/

// custom methods on userSchema 
userSchema.methods.isPasswordCorrect = async function (password) {
    return await bcrypt.compare(password, this.password)
}

userSchema.methods.generateAccessToken = async function () {
    return jwt.sign(
        {
            // following we are going to write our payload we can only write id in it or alse we can have as many fields in it as possible

            _id: this._id,
            email: this.email,
            username: this.email,
            fullName: this.fullName,
        }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: process.env.ACCESS_TOKEN_EXPIRY }
    )
}

userSchema.methods.generateRefreshToken = async function () {
    return jwt.sign({
        //  refresh token gets refreshed again and again and is stored in DB so we dont fill it with much details
        _id: this._id,
    }, process.env.REFRESH_TOKEN_SECRET, { expiresIn: process.env.REFRESH_TOKEN_EXPIRY }
    )
}

export const User = mongoose.model("User", userSchema)

