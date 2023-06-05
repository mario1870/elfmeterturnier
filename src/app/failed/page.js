
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <>
    <div className='w-screen min-h-screen bg-blue-200 bg-wallpaper bg-cover bg-center flex justify-center items-center flex-col text-white'>
        Leider ist etwas schiefgelaufen. Versuche es nochmal oder kontaktiere mich unter <Link href="mailto:marioraach.tvm@gmail.com">marioraach.tvm@gmail.com</Link>
    </div>
    </>
  )
}
