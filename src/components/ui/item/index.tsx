'use client'

import Image from 'next/image'
import React from 'react'

// interface IItem {
//     image: string,
//     category: string
// }

const Item = () => {
  return (
    <div className='mr-5'>
        <div>
            <Image
                className='rounded-3xl hover:scale-95 transition duration-150 ease-out mb-6'
                src='/slg.jpg'
                width={230}
                height={350}
                alt="Picture of the author"
            />
        </div>
        <div className='text-center text-base'>
            Name
        </div>
    </div>
  )
}

export default Item