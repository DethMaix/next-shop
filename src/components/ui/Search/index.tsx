import React, { FC } from 'react'
import Item from '../item'
import { MoveLeft } from 'lucide-react';
import { X } from 'lucide-react';


interface ISearch {
    isSearching: boolean,
    setIsSearching: React.Dispatch<React.SetStateAction<boolean>>,
}

const Search: FC<ISearch> = ({isSearching, setIsSearching}) => {
  return (
    <div className=" items-center w-11/12 m-auto mt-5 px-1 py-2 text-sm bg-neutral-200 rounded-2xl fixed z-40 left-1/2 top-0 -translate-x-2/4">
        <div className='flex bg-neutral-300 justify-between items-center rounded-2xl px-5 py-1 mb-6'>
           <MoveLeft className='cursor-pointer'/> 
           <div className='w-full'>
            <input type="text" className='bg-transparent mx-5 w-full focus:outline-none'/>
           </div>
           <div onClick={() => setIsSearching(false)}>
                <X className='cursor-pointer'/>
           </div>
        </div>
        <div className='flex px-8'>
            <div className='w-1/2'>
                <h2 className='font-bold uppercase text-l mb-2'>Trending</h2>
                <div className='flex text-xs'>
                    <div className='p-2 bg-neutral-300 rounded-xl font-bold mr-4'>Women&apos;s Bags</div>
                    <div className='p-2 bg-neutral-300 rounded-xl font-bold'>Tabi</div>
                </div>
            </div>
            <div className='w-1/2 '>
                <h2 className='font-bold uppercase text-l mb-5'>Most wanted</h2>
                <div className='flex justify-between'>
                    <Item />
                    <Item />
                    <Item />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Search