import React from 'react'
import { LockClosedIcon, XMarkIcon, Bars3Icon } from '@heroicons/react/24/outline'
import { Popover, Transition } from '@headlessui/react'
import { NavLink, useNavigate } from 'react-router-dom'

import menu from '../data/menu' 

function Sidebar() {
    const navigate = useNavigate()
    return (
        <Popover>
        {({open}) => (
            <>
                <div className="fixed top-0 left-0 z-50 hidden w-64 h-full min-h-screen px-10 overflow-hidden text-white transition-all duration-300 pointer-events-auto md:block bg-primary dark:bg-gray-900 dark:text-white">
                    <div className="flex flex-col h-full mt-4">
                        <h1 className={`text-2xl font-bold mb-10`}>Electraka</h1>
                        <nav className="flex-1 space-y-4 text-sm">
                            {menu.map((item, idx) => (
                                <NavLink to={item.link} key={item.title} className={({ isActive }) => `-mx-2 pl-2 block ${isActive && "bg-opacity-90 border-l-4 border-blue-800 text-white dark:text-white" } hover:text-white dark:text-white hover:bg-opacity-90 hover:border-l-4 hover:border-blue-800`}>
                                    <div className={`flex space-x-2 items-center`}>
                                        <span className="">{item.icon}</span>
                                        <span className="">{item.title}</span>
                                    </div>
                                </NavLink>
                            ))}
                        </nav>
                        <div className="w-full mb-6">
                        {/* absolute inset-x-0 bottom-0  */}
                            <button type="button" onClick={()=>navigate("/")} className={`flex bg-red-600 dark:bg-red-900 border-4 border-red-700 dark:border-red-800 opacity-80 px-4 justify-center py-1 w-full text-sm rounded-lg items-center`}>
                                <LockClosedIcon className="w-4 mr-2"/>
                                <span className={``}>Logout</span>
                            </button>
                        </div>
                    </div>
                </div>
                <Popover.Button className="absolute left-0 z-30 text-red-500 top-1 md:hidden" aria-controls="mobile-menu-2" aria-expanded="false">
                    <span className="sr-only">Close main menu</span>
                    <Bars3Icon className="h-8 text-white dark:text-white" aria-hidden="true"/>
                </Popover.Button>
                
                <Transition className="fixed inset-0 z-40 overflow-hidden md:hidden">
                    <Transition.Child
                        enter="transition-opacity ease-linear duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="transition-opacity ease-linear duration-300"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0">
                        <Popover.Overlay className="absolute inset-0 bg-opacity-50 backdrop-blur backdrop-filter opacity-30" />
                    </Transition.Child>

                    <Transition.Child
                        enter="transition ease-in-out duration-300 transform"
                        enterFrom="tranlate-x-full"
                        enterTo="translate-x-0"
                        leave="transition ease-in-out duration-300 transform"
                        leaveFrom="-translate-x-0"
                        leaveTo="-translate-x-full">
                        <Popover.Panel static className="absolute inset-0 z-40 h-screen translate-x-0 pointer-events-none">
                            <div className="z-30 h-full px-10 overflow-hidden text-white transition-all duration-300 pointer-events-auto bg-primary dark:bg-gray-900 dark:text-white">
                                <Popover.Button className="relative p-2" aria-controls="mobile-menu-2" aria-expanded="false">
                                    <span className="sr-only">Close main menu</span>
                                    <XMarkIcon className="fixed top-0 right-0 w-10 h-10 text-white" aria-hidden="true"/>
                                </Popover.Button>
                                <h1 className="mt-10 mb-6 text-2xl font-bold">Electraka</h1>
                                <nav className="space-y-4 text-sm">
                                    {menu.map((item, idx) => (
                                        <NavLink  to={item.link} key={item.title} className={({ isActive }) => `-mx-2 pl-2 block ${isActive && "bg-opacity-90 border-l-4 border-blue-800"} hover:bg-opacity-90 hover:border-l-4 hover:border-blue-800`}>
                                            <Popover.Button as={"div"} className={`flex space-x-2 items-center`}>
                                                <span className="">{item.icon}</span>
                                                <span className="">{item.title}</span>
                                            </Popover.Button>
                                        </NavLink>
                                    ))}
                                </nav>
                                <button type="button" onClick={()=>navigate("/")} className="absolute flex items-start px-12 py-2 text-lg font-medium bg-red-600 border-4 border-red-700 rounded-lg bottom-2 dark:bg-red-900 dark:border-red-800 blur-0">
                                    <LockClosedIcon className="inline-flex w-6"/>
                                    <span className={``}>Logout</span>
                                </button>
                            </div>
                        </Popover.Panel>
                    </Transition.Child>
                </Transition>
            </>

        )}
</Popover>
        
    )
}

export default Sidebar;