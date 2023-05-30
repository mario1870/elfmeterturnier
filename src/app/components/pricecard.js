

"use client"
import axios from "axios"
import Link from "next/link"
import {AiFillCheckCircle, AiFillCloseCircle} from 'react-icons/ai'
import { useState } from "react"
import Image from "next/image"
import { motion, useAnimation } from 'framer-motion';
import Form from "./form"

const PricingCard = () => {



  return (
    <div className="border-gray-100 shadow-2xl border-4 text-center mx-4 w-80 md:w-full md:mx-80 bg-white">
       <div>
        <motion.div className="bg-blue-100 h-28 items-center font-bold flex flex-col justify-center items-center">
            <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ stiffness: 260, damping: 40}}><Image src="/TVMlogo.png" alt="Logo" width={100} height={100} className="p-4" /></motion.div>
        </motion.div>

        <div className="flex gap-20">
          <Form price="3000" gender="man" />
          <Form price="2000" gender="woman" />          
        </div>

       </div>
    </div>
  )
}

export default PricingCard