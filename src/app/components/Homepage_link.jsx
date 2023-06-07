
import Image from "next/image"
import Link from "next/link"

export default function Homepage_link(){
    return(
        <div className="absolute top-2 left-2 filter invert opacity-60">
            <Link href="https://www.tv-melchingen.de/"><Image alt="Zurück zur Homepage" src="/arrow.png" width={50} height={50}></Image></Link>
        </div>
    )
}