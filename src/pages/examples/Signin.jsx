import React from "react";
import { EnvelopeIcon, LockClosedIcon } from "@heroicons/react/24/solid";
import { Link, useNavigate } from "react-router-dom";

import { NavigationRoutes } from "../../data/routes";
import BOSG from "../../assets/img/BOSG.jpeg";

export default function SignIn() {
	const navigate = useNavigate();
	return (
		<section className="bg-gray-200 h-screen dark:bg-gray-900 text-white dark:text-white">
			<div className="flex justify-center pt-4 h-full">
				<div className="bg-white dark:bg-gray-700 shadow-lg h-full rounded-xl lg:rounded-2xl px-10 py-4 w-full max-w-lg">
					<div className="">
						<img src={BOSG} alt="Borno State Gov't Logo" className="rounded-full mx-auto" />
					</div>
					<div className="text-center mb-4">
						<h4 className="h3">TrackBorno25</h4>
						<p className="font-medium">Sign in to our platform</p>
					</div>
					<form className="space-y-4 mt-8 text-primary text-white dark:text-white">
						<div id="email" className=" space-y-2">
							<label htmlFor="" className="h6">Your Email</label>
							<div className="flex items-center px-4 py-1 opacity-50 bg-white dark:bg-gray-700 rounded-xl border border-black dark:border-gray-500">
								<EnvelopeIcon className="w-5"/>
								<input autoFocus required type="email" placeholder="example@email.com"
								className="dark:bg-gray-700 w-full placeholder:font-medium text-sm placeholder:text-sm focus:ring-0 border-0 font-medium outline-none mr-5"/>
							</div>
						</div>
						<div id="email" className=" space-y-2">
							<label htmlFor="" className="h6">Your Password</label>
							<div className="flex items-center px-4 py-1 opacity-50 bg-white dark:bg-gray-700 rounded-xl border border-black dark:border-gray-500">
								<LockClosedIcon className="w-5"/>
								<input required type="password" placeholder="Password"
								className="dark:bg-gray-700 w-full placeholder:font-medium text-sm placeholder:text-sm focus:ring-0 border-0 font-medium outline-none mr-5"/>
							</div>
						</div>
						<div className="flex justify-between">
							<div>
								<input type="checkbox" name="remember" className="dark:bg-gray-700 rounded-[4px] mr-2"/>
								<label htmlFor="forgotPassword" className="dark:bg-gray-700 text-sm lg:text-base font-medium lg:font-bold">Remember Me</label>
							</div>
							<Link to="/" className="text-xs lg:text-sm">Lost password?</Link>
						</div>
						<button type="submit" className="btn-primary w-full font-bold" onClick={()=>navigate("/home")}>Sign in</button>
					</form>

					<div className="flex justify-center items-center mt-8">
						<span className="">Not registered?
						<Link to={NavigationRoutes.Signup.path} className="font-medium" >
								Create account
							</Link>
						</span>
					</div>
				</div>
			</div>
		</section>
	);
}
