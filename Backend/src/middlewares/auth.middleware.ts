import { Request, Response, NextFunction } from "express";
import { clerkClient, verifyToken } from "@clerk/clerk-sdk-node";
import { ApiError } from "../utils/ApiError";

interface AuthenticatedRequest extends Request {
  userId?: string;
  headers: {
    authorization?: string;
  };
}

const clerkAuth = async (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      throw new ApiError(401, "Unauthorized: Missing Clerk token");
    }

    const token = authHeader.split(" ")[1];

    // Verify the token using Clerk SDK
    const { sub: userId } = await verifyToken(token, {});

    if (!userId) {
      throw new ApiError(401, "Unauthorized: Invalid Clerk token");
    }

    req.userId = userId;
    next();
  } catch (error) {
    return res.status(401).json({ message: "Unauthorized: Invalid Clerk token" });
  }
};

export default clerkAuth;
