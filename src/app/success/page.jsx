
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <>
    <div className='w-screen min-h-screen bg-blue-200 bg-wallpaper bg-cover bg-center flex justify-center items-center flex-col'>
        <div className='bg-black/50 flex justify-center items-center flex-col p-20 rounded-3xl'>
          <h1 className='text-white text-3xl text-center'>Vielen Dank für ihre Anmeldung!</h1>   
          <p className='w-screen px-4 text-white text-center text-sm my-8'>Sobald Sie die Zahlungsbestätigung per Mail erhalten haben sind Sie angemeldet. <br/>Bei Fragen oder Problemen wenden Sie sich per Mail an: <Link href="mailto:marioraach.tvm@gmail.com">marioraach.tvm@gmail.com</Link></p>
          <Image src="/OhIV.gif" width={400} height={400} alt='GIF' />
          <h1 className='text-white text-center text-2xl mt-20'>Bis zum 04.08. 👋</h1>   
        </div>
        <h3 className='text-white font-bold absolute bottom-8 w-screen left-0 text-center'><Link href="/" >Zurück zur Anmeldeseite</Link></h3>
    </div>
    </>
  )
}
