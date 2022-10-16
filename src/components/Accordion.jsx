import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/20/solid'


export default function Accordion({ heading, children }) {
    return (
        <Disclosure as="div" className="w-full maxx-w-5xl rounded-lg lg:rounded-2xl">
          {({ open }) => (
            <>
                <Disclosure.Button className={`group flex w-full justify-between rounded-t-lg ${ open ? "bg-primary dark:bg-gray-900 text-white dark:text-white text-white dark:text-white": "bg-white dark:bg-gray-700 text-primary text-white dark:text-white"} px-4 py-2 text-left text-sm font-medium hover:bg-primary hover:text-white dark:text-white dark:bg-gray-900 hover:text-white dark:text-white text-white dark:text-white focus:outline-none focus-visible:ring focus-visible:ring-primary focus-visible:ring-opacity-75`}>
                    <h5 className="h5">{heading}</h5>
                    <ChevronUpIcon className={`${open ? 'rotate-180 transform text-white dark:text-white text-white dark:text-white' : 'text-primary text-white dark:text-white'} w-6 lg:h-10 lg:w-10 group-hover:text-white dark:text-white group-hover:text-white dark:text-white text-white dark:text-white`}/>
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-gray-500 bg-white dark:bg-gray-700">
                        {children}
                </Disclosure.Panel>
            </>
          )}
        </Disclosure>
    )
}
