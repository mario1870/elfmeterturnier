import Image from 'next/image'
import PricingCard from "./components/pricecard"
import Teamlist from "./components/teamlist"
import Infos from "./components/infos"

export default function Home() {
  return (
    <>
      <div className='flex'>
            <div className='w-screen min-h-screen bg-wallpaper bg-cover bg-center flex justify-center items-center flex-col pt-20 mx-0 overflow-x-hidden'>
              <Infos />
              <PricingCard />      
            </div>      
      </div>
    </>
  )
}
