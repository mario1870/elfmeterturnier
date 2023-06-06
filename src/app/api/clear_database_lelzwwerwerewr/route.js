

import prisma from "../../../../lib/prisma";
import { NextResponse, NextRequest } from 'next/server';

export async function GET(req, res) {
  try {
    // Alle Daten in der Tabelle "Teams" löschen
    await prisma.teams.deleteMany();

    return NextResponse.json({ message: 'Alle Daten gelöscht' });
  } catch (error) {
    return NextResponse.json({ error: 'Fehler beim Löschen der Daten' });
  }
}
