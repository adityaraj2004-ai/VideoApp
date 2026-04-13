import { User } from "../models/user.models";
import { ApiError } from "../utils/ApiError";
import { asyncHandler } from "../utils/asyncHandler";
import jwt from "jsonwebtoken";

export const verifyJWT = asyncHandler(async (req, res, next) => {
    // Get token from cookies OR Authorization header
    const token =
        req.cookies?.accessToken ||
        req.header("Authorization")?.replace("Bearer ", "");

    // If no token → unauthorized
    if (!token) {
        throw new ApiError(401, "Unauthorized request");
    }

    // Verify token
    let decoded;
    try {
        decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    } catch (error) {
        throw new ApiError(401, "Invalid or expired access token");
    }

    // Find user from decoded token
    const user = await User.findById(decoded?._id)
        .select("-password -refreshToken");

    // If user not found → invalid token
    if (!user) {
        throw new ApiError(401, "Invalid access token");
    }

    // Attach user to request
    req.user = user;

    // Move to next middleware
    next();
});