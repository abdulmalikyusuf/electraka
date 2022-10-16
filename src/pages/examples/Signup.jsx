import React from "react";
import { Link, useNavigate } from 'react-router-dom';
import { EnvelopeIcon, LockClosedIcon, UserGroupIcon } from "@heroicons/react/24/solid";

import { NavigationRoutes } from "../../data/routes";


export default function Signup() {
	const navigate = useNavigate()
  return (
    <section className="bg-gray-200 h-screen dark:bg-gray-900 text-white dark:text-white">
		<div className="flex justify-center pt-4 h-full">
			<div className="bg-white dark:bg-gray-700 shadow-lg h-fit rounded-xl lg:rounded-2xl px-10 py-4 w-full max-w-lg">
				<div className="text-center mb-4">
					<h4 className="h3">TrackBorno25</h4>
					<p className="font-medium">Sign in to our platform</p>
				</div>
				<form className="space-y-4 mt-8 text-primary text-white dark:text-white">
					<div id="email" className=" space-y-2">
						<label htmlFor="" className="h6">Your Email</label>
						<div className="flex items-center px-4 py-1 opacity-50 bg-white dark:bg-gray-700 rounded-xl border border-black">
							<EnvelopeIcon className="w-5"/>
							<input autoFocus required type="email" placeholder="example@email.com"
							className="dark:bg-gray-700 w-full placeholder:font-medium text-sm placeholder:text-sm focus:ring-0 border-0 font-medium outline-none mr-5 dark:border-gray-500"/>
						</div>
					</div>
					<div id="email" className=" space-y-2">
						<label htmlFor="" className="h6">Name of Organization</label>
						<div className="flex items-center px-4 py-1 opacity-50 bg-white dark:bg-gray-700 rounded-xl border border-black">
							<UserGroupIcon className="w-5"/>
							<input autoFocus required type="text" placeholder=""
							className="dark:bg-gray-700 w-full placeholder:font-medium text-sm placeholder:text-sm focus:ring-0 border-0 font-medium outline-none mr-5 dark:border-gray-500"/>
						</div>
					</div>
					<div id="email" className=" space-y-2">
						<label htmlFor="" className="h6">Your Password</label>
						<div className="flex items-center px-4 py-1 opacity-50 bg-white dark:bg-gray-700 rounded-xl border border-black">
							<LockClosedIcon className="w-5"/>
							<input required type="password" placeholder="Password"
							className="dark:bg-gray-700 w-full placeholder:font-medium text-sm placeholder:text-sm focus:ring-0 border-0 font-medium outline-none mr-5 dark:border-gray-500"/>
						</div>
					</div>
					<div className="pt-10">
						<button type="submit" className="btn-primary w-full font-bold" onClick={()=>navigate("/home")}>Sign up</button>

					</div>
				</form>

				<div className="flex justify-center items-center mt-8">
					<span className="mr-2">Already have an account?
					<Link to={NavigationRoutes.Signin.path} className="font-medium" >Login here</Link>
					</span>
				</div>
			</div>
		</div>
	</section>
  );
};
