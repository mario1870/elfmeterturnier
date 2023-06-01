

import prisma from "../../../../lib/prisma"
import { NextResponse, NextRequest } from 'next/server';

export async function POST(req, res){

    const teamname_raw = await req.json();
    const teamname = await teamname_raw.teamname

    console.log(teamname)

    const usernameExists = async (teamname) => {
        const user = await prisma.Teams.findUnique({
            where: {
                teamname: teamname,
            },
        });
      
        return !!user; // Gibt true zurück, wenn ein Benutzer mit dem angegebenen Benutzernamen gefunden wurde, ansonsten false.
    };

    const exists = await usernameExists(teamname);

    console.log(exists)

    return NextResponse.json({ exists });
}
