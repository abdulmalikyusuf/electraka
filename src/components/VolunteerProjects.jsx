import React from "react";
import { Link } from 'react-router-dom';
import { EllipsisHorizontalIcon } from "@heroicons/react/24/outline"

import { volunteers } from "../data/volunteers"


function VolunteerProjectsTable() {
    const totalVolunteers = volunteers.length;
  
    const TableRow = (props) => {
        const { index, name } = props;
    
        return (
			<tr className="">
				<td className="p-4 whitespace-nowrap text-sm font-normal text-gray-500">
					<Link to="/" className="font-medium">{index+1}</Link>
				</td>
				<td className="p-4 whitespace-nowrap text-base font-medium text-gray-900">Increasing acess to edcuation for Adolescent girls in Borno State</td>
				<td className="p-4 whitespace-nowrap space-x-2">{name}</td>
				<td className="p-4 whitespace-nowrap space-x-2"><EllipsisHorizontalIcon className="w-8"/></td>
			</tr>
		);
    };
  
    return (
		<div className="flex flex-col">
			<h4 className="h4">List of Projects and Trackers</h4>
			<div className="overflow-x-auto">
				<div className="align-middle inline-block min-w-full">
					<div className="shadow overflow-hidden">
						<table className="table-fixed min-w-full divide-y divide-gray-200">
							<thead className="bg-gray-100 dark:bg-gray-500 text-gray-500 text-white dark:text-white">
								<tr>
									<th scope="col" className="p-4">#</th>
									<th scope="col" className="p-4 text-left text-xs font-medium uppercase">
									Project
									</th>
									<th scope="col" className="p-4 text-left text-xs font-medium uppercase">
									Tracked by
									</th>
									<th scope="col" className="p-4 text-left text-xs font-medium uppercase">
									Action
									</th>
								</tr>
							</thead>
							<tbody className="bg-white dark:bg-gray-700 divide-y divide-gray-200">
								{volunteers.map((volunteer, idx) => <TableRow key={idx} index={idx+1} {...volunteer}/>)}
							</tbody>
						</table>
					</div>
				</div>
			</div>
			<div className="">
				<small className="fw-bold">Showing <b>{totalVolunteers}</b> out of <b>{totalVolunteers}</b> entries</small>
			</div>
        </div>
    );
}

export default VolunteerProjectsTable