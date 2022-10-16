import React from 'react'
import { NavLink } from "react-router-dom"

import { Tooltip } from './Tooltip'


function MenuItem({ icon, title, navlink }) {
  
	return (
			<NavLink to={navlink} className={({ isActive }) => `-mx-2 pl-2 block ${isActive && "bg-opacity-90 border-l-4 border-blue-800"} hover:bg-opacity-90 hover:border-l-4 hover:border-blue-800`}>
				<div className={`flex space-x-2 items-center`}>
					<Tooltip label={title}>
						<span className="">{icon}</span>
					</Tooltip>
				</div>
			</NavLink>
	)
}

export default MenuItem

// const { x, y, reference, floating, strategy } = useFloating({
//   open,
//   onOpenChange: setOpen
// })
// const {context} = useFloating()
// const { getReferenceProps, getFloatingProps, getItemProps } = useInteractions([
//   useHover(context),
//   useFocus(context),
//   useRole(context)
// ])