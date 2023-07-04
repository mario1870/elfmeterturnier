
"use client"
import axios from 'axios';
import { useEffect, useState } from 'react';

const Teamlist = () => {
  const [teams, setTeams] = useState([]);
  const [gender, setGender] = useState("man")
  const [loading, setLoading] = useState(true);

  const handleInputGenderMan = (event) => {setGender("man");};
  const handleInputGenderWoman = (event) => {setGender("woman");};

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

  return (
    <div className='w-full flex justify-center bg-transparent z-30 h-full '>
        <div className="my-24 min-h-[25rem] border-gray-100 shadow-2xl border-4 text-center mx-4 w-80 md:w-96 md:mx-8 bg-white rounded-3xl md:absolute md:top-20 md:min-h-[40rem] md:my-0">

        <div className='w-full py-4 font-bold'>
          <h1>Bisher angemeldete Teams: {
            teams
              .filter((team) => {
                if (gender === "man") {
                  return team.gender === "m";
                } else if (gender === "woman") {
                  return team.gender === "w";
                } else {
                  return true;
                }
              })
              .length} von {gender === "man" ? 72 : 24}
          </h1>
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

        {loading ? (
          <p>Lade Teams...</p>
        ) : (
          <div>
            {teams
              .filter(team => {
                if (gender === 'man') {
                  return team.gender === 'm';
                } else if (gender === 'woman') {
                  return team.gender === 'w';
                } else {
                  return true;
                }
              })
              .map((team) => (
                <h3 key={team.id} className="text-start pl-8 pt-2">
                  ⚽ {team.teamname}
                </h3>
              ))
            }
          </div>
        )}

        </div>

        </div>
    </div>
  );
};

export default Teamlist;



