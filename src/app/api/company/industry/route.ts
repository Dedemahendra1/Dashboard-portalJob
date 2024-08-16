import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
    const industries = await prisma.industry.findMany()

    return NextResponse.json(industries)
}