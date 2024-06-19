import { connectDB } from "@/app/lib/mongoose";
import User from "@/app/models/User";
import bcrypt from "bcrypt";
import { NextResponse } from "next/server";

export const POST = async (request) => {
  if (request.method === "POST") {
    try {
      const { username, password, email, role = "user" } = await request.json();
      await connectDB();

      if (!username || !password) {
        return new NextResponse("Please provide a username and password", { status: 400 });
      }

      // Check if the user already exists
      const existUser = await User.findOne({ username });
      if (existUser) {
        return new NextResponse("User already exists", { status: 400 });
      }

      // Hashing password
      const hashedPassword = await bcrypt.hash(password, 10);

      // Creating a new User
      await User.create({ username, email, password: hashedPassword, role });

      return new NextResponse("User is created successfully", { status: 200 });
    } catch (err) {
      console.error("Error creating user:", err);
      return new NextResponse(err.message, { status: 500 });
    }
  } else {
    return new NextResponse("Method not allowed", { status: 405 });
  }
};
