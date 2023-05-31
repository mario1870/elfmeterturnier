"use client"
import axios from "axios"
import Link from "next/link"
import {AiFillCheckCircle, AiFillCloseCircle} from 'react-icons/ai'
import { useState } from "react"
import { motion, useAnimation } from 'framer-motion';

export default function Form(props) {

    const [teamname, setTeamname] = useState('');
    const [kontaktperson, setKontaktperson] = useState('');
    const [emailadresse, setEmailadresse] = useState('');
    const [datenschutz, setDatenschutz] = useState(false)
  



    const handlePayment = async (e) => {
        e.preventDefault();

        if (teamname !== '' && kontaktperson !== '' && emailadresse !== '' && datenschutz!==false) {

            const data = {
                teamname: teamname,
                kontaktperson: kontaktperson,
                emailadresse: emailadresse
              };

          try {const response = await axios.post(`/api/checkout_${props.gender}`, data);
            window.location.assign(response.data);
          } catch (error) {
            console.error('Fehler beim Senden der Formulardaten:', error);
          }
        } else {alert('Bitte alle Felder ausfüllen');}};

      const handleInputChangeTeamname = (event) => { setTeamname(event.target.value);};
      const handleInputChangeKontaktperson = (event) => {setKontaktperson(event.target.value);};
      const handleInputChangeEmailadresse = (event) => {setEmailadresse(event.target.value);};
      const handleInputChangeDatenschutz = (event) => {setDatenschutz(!datenschutz);};
      
    return(
        <>
              
        <div>

          <motion.div className="flex flex-col items-center justify-center pt-4" initial={{ scale: 0 }}  animate={{ scale: 1 }}  transition={{ delay: 0.1, duration: 0.5 }}>
              <h1 className="text-3xl md:text-5xl font-bold"> 
              {(props.price / 100).toLocaleString('de-DE', {
                style: 'currency',
                currency: 'EUR'
              })}
              </h1>
          </motion.div>

          <ul className="flex justify-center md:px-20 py-4">
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
                      <p className="text-xxs text-gray-500 px-4 leading-3 pt-4">Aufgrund des Kleinunternehmerstatus gem. § 19 UStG erheben wir keine Umsatzsteuer und weisen diese daher auch nicht aus.</p>
                    </div>
              </li>
          </ul>

          <div class="flex items-center px-4">
            <input onChange={handleInputChangeDatenschutz} id="link-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
            <label htmlFor="link-checkbox" className="ml-2 text-xxs font-medium text-gray-900 dark:text-gray-300">Ich stimme den <Link href="#" className="text-blue-600 dark:text-blue-500 hover:underline">Datenschutzbestimmungen </Link>und dem <Link href="#" className="text-blue-600 dark:text-blue-500 hover:underline">Haftungsausschluss</Link> zu.</label>
          </div>

          <span className="w-full flex justify-center pb-8">
            <button className="mt-8 flex justify-center rounded-md border border-transparent bg-blue-300 py-2 text-sm font-medium text-black shadow-sm px-20" onClick={handlePayment}>
                Anmelden
            </button>
          </span>
        </div>
        </>
        
    )
}