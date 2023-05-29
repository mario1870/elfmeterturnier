

"use client"
import axios from "axios"
import Link from "next/link"
import {AiFillCheckCircle, AiFillCloseCircle} from 'react-icons/ai'
import { useState } from "react"
import Image from "next/image"
import { motion, useAnimation } from 'framer-motion';

const addUser = async (e) => {

    const body = {
      teamname: formData.get('title'),
      emailadresse: formData.get('content'),
      kontaktperson: formData.get('title'),
      gender: formData.get('title'),
    };

    const res = await fetch('/api/add_team', {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    await res.json();
  };


const createData = async (teamname, kontaktperson, emailadresse, gender) => {
  try {
    const createdData = await prisma.modelName.create({
      data: {
        teamname: teamname,
        emailadresse: emailadresse,
        kontaktperson: kontaktperson,
        gender: gender,
        // ...
      },
    });

    console.log('Neuer Datensatz erstellt:', createdData);
  } catch (error) {
    console.error('Fehler beim Erstellen des Datensatzes:', error);
  }
};



const PricingCard = () => {

    const [teamname, setTeamname] = useState('');
    const [kontaktperson, setKontaktperson] = useState('');
    const [emailadresse, setEmailadresse] = useState('');
    const [gender, setGender] = useState(false);
  
    const handlePayment = async (e) => {
        e.preventDefault();
      
        if (teamname !== '' && kontaktperson !== '' && emailadresse !== '' && gender !== false) {
          try {
            const response = await axios.post('/api/payment', {
            });
      
            window.location.assign(response.data);
          } catch (error) {
            console.error('Fehler beim Senden der Formulardaten:', error);
          }
        } else {
          alert('Bitte alle Felder ausfüllen');
        }
      };
      

const handleInputChangeTeamname = (event) => {
  setTeamname(event.target.value);
};
const handleInputChangeKontaktperson = (event) => {
  setKontaktperson(event.target.value);
};
const handleInputChangeEmailadresse = (event) => {
  setEmailadresse(event.target.value);
};
const handleInputChangeGender = (event) => {
  setGender(true);
};




  return (
    <div className="border-gray-100 shadow-2xl border-4 text-center mx-4 w-80 md:w-96 bg-white">
       <div>
        <motion.div className="bg-blue-100 h-28 items-center font-bold flex flex-col justify-center items-center">
            <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ stiffness: 260, damping: 40}}><Image src="/TVMlogo.png" alt="Logo" width={100} height={100} className="p-4" /></motion.div>
        </motion.div>
        <div>
          <motion.div className="flex flex-col items-center justify-center pt-4" initial={{ scale: 0 }}  animate={{ scale: 1 }}  transition={{ delay: 0.1, duration: 0.5 }}>
              <h1 className="text-5xl md:text-5xl font-bold"> 
              {(3000 / 100).toLocaleString('de-DE', {
                style: 'currency',
                currency: 'EUR'
              })}
              </h1>
          </motion.div>

          <ul className="flex justify-center">
              <li className="text-xl font-bold" >
                <div className="mt-6 space-y-4">
                    <motion.div className="flex space-x-3 justify-start items-center" initial={{ scale: 0 }}  animate={{ scale: 1 }}  transition={{ delay: 0.2, duration: 0.5 }}>
                        {teamname ? (<AiFillCheckCircle className="h-5 w-5 flex-shrink-0 text-green-500 ml-2" aria-hidden="true" />) : (<AiFillCloseCircle className="h-5 w-5 flex-shrink-0 text-red-500 ml-2" aria-hidden="true" />)}
                        <h2 className="text-sm md:text-xl text-gray-500">
                            <input type="text" placeholder="Teamname" onChange={handleInputChangeTeamname} className="outline-none"/>
                        </h2>
                    </motion.div>

                    <div className="border" />
                        <motion.div className="flex space-x-3 justify-start items-center" initial={{ scale: 0 }}  animate={{ scale: 1 }}  transition={{ delay: 0.3, duration: 0.5 }} >
                          {kontaktperson ? (<AiFillCheckCircle className="h-5 w-5 flex-shrink-0 text-green-500 ml-2" aria-hidden="true" />) : (<AiFillCloseCircle className="h-5 w-5 flex-shrink-0 text-red-500 ml-2" aria-hidden="true" />)}
                          <h2 className="text-sm md:text-xl text-gray-500">
                              <input type="text" placeholder="Kontaktperson" onChange={handleInputChangeKontaktperson} className="outline-none" />
                          </h2>
                    </motion.div>

                    <div className="border" />

                    <motion.div className="flex space-x-3 justify-start items-center" initial={{ scale: 0 }}  animate={{ scale: 1 }}  transition={{ delay: 0.4, duration: 0.5 }}>
                    {emailadresse ? (<AiFillCheckCircle className="h-5 w-5 flex-shrink-0 text-green-500 ml-2" aria-hidden="true" />) : (<AiFillCloseCircle className="h-5 w-5 flex-shrink-0 text-red-500 ml-2" aria-hidden="true" />)}
                    <h2 className="text-sm md:text-xl text-gray-500">
                        <input type="text" placeholder="Emailadresse" onChange={handleInputChangeEmailadresse} className="outline-none" />
                    </h2>
                    </motion.div>

                    <div className="border" />

                    <motion.div className="flex space-x-3 justify-start items-center" initial={{ scale: 0 }}  animate={{ scale: 1 }}  transition={{ delay: 0.5, duration: 0.5 }}>

                    {gender ? (<AiFillCheckCircle className="h-5 w-5 flex-shrink-0 text-green-500 ml-2" aria-hidden="true" />) : (<AiFillCloseCircle className="h-5 w-5 flex-shrink-0 text-red-500 ml-2" aria-hidden="true" />)}
                        <h2 className="text-sm md:text-xl text-gray-500">
                            <input className="" type="radio" id="m" name="fav_language" value="" onChange={handleInputChangeGender} />
                            <label htmlFor="m" className="py-4 ml-4">Herren</label><br/>
                            <input className="ml-0" type="radio" id="w" name="fav_language" value="" onChange={handleInputChangeGender} />
                            <label htmlFor="w" className="py-4 ml-4">Damen</label><br/>
                        </h2>
                    </motion.div>
            <div className="border" />
              <p className="text-sm text-gray-500 px-4">Aufgrund des Kleinunternehmerstatus gem. § 19 UStG erheben wir keine Umsatzsteuer und weisen diese daher auch nicht aus.</p>

        </div>
              </li>
          </ul>


          <button className="mt-8 flex w-full justify-center rounded-md border border-transparent bg-[#f1592a] py-2 px-4 text-sm font-medium text-white shadow-sm" onClick={handlePayment}>
             Anmelden
          </button>
        </div>
       </div>
    </div>
  )
}

export default PricingCard