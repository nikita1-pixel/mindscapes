import prisma from "@/utils/connect";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    const categories = await prisma.category.findMany();
    return new NextResponse(JSON.stringify(categories), { status: 200 });
  } catch (err) {
    // THIS LOG IS KEY: Check your VS Code terminal for the red text!
    console.error("DATABASE_ERROR_DETAILS:", err);

    return new NextResponse(
      JSON.stringify({ message: "Internal Server Error", error: err.message }),
      { status: 500 }
    );
  }
};