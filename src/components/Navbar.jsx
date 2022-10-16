import React from 'react'
import { UserIcon } from "@heroicons/react/24/outline"
import Toggle from './Switch'

function Navbar() {
    
    return (
        <header className={`flex justify-end space-x-10 lg:space-x-20 items-center bg-primary dark:bg-gray-900 text-white dark:text-white py-1 md:py-2 px-8 -ml-20 md:ml-0`}>
                <Toggle/>
            <div className="p-2 bg-white rounded-full dark:bg-gray-700">
                <UserIcon className='w-4 text-black md:w-6'/>
            </div>
        </header>
    )
}

export default Navbar