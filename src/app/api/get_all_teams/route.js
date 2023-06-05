


import prisma from "../../../../lib/prisma"
import { NextResponse, NextRequest } from 'next/server';
import { sql } from "@vercel/postgres";


export async function GET(req, res){

    // insert into prisma  =>  {where:{gender: "m"}}
    try {
      const teams = await prisma.Teams.findMany();
      return NextResponse.json(teams);;
    } catch (error) {
      console.error(error);
      return NextResponse.json("error");;
    }
      
}