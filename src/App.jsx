import React from 'react'
import { Route, Routes, BrowserRouter} from "react-router-dom";


// pages
import DashboardOverview from "./pages/DashboardOverview";
import Sites from './pages/Sites';
import Volunteer from './pages/Volunteers';
import Settings from "./pages/Settings";
import Signin from "./pages/examples/Signin";
import Signup from "./pages/examples/Signup";

import Template, { BlankPage } from "./pages/Template"
import { NavigationRoutes } from "./data/routes"
import ColourPreferenceProvider from './_context/ColourPreferenceContext';


document.title = "Electraka"


function App() {
	return (
		<ColourPreferenceProvider>
			<BrowserRouter>
				<Routes>
					<Route element={<Template/>}>
						<Route path={NavigationRoutes.DashboardOverview.path} element={<DashboardOverview/>}/>
						<Route path={NavigationRoutes.Sites.path} element={<Sites/>}/>
						<Route path={NavigationRoutes.Volunteers.path} element={<Volunteer/>}/>
						<Route path={NavigationRoutes.Settings.path} element={<Settings/>}/>
					</Route>

					<Route element={<BlankPage/>}>
						<Route path={NavigationRoutes.Signin.path} element={<Signin/>}/>
						<Route path={NavigationRoutes.Signup.path} element={<Signup/>}/>
					</Route>
				</Routes>
			</BrowserRouter>
		</ColourPreferenceProvider>
	)
}

export default App