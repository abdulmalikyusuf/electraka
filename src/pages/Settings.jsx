import React from "react";
import { UserIcon } from '@heroicons/react/20/solid'

import DropdownMenu from "../components/DropdownMenu";
import { ChoosePhotoWidget, ProfileCardWidget } from "../components/Widgets";
import VolunteerTable from "../components/VolunteerTable";
import CenteredModal from "../components/Modal"
import UserForm from "../components/UserForm";
import Profile1 from "../assets/img/team/profile-picture-1.jpg";


export default function Settings() {
  const [modalShow, setModalShow] = React.useState(false);
  const menu = [
	{ title: "Partner", icon: <UserIcon className="mr-2 h-5 w-5"/>,  handleClick: ()=>setModalShow(prev => !prev)},
	{ title: "Volunter", icon: <UserIcon className="mr-2 h-5 w-5"/>,  handleClick: ()=>setModalShow(prev => !prev) }
  ]
  return (
    <div className="space-y-5 lg:space-y-10 pb-10">
		<div className="mt-4">
			<DropdownMenu label="Create" options={menu} placement="left"/>
		</div>
		<div className="grid grid-cols-1 lg:grid-cols-3 gap-y-5 lg:gap-5">
			<div className="">
				<div className="mb-2 lg:mb-5">
					<ProfileCardWidget />
				</div>
				<ChoosePhotoWidget title="Select profile photo" photo={Profile1}/>
			</div>
			<div className="col-span-2 bg-white dark:bg-gray-700 p-1 md:p-2 lg:p-5 h-fit">
				<VolunteerTable/>
			</div>
		</div>
			
      	{modalShow && <CenteredModal heading="Create User" onHide={() => setModalShow(false)} render={() => (<UserForm /> )}/>}
    </div>
  );
};
