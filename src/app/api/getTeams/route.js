// pages/api/teams.js
import prisma from "../../../../lib/prisma";
import { NextResponse, NextRequest } from 'next/server';

export async function GET(req, res) {
    try {
        const teams = await prisma.teams.findMany();
        return NextResponse.json({teams});
    } catch (error) {
        console.error(error);
        return new NextResponse(500).json({ error: 'Internal Server Error' });
    } 
}
