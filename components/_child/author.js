import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

function Author({name,img,designation}) {
  if(!name && !img) return <></>
  return (
    <div className='author flex py-5'>
    <Image src={img || '/'} className='rounded-full' width={50} height={50}/>
   <div className='flex flex-col justify-center px-4'>
    <Link href={'/'}  className="text-md font-bold text-gray-800 hover:text-gray-600">{name || 'Unknown'}</Link>
    <span className="text-sm text-gray-500">{designation || 'Unknown'} </span>
   </div>
    </div>
  )
}

export default Author
