import React from "react";
import { EllipsisVerticalIcon } from '@heroicons/react/20/solid'
import { useFloating, offset, shift, flip, useClick, useDismiss, useInteractions } from "@floating-ui/react-dom-interactions";

// import App from "../components/Charts"
import { EllipsisHorizontalIcon } from "@heroicons/react/24/outline";
import { BarChart, PieChart } from "../components/Charts";
import { partyVotes, votesValidity } from "../data/electraka";
import Events from "../assets/events.png"
import Modal from "../components/Modal";
import { lgas } from "../data/lgas";


export default function DashboardOverview() {
  const [showModal, setShowModal] = React.useState(false);

  
	return (
		<main className="mt-[60px] space-y-[30px]">
			<div className="flex flex-col xl:flex-row space-y-[30px] xl:space-y-0 xl:space-x-[30px] ">
				<div className="space-y-[30px] xl:w-1/2">
					<div className="grid grid-flow-row grid-cols-2 lg:grid-cols-3 gap-[30px]">
						{cards.map(card => (
							<div className={`${card.backgroundColour1} text-${card.textColor} rounded-xl p-5 space-y-5 text-white`}>
								<div className="flex items-center justify-between">
									<p className="text-xs font-bold leading-none whitespace-normal -5">{card.title}</p>
									<button className="h-[30px] w-[30px]">
										<EllipsisHorizontalIcon className="w-4 h-4"/>
									</button>
								</div>
								<h4 className="text-center text-[22px] leading-[30px] font-bold">{card.value}</h4>
								<div className="flex items-stretch">
									<button className={`p-[3px] mr-3 rounded-full text-${card.textColor} ${card.backgroundColour2}`}>
										<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
										<path fill-rule="evenodd" clip-rule="evenodd" d="M12 4C7.584 4 4 7.584 4 12C4 16.416 7.584 20 12 20C16.416 20 20 16.416 20 12C20 7.584 16.416 4 12 4ZM15.2 12.8H12.8V15.2C12.8 15.64 12.44 16 12 16C11.56 16 11.2 15.64 11.2 15.2V12.8H8.8C8.36 12.8 8 12.44 8 12C8 11.56 8.36 11.2 8.8 11.2H11.2V8.8C11.2 8.36 11.56 8 12 8C12.44 8 12.8 8.36 12.8 8.8V11.2H15.2C15.64 11.2 16 11.56 16 12C16 12.44 15.64 12.8 15.2 12.8Z" fill="white"/>
										</svg>
									</button>
									<button className={`flex items-center justify-center py-[5px] px-[15px] rounded-[15px] bg-[${card.backgroundColour2}]`}>
										<span className="font-bold text-[10px] leading-5 text-center">View All</span>
									</button>
								</div>


							</div>
						))}
					</div>
					<div className="bg-white">
						<div className="py-5 px-[25px] text-[#ADB8CC] flex justify-between border-b border-slate-200 dark:border-slate-200/5">
							<h6 className="text-[13px] leading-[25px] tracking-tighter font-bold text-[#4D5E80]">Party Votes</h6>
							<ul className="flex space-x-8 whitespace-nowrap">
								<li onClick={()=>setShowModal(true)} className="-mb-[22px] px-2 cursor-pointer text-sm font-medium leading-5 border-b-4 border-[#8833FF] text-[#8833FF] hover:border-slate-300 dark:text-slate-200 dark:hover:border-slate-700">
									LGA
								</li>
								<li className="-mb-[22px] px-2 cursor-pointer text-sm font-medium leading-5 border-b-4 border-transparent hover:border-slate-300 dark:text-slate-200 dark:hover:border-slate-700">
									Ward
								</li>
							</ul>
							<button>
								<EllipsisVerticalIcon className="w-[30px] h-[30px]"/>
							</button>
						</div>
						<div className="mt-[30px] pb-8 flex">
						<PieChart {...votesValidity}/>
						<div className="space-y-2">
							<div className="bg-blue/[0.05] rounded-[10px] py-2 flex flex-col items-center justify-center px-8 text-blue/[0.8]">
								<h6 className="text-sm leading-[30px] font-bold">167</h6>
								<p className="text-[10px] leading-5 font-bold">All Progressive Congress</p>
							</div>
							<div className="bg-blue/[0.05] rounded-[10px] py-2 flex flex-col items-center justify-center px-8 text-blue/[0.8]">
								<h6 className="text-sm leading-[30px] font-bold">60</h6>
								<p className="text-[10px] leading-5 font-bold">People's Democratic Party</p>
							</div>
							<div className="bg-blue/[0.05] rounded-[10px] py-2 flex flex-col items-center justify-center px-8 text-blue/[0.8]">
								<h6 className="text-sm leading-[30px] font-bold">10</h6>
								<p className="text-[10px] leading-5 font-bold">New Nigeria People Party</p>
							</div>
						</div>
					</div>
						
					</div>
				</div>
				<div className="px-[25px] lg:flex-1 bg-white">
					<div className="flex justify-between py-5 border-b-2 border-[#F5F6F7]">
						<h6 className="text-[13px] leading-[25px] font-bold text-[#6B7A99]">Latest Events</h6>
						<EllipsisVerticalIcon className="h-[30px] w-[30px]"/>
					</div>
					<div>
						<img src={Events} alt="" className="w-fit h-fit"/>
					</div>
				</div>
			</div>
			<div className="bg-white">
				<div className="py-5 px-[25px] text-[#ADB8CC] flex justify-between border-b border-slate-200 dark:border-slate-200/5">
					<h6 className="text-[13px] leading-[25px] tracking-tighter font-bold text-[#4D5E80]">Votes Cast/APC Votes</h6>
					<ul className="flex space-x-4">
						<li className="-mb-[22px] px-2 cursor-pointer text-sm font-medium leading-5 border-b-4 border-[#8833FF] text-[#8833FF] hover:border-slate-300 dark:text-slate-200 dark:hover:border-slate-700">
							LGA
						</li>
						<li onClick={()=>setShowModal(true)} className="-mb-[22px] px-2 cursor-pointer text-sm font-medium leading-5 border-b-4 border-transparent hover:border-slate-300 dark:text-slate-200 dark:hover:border-slate-700">
							Ward
						</li>
					</ul>
					<button>
						<EllipsisVerticalIcon className="w-[30px] h-[30px]"/>
					</button>
				</div>
				<div className="mt-[30px] flex">
					<BarChart {...partyVotes}/>
					{/* <App data={partyVotes}/> */}
				</div>
			</div>
			<div className="flex flex-col space-y-8 md:space-y-0 md:space-x-4 md:flex-row">
				<div className="bg-white md:w-1/2">
					<div className="py-5 px-[25px] text-[#ADB8CC] flex justify-between border-b border-slate-200 dark:border-slate-200/5">
						<h6 className="text-[13px] leading-[25px] tracking-tighter font-bold text-[#4D5E80]">Registered Voters/Votes Cast</h6>
						<ul className="flex space-x-4">
							<li className="-mb-[22px] px-2 cursor-pointer text-sm font-medium leading-5 border-b-4 border-[#8833FF] text-[#8833FF] hover:border-slate-300 dark:text-slate-200 dark:hover:border-slate-700">
								LGA
							</li>
							<li onClick={()=>setShowModal(true)} className="-mb-[22px] px-2 cursor-pointer text-sm font-medium leading-5 border-b-4 border-transparent hover:border-slate-300 dark:text-slate-200 dark:hover:border-slate-700">
								Ward
							</li>
						</ul>
						<button>
							<EllipsisVerticalIcon className="w-[30px] h-[30px]"/>
						</button>
					</div>
					<div className="mt-[30px] flex">
						<BarChart {...votesValidity}/>
					</div>
				</div>
				<div className="bg-white md:w-1/2">
					<div className="py-5 px-[25px] text-[#ADB8CC] flex justify-between border-b border-slate-200 dark:border-slate-200/5">
						<h6 className="text-[13px] leading-[25px] tracking-tighter font-bold text-[#4D5E80]">Valid/Invalid votes</h6>
						<ul className="flex space-x-8 whitespace-nowrap">
							<li className="-mb-[22px] px-2 cursor-pointer text-sm font-medium leading-5 border-b-4 border-[#8833FF] text-[#8833FF] hover:border-slate-300 dark:text-slate-200 dark:hover:border-slate-700">
								LGA
							</li>
							<li onClick={()=>setShowModal(true)} className="-mb-[22px] px-2 cursor-pointer text-sm font-medium leading-5 border-b-4 border-transparent hover:border-slate-300 dark:text-slate-200 dark:hover:border-slate-700">
								Ward
							</li>
						</ul>
						<button>
							<EllipsisVerticalIcon className="w-[30px] h-[30px]"/>
						</button>
					</div>
					<div className="mt-[30px]">
						<BarChart {...votesValidity}/>
						
					</div>
					
				</div>
			</div>
				
			{showModal && <Modal heading="Create new Project" onHide={() => setShowModal(false)} render={() => (
				<div className="bg-white">
					<ul className="grid grid-flow-row grid-cols-2 gap-x-20">
						{lgas.map(lga => (
						<li className="px-2 text-lg font-medium leading-normal cursor-pointer hover:bg-gray-100">
							<label htmlFor={lga}>
								<input onClick={()=>setShowModal(false)} type="radio" name="lga" value={lga} className="mr-2"/>{lga}
							</label>
						</li>
						))}
					</ul>

				</div>
			)}/>}
		</main>
	);
};


function Dropdown({children}) {
	const [open, setOpen] = React.useState(false);
	const {x, y, reference, floating, strategy, context} = useFloating({
		open,
		onOpenChange: setOpen,
		middleware: [offset(4), flip(), shift({padding: 10})],
		placement: "bottom"
	});
	const {getReferenceProps, getFloatingProps} = useInteractions([
		useClick(context, {
			enabled: true,
			event: 'mousedown'
		}),
		useDismiss(context, {
			enabled: true,
			referencePress: true,
			ancestorScroll: true
		})
	])
	return (
		<div className="">
			<button ref={reference} {...getReferenceProps()}>
				{children}
			</button>
			{open && 
			<div ref={floating} {...getFloatingProps} className={`${strategy} bg-white py-1 w-44 rounded-lg font-medium text-gray-500 border border-gray-500`}
				style={{
					position: strategy,
					left: x ?? 0,
					top: y ?? 0
					}}
			>
				<p>Zone</p>
				<p>LGA</p>
				<p>Ward</p>
			</div>
			}
		</div>

	)
}


<div className="mt-[30px] flex">
						<PieChart {...votesValidity}/>
						{/* <div className="grid grid-cols-2 grid-rows-2 gap-[10px]">
							<div className="bg-blue/[0.05] rounded-[10px] py-[15px] flex flex-col items-center justify-center px-11 text-blue/[0.8]">
								<h6 className="text-sm leading-[30px] font-bold">75</h6>
								<p className="text-[10px] leading-5 font-bold">Grade</p>
							</div>
							<div className="bg-blue/[0.05] rounded-[10px] py-[15px] flex flex-col items-center justify-center px-11 text-blue/[0.8]">
								<h6 className="text-sm leading-[30px] font-bold">75</h6>
								<p className="text-[10px] leading-5 font-bold">Grade</p>
							</div>
							<div className="bg-blue/[0.05] rounded-[10px] py-[15px] flex flex-col items-center justify-center px-11 text-blue/[0.8]">
								<h6 className="text-sm leading-[30px] font-bold">75</h6>
								<p className="text-[10px] leading-5 font-bold">Grade</p>
							</div>
							<div className="bg-blue/[0.05] rounded-[10px] py-[15px] flex flex-col items-center justify-center px-11 text-blue/[0.8]">
								<h6 className="text-sm leading-[30px] font-bold">75</h6>
								<p className="text-[10px] leading-5 font-bold">Grade</p>
							</div>
						</div> */}
					</div>

    // <div className="flex flex-col pb-10 mt-5 space-y-5 lg:space-y-10">
    //   	<div className="space-y-4">
	// 	    <DropdownMenu label="Filter" options={menu} placement="left"/>
	// 		<div className="p-5 bg-white dark:bg-gray-700">
	// 			<ProjectWidget title="STI Performance Indicator" subtitle={"10,578 Projects across 9 STI Pillars"} chartData={pillarProjects}/>
	// 		</div>
    //   	</div>

	// 	<div className="grid grid-cols-1 gap-2 sm:grid-cols-2 xl:grid-cols-4 lg:gap-5">
	// 		{themanticPillarProjects.map(pillar =>
	// 			<CardWidget key={pillar.code} title={`${pillar.label}`} value={pillar.value}
	// 				icon={<pillar.icon className="w-8 h-8 md:h-10 md:w-10"/>}/>
	// 		)}
	// 	</div>	

	// 	<div className="grid grid-cols-1 gap-4 lg:grid-cols-2 md:gap-10">
	// 		<div className="p-2 bg-white rounded-lg col-span-full lg:col-span-1 dark:bg-gray-700 md:p-4 md:rounded-xl">
	// 			<LineChartWidget title="Completed Project across LGAs" {...lgaProjects} />
	// 		</div>
	// 		<div className="p-2 bg-white rounded-lg col-span-full lg:col-span-1 dark:bg-gray-700 md:p-4 md:rounded-xl">
	// 			<PieChartWidget title="Projects by Themantic Pillars" {...themanticSectors} />
	// 		</div>
	// 	</div>
	// 	<div className="p-5 bg-white dark:bg-gray-700">
	// 		<ProjectWidget title="Projects across LGAs" heading={false} subtitle={"10,578 Projects across 27 LGAs"} chartData={projectData}/>
	// 	</div>
    //   {showProjectModal && <Modal heading="Create new Project" onHide={() => setProjectModal(false)} render={() => (<ProjectForm /> )}/>}
    //   {showUserModal && <Modal heading="Create User" onHide={() => setUserModal(false)} render={() => (<UserForm /> )}/>}
    // </div>

const cards = [
	{
		backgroundColour1: "bg-[#29CC39]",
		backgroundColour2: "bg-[#13BF24]",
		title: "LGAs",
		value: "1 345"
	},
	{
		backgroundColour1: "bg-[#8833FF]",
		backgroundColour2: "bg-[#7919FF]",
		title: "Wards",
		value: "12 456"
	},
	{
		backgroundColour1: "bg-[#FF6633]",
		backgroundColour2: "bg-[#E64B17]",
		title: "PUs",
		value: "21"
	},
	{
		backgroundColour1: "bg-[#33BFFF]",
		backgroundColour2: "bg-[#17A5E6]",
		title: "Registered Political Parties",
		value: "1 220"
	},
	{
		backgroundColour1: "bg-[#1A2233]",
		backgroundColour2: "bg-[#26334D]",
		title: "Estimated population",
		value: "65"
	},
	{
		backgroundColour1: "bg-white",
		backgroundColour2: "bg-[#F7F8FA]",
		title: "Total number of registered voters",
		value: "9 876",
		textColor: "black"
	},
]