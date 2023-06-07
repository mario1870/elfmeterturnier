

import prisma from "../../../../lib/prisma"
import { NextResponse, NextRequest } from 'next/server';

export async function GET() {
    try {
      const allTeams = async () => {
        const teams = await prisma.Teams.findMany();
      
        return teams; // Gibt true zurück, wenn ein Benutzer mit dem angegebenen Benutzernamen gefunden wurde, ansonsten false.
    };

    const teams = await allTeams();

      return NextResponse.json(teams);;
    } catch (error) {
      console.error(error);
      return NextResponse.json("error");;
    }
      
}