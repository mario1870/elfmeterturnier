"use client"
import { useState } from 'react';
import Link from 'next/link';

export default function Infos() {
  const [showInfos, setShowInfos] = useState(true);

  const closeInfos = () => {
    setShowInfos(false);
  };

  if (!showInfos) {
    return null; // Falls showInfos auf false gesetzt wurde, wird null zurückgegeben und das Info-Feld wird nicht gerendert
  }

  return (
    <div className="absolute bg-green-500 w-80 md:w-96 top-20 h-[41.4rem] md:h-[42rem] z-5 flex flex-col rounded-3xl">
      <h1 className='w-full text-center pt-8 text-2xl font-bold'>Infos: </h1>

      <p className='px-4 py-4 mt-4'>⚽ Das Turnier findet am <b>04.08.23</b> auf dem <b>Sportplatz in Melchingen</b> statt</p>
      <p className='px-4 py-4'>⚽ Turnierstart ist um <b>18:30 Uhr</b></p>
      <p className='px-4 py-4'>⚽ <b>Nach Abschluss des Bezahlvorgangs erhalten Sie eine Bestätigung per Mail. <br/> Durch diese Bestätigug ist ihre Anmeldung gültig!</b></p>
      <p className='px-4 py-4'>⚽ Die Spielpläne erhaltet ihr am Turnierabend bei der Turnierleitung</p>
      <p className='px-4 py-4'>⚽ Bei Fragen oder Problemen: <Link href="mailto:marioraach.tvm@gmail.com">marioraach.tvm@gmail.com</Link></p>

      <span className="w-full flex justify-center absolute bottom-8">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
          onClick={closeInfos}
        >
          Verstanden
        </button>
      </span>
    </div>
  );
}
