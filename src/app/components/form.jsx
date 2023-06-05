"use client"
import axios from 'axios';
import Link from 'next/link';
import { AiFillCheckCircle, AiFillCloseCircle } from 'react-icons/ai';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Alert from "./alert"
import Price from "./(form)/price"

export default function Form(props) {

  // Alert zeigen wenn Teamname bereits existiert
  const [showExistingTeamAlert, setShowExistingTeamAlert] = useState(false);
  const handleTeamnameExists = () => {
    setShowExistingTeamAlert(true);
    setTimeout(() => {
      setShowExistingTeamAlert(false);
    }, 5000);
  };

  // Alert zeigen wenn Teamname bereits existiert
  const [showAllInputsAlert, setShowAllInputsAlert] = useState(false);
  const handleAllInputs = () => {
    setShowAllInputsAlert(true);
    setTimeout(() => {
      setShowAllInputsAlert(false);
    }, 5000);
  };

  const [teamname, setTeamname] = useState('');
  const [kontaktperson, setKontaktperson] = useState('');
  const [emailadresse, setEmailadresse] = useState('');
  const [datenschutz, setDatenschutz] = useState(false);

  const checkUsernameExists = async (teamname) => {
    try {
      const response = await axios.post('/api/check_username', { teamname });
      const data = response.data;
      return data.exists;
    } catch (error) {
      console.error(error);
      return false;
    }
  };

  const handlePayment = async (e) => {
    e.preventDefault();

    // Überprüfe zuerst, ob der Benutzername bereits existiert
    const teamnameExists = await checkUsernameExists(teamname);
    if (teamnameExists) {
      handleTeamnameExists()
      return;
    }
    else{
      // Führe den Rest des Codes aus, wenn der Benutzername nicht existiert
      if (teamname !== '' && kontaktperson !== '' && emailadresse !== '' && datenschutz !== false) {
        const data = {
          teamname: teamname,
          kontaktperson: kontaktperson,
          emailadresse: emailadresse,
        };

        try {
          const response = await axios.post(`/api/checkout_${props.gender}`, data);
          window.location.assign(response.data);
        } catch (error) {
          console.error('Fehler beim Senden der Formulardaten:', error);
        }
      } else {
        handleAllInputs()
      }
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
  const handleInputChangeDatenschutz = (event) => {
    setDatenschutz(event.target.checked);
  };

    return(
        <>
        {showExistingTeamAlert && <Alert text="Teamname ist bereits vergeben" />}
        {showAllInputsAlert && <Alert text="Bitte alle Felder ausfüllen!" />}

        <div>

          <Price price={props.price} />

          <ul className="flex justify-center ">
              <li className="text-xl font-bold" >
                <div className="mt-6 space-y-4">
                    <div className="flex space-x-3 justify-start items-center">
                        {teamname ? (<AiFillCheckCircle className="h-5 w-5 flex-shrink-0 text-green-500 ml-2" aria-hidden="true" />) : (<AiFillCloseCircle className="h-5 w-5 flex-shrink-0 text-red-500/75 ml-2" aria-hidden="true" />)}
                        <h2 className="text-sm md:text-xl text-gray-500/75">
                            <input type="text" placeholder="Teamname" onChange={handleInputChangeTeamname} className="outline-none"/>
                        </h2>
                    </div>

                    <div className="border" />
                        <div className="flex space-x-3 justify-start items-center" >
                          {kontaktperson ? (<AiFillCheckCircle className="h-5 w-5 flex-shrink-0 text-green-500/75 ml-2" aria-hidden="true" />) : (<AiFillCloseCircle className="h-5 w-5 flex-shrink-0 text-red-500/75 ml-2" aria-hidden="true" />)}
                          <h2 className="text-sm md:text-xl text-gray-500">
                              <input type="text" placeholder="Kontaktperson" onChange={handleInputChangeKontaktperson} className="outline-none" />
                          </h2>
                    </div>

                    <div className="border" />

                    <div className="flex space-x-3 justify-start items-center" >
                      {emailadresse ? (<AiFillCheckCircle className="h-5 w-5 flex-shrink-0 text-green-500/75 ml-2" aria-hidden="true" />) : (<AiFillCloseCircle className="h-5 w-5 flex-shrink-0 text-red-500/75 ml-2" aria-hidden="true" />)}
                      <h2 className="text-sm md:text-xl text-gray-500">
                          <input type="text" placeholder="Emailadresse" onChange={handleInputChangeEmailadresse} className="outline-none" />
                      </h2>
                    </div>

                    <div className="border" />
                      <p className="text-xxs text-gray-500 px-4 leading-3 pt-4">Aufgrund des Kleinunternehmerstatus gem. § 19 UStG erheben wir keine Umsatzsteuer und weisen diese daher auch nicht aus.</p>
                    </div>
              </li>
          </ul>

          <div className="flex items-center px-4">
            <input onChange={handleInputChangeDatenschutz} checked={datenschutz} id="link-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
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