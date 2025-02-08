import { asyncHandler } from "../utils/asyncHandler";
import { ApiError } from "../utils/ApiError";
import { ApiResponse } from "../utils/ApiResponse";
import User from "../models/user.model";

const completeUserProfile = asyncHandler(async (req, res) => {
  const { username, fullName, address, gender, profilePhoto, driversLicense, phoneNumber } = req.body;
  const clerkId = req.userId; // Get Clerk ID from middleware

  let user = await User.findOne({ clerkId });

  if(user){
    return res.status(400).json(new ApiError(400, "User profile already exists."));
  }

  const newUser = new User({clerkId,username, fullName, address, gender, profilePhoto, driversLicense, phoneNumber });
  await newUser.save();

  res.status(201).json(new ApiResponse(201, "User profile created successfully."));
});

export { completeUserProfile };
