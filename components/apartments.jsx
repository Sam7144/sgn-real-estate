import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import "bootstrap/dist/css/bootstrap.css";
export default function Apartments({data}) {
    console.log(data)
  return (
    <main>
      <div className='apartment'>
      {data.map((ev)=>(
      <Link key={ev.name} href={`/property/${ev.name}`} legacyBehavior>
      <a className='e m-1 p-2'>
      <Image alt={ev.title} width={300} height={300} className='imga' src={ev.image}/>
      <div>
      <p>{ev.name}</p>
      <p>{ev.price}</p>
      <p className='textLeft'>view propertry</p>
      </div>
      </a>
    </Link>
    ))}
      </div>
  </main>
  )
}
