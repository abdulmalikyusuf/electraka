import React from "react"
import { ComposableMap, Geographies, Geography } from "react-simple-maps"

import topojson from "../data/gadm41_NGA_2.json"

// "transform": {
//     "scale": [0.036003600360036005, 0.017361589674592462],
//     "translate": [-180, -89.99892578124998]
//   },

export default function MapChart() {
    const [tooltip, setToggleTooltip] = React.useState(false)
    const [currentGrography, setCurrentGrography] = React.useState("")

	const handleClick = geography => {
		setToggleTooltip(true)
		setCurrentGrography(geography.properties.NAME_2)
	}
    
	return (
		<div className="flex items-center justify-center">
			<ComposableMap projection="geoAzimuthalEqualArea" projectionConfig={{
															center: [12, 10],
															scale: 3000}}>
				<Geographies geography={topojson}>
					{({ geographies }) => geographies.map((geo) => (
							<Geography key={geo.properties.NAME_2} fill="#FF5533" stroke="#000000" style={{
							default: { fill: "#EEE" },
							hover: { fill: "#F53" },
							pressed: { fill: "#E42" }
							}} strokeWidth={0.1} geography={geo} onClick={()=> handleClick(geo)}/>
						))
					}
				</Geographies>
			</ComposableMap>
			{
				tooltip && 
				<div className='absolute rounded-lg px-4 py-2 bg-primary dark:bg-gray-900 text-white dark:text-white text-white dark:text-white z-10'>
					<h6 className="">{currentGrography}</h6>
				</div>
			}
		</div>
	)
}
