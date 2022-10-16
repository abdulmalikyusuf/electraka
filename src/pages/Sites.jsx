import React from 'react'

import {MapWidget} from "../components/Widgets"
import coordinates from "../data/coordinates";

function Sites() {
  	const [points, setPoints] = React.useState(coordinates)
	return (
		<div className="pb-8 mt-4 space-y-5 lg:space-y-10">
			<h2 className="text-center h2">Polling Units</h2>
			<div>
				<h4 className="h3">10,532 PUs</h4>
				<div className="flex flex-col justify-between space-y-5 w-fit d:flex-row md:space-y-0">
					<div className="">
						<label className="font-medium">Filter Polling Units</label>
						<select defaultValue="0" className="w-full text-sm rounded-lg placeholder:font-medium placeholder:text-sm">
							<option value="0">All</option>
							<option value="2">Zone</option>
							<option value="2">Ward</option>
							<option value="1">LGA</option>
						</select>
					</div>
				</div>
			</div>
			<div className="">
				<MapWidget coordinates={points}/>
			</div>
		</div>
	)
}

export default Sites