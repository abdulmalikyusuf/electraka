import React from 'react'
import { Switch } from '@headlessui/react'
import { MoonIcon, SunIcon } from '@heroicons/react/24/outline'
import { ColourPreferenceContext } from '../_context/ColourPreferenceContext'


export default function ToggleNightMode() {
  const { lightMode, toggleDarkMode } = React.useContext(ColourPreferenceContext)

  return (
      <Switch
        onChange={toggleDarkMode}
        className={`${lightMode ? 'bg-gray-700' : 'bg-white'}
          relative inline-flex h-5 w-10 md:h-[38px] md:w-[74px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
      >
        {({ checked }) => (
            <>
                <span className="sr-only">Use setting</span>
                <span
                aria-hidden="true"
                className={`${lightMode ? 'translate-x-5 md:translate-x-9 bg-gray-900 text-gray-500' : 'translate-x-0 bg-white text-primary'}
                    pointer-events-none flex items-center justify-center h-4 md:h-[34px] w-4 md:w-[34px] transform rounded-full shadow-lg ring-0 transition duration-200 ease-in-out`}>
                        {lightMode ? <MoonIcon className='w-3 h-3 md:w-6 md:h-6 '/> : <SunIcon className='w-3 h-3 md:w-6 md:h-6'/>}
                </span>
            </>
        )}
      </Switch>
  )
}

