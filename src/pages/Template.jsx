import React from 'react';
import { Outlet, useLocation } from "react-router-dom";

import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';


export function BlankPage() {
    return (
      <>
        <Outlet />
      </>
    )
}



function Template() {
    const { pathname } = useLocation();


    React.useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    }, [pathname]);


    
	return (
        <main className="w-full text-black max-w-screen-3xl dark:text-white">
            <Sidebar/>
            <div className={`md:ml-64 bg-gray-100 dark:bg-gray-900`}>
                <div className="sticky top-0">
                    <Navbar/>
                </div>
                <div className="min-h-screen px-2 md:px-4 lg:px-6">
                    <Outlet/>
                </div>
                <Footer/>
            </div>
        </main>
	);
}

export default Template;
// the cock's gonna call in the morning
// hold my hand
// ooh baby, its a long way down
