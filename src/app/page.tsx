import Image from 'next/image'
import PricingCard from "./components/pricecard"

export default function Home() {
  return (
    <>
    <div className='w-screen min-h-screen bg-blue-200 bg-wallpaper bg-cover bg-center flex justify-center items-center'>
      <PricingCard />      
    </div>

    </>
  )
}
