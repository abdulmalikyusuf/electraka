import React from 'react'
import { lgas } from '../data/lgas'


export default function UserForm() {
  	return (
    	<div className="">
			<form className="grid gap-4 md:grid-cols-2">
				<div className="">
					<label htmlFor="" className="font-medium dark:text-white">First Name</label>
					<input required type="text" placeholder="Enter your first name" className="w-full text-sm rounded-lg dark:text-white placeholder:dark:text-gray-500 dark:bg-gray-400 placeholder:font-medium placeholder:text-sm"/>
				</div>
				<div className="">
					<label htmlFor="" className="font-medium dark:text-white">Last Name</label>
					<input required type="text" placeholder="Also your last name" className="w-full text-sm rounded-lg dark:text-white placeholder:dark:text-gray-500 dark:bg-gray-400 placeholder:font-medium placeholder:text-sm" />
				</div>
				<div className="col-span-full">
					<label htmlFor="" className="font-medium dark:text-white">LGA</label>
					<select defaultValue="0"className="w-full text-sm rounded-lg dark:text-white placeholder:dark:text-gray-500 dark:bg-gray-400 placeholder:font-medium placeholder:text-sm">
                            {lgas.map(lga => (
                                <option key={lga} value={lga}>{lga}</option>
                            ))}
                        </select>
				</div>
				<div className="">
					<label htmlFor="" className="font-medium dark:text-white">Email</label>
					<input required type="email" placeholder="name@company.com" className="w-full text-sm rounded-lg dark:text-white placeholder:dark:text-gray-500 dark:bg-gray-400 placeholder:font-medium placeholder:text-sm" />
				</div>
				<div className="mb-3">
					<label htmlFor="" className="font-medium dark:text-white">Phone</label>
					<input required type="tel" placeholder="+23 490 123 456" className="w-full text-sm rounded-lg dark:text-white placeholder:dark:text-gray-500 dark:bg-gray-400 placeholder:font-medium placeholder:text-sm" />
				</div>
				<div className="mb-3">
					<label htmlFor="" className="font-medium dark:text-white">Password</label>
					<input required type="password" placeholder="***************" className="w-full text-sm rounded-lg dark:text-white placeholder:dark:text-gray-500 dark:bg-gray-400 placeholder:font-medium placeholder:text-sm" />
				</div>
				<div className="mb-3">
					<label htmlFor="" className="font-medium dark:text-white">Confirm Password</label>
					<input required type="password" placeholder="***************" className="w-full text-sm rounded-lg dark:text-white placeholder:dark:text-gray-500 dark:bg-gray-400 placeholder:font-medium placeholder:text-sm" />
				</div>
				<div className="mt-3 col-span-full">
					<button type="submit" className="btn-primary">Create</button>
				</div>
			</form>
      	</div>
  	)
}