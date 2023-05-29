
import Image from 'next/image'

export default function Home() {
  return (
    <>
    <div className='w-screen min-h-screen bg-blue-200 bg-wallpaper bg-cover bg-center flex justify-center items-center flex-col'>
        <div className='bg-black/50 flex justify-center items-center flex-col p-20 rounded-3xl'>
        <h1 className='text-white text-3xl mb-20 text-center'>Vielen Dank für ihre Anmeldung  </h1>   
        <Image src="/OhIV.gif" width={400} height={400} alt='GIF' />
        <h1 className='text-white text-center text-2xl mt-20'>Bis zum 04.08. 👋</h1>   
        </div>
    </div>
    </>
  )
}
