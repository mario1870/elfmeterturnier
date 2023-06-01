


import prisma from "../../../../lib/prisma"
import { NextResponse, NextRequest } from 'next/server';

export async function GET(req, res){

    // insert into prisma
    try {
      const teams = await prisma.Teams.findMany();
      return NextResponse.json(teams);;
    } catch (error) {
      console.error(error);
      return NextResponse.json("error");;
    }
      
}