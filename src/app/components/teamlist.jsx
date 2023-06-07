
"use client"
import axios from 'axios';
import { useEffect, useState } from 'react';

const Teamlist = () => {
  const [teams, setTeams] = useState([]);
  const [gender, setGender] = useState("man")

  const handleInputGenderMan = (event) => {setGender("man");};
  const handleInputGenderWoman = (event) => {setGender("woman");};

  useEffect(() => {
    const fetchTeams = async () => {
      try {
        const response = await axios.get('https://one1er-api.onrender.com/teams');
        setTeams(response.data);

      } catch (error) {
        console.error(error);
      }
    };

    fetchTeams();
  }, [gender]);

  return (
    <div className='w-full flex justify-center bg-transparent z-30 h-full '>
        <div className="my-24 min-h-[25rem] border-gray-100 shadow-2xl border-4 text-center mx-4 w-80 md:w-96 md:mx-8 bg-white rounded-3xl md:absolute md:top-20 md:min-h-[40rem] md:my-0">

        <div className='w-full py-4 font-bold'>
          <h1>Bisher angemeldete Teams: {teams.id}</h1>
        </div>

        <div className="w-full bg-blue-100 h-16 flex flex-row justify-center items-center rounded-3xl">
          <span className={`hover:cursor-pointer w-1/2 h-full flex justify-center items-center rounded-l-3xl ${ gender === "man" ? "font-bold bg-blue-200" : "" }`} onClick={handleInputGenderMan} >
            Männer
          </span>
          <span className={`hover:cursor-pointer w-1/2 h-full flex justify-center items-center rounded-r-3xl ${gender === "woman" ? "font-bold bg-blue-200" : "" }`} onClick={handleInputGenderWoman}>
            Frauen
          </span>
        </div>

        <div className='mt-4'>

        {teams.map((team) => {
          if (team.gender === "w" && gender === "woman") {
            return (
              <li key={team.id}>
                <h3 className='text-start pl-8 pt-2'>⚽ {team.teamname} {team.gender}</h3>
              </li>
            );
          } 
          if (team.gender === "m" && gender === "man") {
            return (
              <li key={team.id}>
                <h3 className='text-start pl-8 pt-2'>⚽ {team.teamname} {team.gender}</h3>
              </li>
            );
          }
        })}

        </div>

        </div>
    </div>
  );
};

export default Teamlist;



