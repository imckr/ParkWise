import mongoose, { Schema, Document } from "mongoose";

interface Vehicle {
  type: string;
  number: string;
  rc: string;
}

interface User extends Document {
  clerkId: string; // Clerk User ID
  username: string;
  fullName: string;
  address: string;
  gender: "Male" | "Female" | "Other";
  profilePhoto: string;
  driversLicense: string;
  phoneNumber: string;
  vehicles: Vehicle[];
}

const userSchema = new Schema<User>({
  clerkId: {
    type: String,
    required: true,
    unique: true,
  },
  username: { type: String, required: true, unique: true },
  fullName: { type: String, required: true },
  address: { type: String, required: true },
  gender: { type: String, enum: ["Male", "Female", "Other"], required: true },
  profilePhoto: { type: String, required: true },
  driversLicense: { type: String, required: true },
  phoneNumber: { type: String, required: true, unique: true },
  vehicles: [
    {
      type: { type: String, required: true },
      number: { type: String, required: true },
      rc: { type: String, required: true },
    },
  ],
});

const User = mongoose.model<User>("User", userSchema);

export default User;
