import React from 'react'
import { UserCircleIcon } from '@heroicons/react/24/outline'

import VolunteerProjectsTable from '../components/VolunteerProjects'
import { volunteers } from '../data/volunteers'

function Volunteer() {
    return (
        <div className="space-y-5 lg:space-y-10 mt-4 pb-10">
            <h2 className="h2 text-center">Volunteers</h2>
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-2 md:gap-4 xl:gap-8">
                {volunteers.map(volunteer => (
                    <div className="bg-primary dark:bg-gray-700 text-white dark:text-white text-white dark:text-white rounded-lg p-4">
                        <div className="flex justify-between items-center">
                            <h5 className="h5">
                                <span className=""><UserCircleIcon className="h-10 w-10 inline-flex mr-4 "/></span>
                                {volunteer.name}
                            </h5>
                            <h3 className="h3">{Math.ceil(Math.random()*100)}</h3>
                        </div>
                        <ul className="list-disc list-inside">
                            <h6 className="h5">Recent Tracked Projects</h6>
                            <li  className="list-item">{volunteer.activity}</li>
                        </ul>
                    </div>
                ))}
            </div>
            <div className="bg-white dark:bg-gray-700 p-1 md:p-2 lg:p-5">
                <VolunteerProjectsTable/>
            </div>
        </div>
    )
}

export default Volunteer