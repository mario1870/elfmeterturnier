
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
        const response = await axios.get('/api/get_all_teams');
        setTeams(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchTeams();
  }, []);

  return (
    <div className='w-full flex justify-center bg-transparent'>
        <div className="my-24 min-h-[25rem] border-gray-100 shadow-2xl border-4 text-center mx-4 w-80 md:w-96 md:mx-8 bg-white rounded-3xl">

        <div className='w-full py-4 font-bold'>
          <h1>Bisher angemeldete Teams:</h1>
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
        {Array.isArray(teams) && teams.length > 0 ? (
          teams.map((team) => {
            if ((gender === "man" && team.gender === "m") || (gender === "woman" && team.gender === "w")) {
              return <div className='text-start pl-8 pt-2' key={team.id}>⚽ {team.teamname}</div>;
            } else {
              return null;
            }
          })
        ) : (
          <div>Sei der erste!</div>
        )}

        </div>

        </div>
    </div>
  );
};

export default Teamlist;

