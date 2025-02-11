import { Request, Response } from "express";
import { asyncHandler } from "../utils/asyncHandler";
import { ApiError } from "../utils/ApiError";
import { ApiResponse } from "../utils/ApiResponse";
import User from "../models/user.model";

const profileChange = asyncHandler(async (req, res) => {
    const clerkId = req.userId; 
    const updateData = req.body;
  
    const user = await User.findOneAndUpdate({ clerkId }, updateData, { new: true });
  
    if (!user) {
      throw new ApiError(404, "User not found.");
    }
  
    res.status(200).json(new ApiResponse(200, "User profile updated successfully."));
  });
  
  export { profileChange };
  
