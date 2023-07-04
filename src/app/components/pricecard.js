

"use client"
import axios from "axios"
import Link from "next/link"
import {AiFillCheckCircle, AiFillCloseCircle} from 'react-icons/ai'
import { useState, useEffect } from "react"
import Image from "next/image"
import { motion, useAnimation } from 'framer-motion';
import Form from "./form"
import Infos from "./infos"
import Homepage_link from "./Homepage_link"

const PricingCard = () => {

  const [teams, setTeams] = useState([]);
  const [gender, setGender] = useState("man")
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTeams = async () => {
      try {
        const response = await axios.get(`/api/getTeams`);
        setTeams(response.data);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false); // Setze den Ladezustand auf 'false', um den Fehlerzustand zu signalisieren
      }
    };

    fetchTeams();
  }, [gender]);

  const handleInputGenderMan = (event) => {setGender("man");};
  const handleInputGenderWoman = (event) => {setGender("woman");};

  return (
    <div className="border-gray-100 shadow-2xl border-4 text-center mx-4 w-80  max-h-[40rem] md:absolute md:top-20 md:w-96 md:mx-8 bg-white rounded-3xl">
      
      <Homepage_link />
       <div>
        <div className="bg-blue-100 h-28 items-center font-bold flex flex-col justify-center items-center rounded-t-3xl">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}><Image src="/TVMlogo.png" alt="Logo" width={100} height={100} className="p-4" /></motion.div>
        </div>

        <div className="w-full bg-blue-100 h-16 flex flex-row justify-center items-center rounded-b-3xl">
          <span
            className={`hover:cursor-pointer w-1/2 h-full flex justify-center items-center rounded-bl-3xl ${ gender === "man" ? "font-bold bg-blue-200" : "" }`} onClick={handleInputGenderMan} >
            Männer
          </span>
          <span
            className={`hover:cursor-pointer w-1/2 h-full flex justify-center items-center rounded-br-3xl ${gender === "woman" ? "font-bold bg-blue-200" : "" }`}
            onClick={handleInputGenderWoman}
          >
            Frauen
          </span>
        </div>


        <div className="flex gap-20">
        {loading ? (
          <p>Lade Formular...</p>
        ) : (
        gender === "man" ? (
          teams.filter((team) => team.gender === "m").length >= 72 ? (
            <div className="flex justify-center flex-col gap-8 h-[32rem] items-center text-3xl font-bold w-full"><p>Turnier leider voll</p><Image src="/3mkotw.jpg" width={200} height={200} alt="" /></div>
          ) : (
            <Form price="3000" gender="man" />
          )
        ) : teams.filter((team) => team.gender === "w").length >= 4 ? (
          <div className="flex justify-center flex-col gap-8 h-[32rem] items-center text-3xl font-bold w-full"><p>Turnier leider voll</p><Image src="/3mkotw.jpg" width={200} height={200} alt="" /></div>
        ) : (
          <div><Form price="2000" gender="woman" /></div>
        )
        )}

        </div>

       </div>
    </div>
  )
}

export default PricingCard