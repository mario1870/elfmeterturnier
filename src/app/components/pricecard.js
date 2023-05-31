

"use client"
import axios from "axios"
import Link from "next/link"
import {AiFillCheckCircle, AiFillCloseCircle} from 'react-icons/ai'
import { useState } from "react"
import Image from "next/image"
import { motion, useAnimation } from 'framer-motion';
import Form from "./form"

const PricingCard = () => {

  const [gender, setGender] = useState("man")

  const handleInputGenderMan = (event) => {setGender("man");};
  const handleInputGenderWoman = (event) => {setGender("woman");};

  return (
    <div className="border-gray-100 shadow-2xl border-4 text-center mx-4 w-80 md:w-96 md:mx-80 bg-white rounded-3xl">
       <div>
        <motion.div className="bg-blue-100 h-28 items-center font-bold flex flex-col justify-center items-center rounded-t-3xl">
            <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ stiffness: 260, damping: 40}}><Image src="/TVMlogo.png" alt="Logo" width={100} height={100} className="p-4" /></motion.div>
        </motion.div>

        <div className="w-full bg-blue-100 h-16 flex flex-row justify-center items-center rounded-b-3xl">
          <span
            className={`w-1/2 h-full flex justify-center items-center rounded-bl-3xl ${ gender === "man" ? "font-bold bg-blue-200" : "" }`} onClick={handleInputGenderMan} >
            Männer
          </span>
          <span
            className={`w-1/2 h-full flex justify-center items-center rounded-br-3xl ${gender === "woman" ? "font-bold bg-blue-200" : "" }`}
            onClick={handleInputGenderWoman}
          >
            Frauen
          </span>
        </div>


        <div className="flex gap-20">
          {gender === "man" ? (<Form price="3000" gender="man" />) : (<Form price="2000" gender="woman" />)}     
        </div>

       </div>
    </div>
  )
}

export default PricingCard