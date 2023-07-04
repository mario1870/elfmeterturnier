"use client"
import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
export default function Infos() {
  const [showInfos, setShowInfos] = useState(true);

  const closeInfos = () => {
    setShowInfos(false);
  };

  if (!showInfos) {
    return null; // Falls showInfos auf false gesetzt wurde, wird null zurückgegeben und das Info-Feld wird nicht gerendert
  }

  return (
    <div className="absolute bg-blue-200 w-80 md:w-96 top-20 h-[32.4rem] md:h-[33rem] mt-28 z-5 flex flex-col rounded-b-3xl mx-4 md:mx-8 z-30">
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.1 }} className='px-4 py-3 mt-6'>⚽ Datum: <b>04.08.23</b></motion.p>
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.2 }} className='px-4 py-3'>⚽ Ort: <b>Sportplatz in Melchingen</b></motion.p>
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.3 }} className='px-4 py-3'>⚽ Turnierstart ist um <b>18:30 Uhr</b></motion.p>
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.4 }} className='px-4 py-3'>⚽ Die Anmeldung ist nach Abschluss des Zahlungsvorgangs und dem Erhalt der <b>Bestätigungsmail </b>gültig</motion.p>
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.5 }} className='px-4 py-3'>⚽ Die Spielpläne erhaltet ihr vorab per Mail oder unter tv-melchingen.com</motion.p>
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.6 }} className='px-4 py-3'>⚽ Bei Fragen oder Problemen: <Link href="mailto:marioraach.tvm@gmail.com">marioraach.tvm@gmail.com</Link></motion.p>

      <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.8 }} className="w-full flex justify-center absolute bottom-8">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
          onClick={closeInfos}
        >
          Verstanden
        </button>
      </motion.span>
    </div>
  );
}
