import React from "react";
import { UserCircleIcon, PaperClipIcon } from "@heroicons/react/20/solid";
import GoogleMapReact from 'google-map-react';

import { PieChart, BarChart, ProjectChart, LineChart, AreaChart } from "./Charts";
import ProfileCover from "../assets/img/profile-cover.jpg";
import Marker from "./Marker";
import { lgas } from "../data/lgas";


export const ProfileCardWidget = () => {
  return (
    <div className="flex flex-col justify-center bg-white dark:bg-gray-700 rounded-2xl">
      <div className="">
        <img src={ProfileCover} alt="Cover for profile" className="object-cover rounded-t-2xl"/>
      </div>
      <div className="flex flex-col items-center -translate-y-20">
        <UserCircleIcon className="w-48" />
        <div className="text-center">
          <h5 className="h5">Admin User</h5>
          <h6 className="h6">Project Supervisor</h6>
          <p className="font-thin">Borno, Nigeria</p>
        </div>
      </div>
    </div>
  );
};

export const ChoosePhotoWidget = (props) => {
  const { title, photo } = props;

	return (
		<div className="p-5 overflow-hidden bg-white shadow-sm dark:bg-gray-700 rounded-2xl">
			<h4 className="leading-relaxed h4">{title}</h4>
			<div className="grid grid-cols-5 gap-2">
				<div className="col-span-2">
					<img src={ProfileCover} alt="Cover for profile" className="object-cover w-full h-full"/>
				</div>
				<div className="col-span-3">
					{/* <input type="file" className="hidden"/>
					<div className="font-medium">Choose Image</div> */}
						<label htmlFor="profile-photo-upload" className="">
							<PaperClipIcon className="w-10 h-10 cursor-pointer" />
							<input type="file" id="profile-photo-upload" className="hidden" onChange={(evt)=>{}}/>
						</label>
					<p className="text-xs">JPG, GIF or PNG. Max size of 800K</p>
				</div>
			</div>
		</div>
	);
};

export const CardWidget = (props) => {
  const { icon, title, value} = props;

	return (
		<div className="h-full p-8 bg-white rounded-lg shadow-md dark:bg-gray-700 md:p-4">
			<div className="items-center justify-between xl:flex">
				<div className="flex items-center xl:w-1/3">
					<div className="rounded">{icon}</div>
					<div className="ml-10 sm:hidden md:ml-4">
						<h3 className="h4">{title}</h3>
						<h5 className="h5">{value} Projects</h5>
					</div>
				</div>
				<div className="xl:w-2/3">
					<div className="hidden sm:block">
						<h5 className="h5">{title}</h5>
						<h6 className="h6">{value} Projects</h6>
					</div>
				</div>
			</div>
		</div>
	);
};

export const PieChartWidget = (props) => {
  const { title, series, labels, colors, extraProps } = props;

  return (
    <div className="">
        <h5 className="text-center h5">{title}</h5>
		<hr/>
        <div className="flex items-center justify-center mt-8 space-x-4">
			<div className="w-2/3 md:max-w-80 lg:max-w-xs">
				<PieChart series={series} labels={labels} colors={colors}/>
			</div>
			<div className="w-1/3">
				{extraProps.map(label => (
				<h6 key={label.code} className="flex items-center space-x-2 text-gray-500 h6 lg:text-sm xl:h6">
					<label.icon className={``} />
					<span>{`${label.code} - ${label.value}`}</span>
				</h6>
				))}
			</div>
        </div>
    </div>
  );
};

export const BarChartWidget = (props) => {
  const { title, value, data = [], heading=true } = props;
  const labels = ['JRE', 'MMC', 'BIU', 'BAM', 'BGA', 'DMB'];
  const series = data.map(d => d.value);

  return (
    <div border="light" className="shadow-sm">
      <div className="flex-row d-flex align-items-center flex-0 border-bottom">
        <div className="d-block">
          <h6 className="mb-2 fw-normal text-gray">{title}</h6>
          {/* <h3>N{value}</h3> */}
        </div>
        <div className="d-block ms-auto">
          {data.map(d => (
            <div key={`bar-element-${d.id}`} className="mb-2 d-flex align-items-center text-end text-nowrap">
              <span className={`shape-xs rounded-circle bg-${d.color} me-2`} />
              <small className="fw-normal">{d.label}</small>
            </div>
          ))}
        </div>
      </div>
      <div className="p-2">
        <BarChart labels={labels} series={series}/>
      </div>
    </div>
  );
};

export const LineChartWidget = (props) => {
  const { title, value, data = [] } = props;
  const labels = lgas;
  const series = [
    [45, 26, 32, 75, 1, 22, 72, 72, 28, 65, 19, 6, 66, 49, 44, 87, 33, 47, 23, 98, 36, 84, 96, 42, 82, 51, 23, 66],
    [45, 26, 32, 75, 1, 22, 72, 72, 28, 65, 19, 6, 66, 49, 44, 87, 33, 47, 23, 98, 36, 84, 96, 42, 82, 51, 23, 66].map(number => number-10)
  ]

  return (
    <div className="shadow-sm">
    	<h5 className="text-center h5">{title}</h5>
      <hr/>
      <div className="w-full mt-4">
        <LineChart labels={labels} series={series}/>
      </div>
    </div>
  );
};

export const AreaChartWidget = (props) => {
  const { title, labels, series } = props;

  return (
    <div className="shadow-sm">
    	<h5 className="text-center h5">{title}</h5>
      <hr/>
      <div className="w-full mt-4">
        <AreaChart labels={labels} series={series}/>
      </div>
    </div>
  );
};

export const ProjectWidget = (props) => {
  const { title, subtitle, heading=true, chartData } = props;
  return (
    <div className="shadow-sm">
      {heading &&
        <div className="mb-4 text-center border-b-2">
          <h3 className="mb-0 text-center h3">{title}</h3>
          <h5 className="h5">{subtitle}</h5>
        </div>
      }
      <div className="">
        <ProjectChart chartData={chartData}/>
      </div>
    </div>
  );
};


export function MapWidget({ coordinates }){
  const defaultProps = {
    center: {
      lat: 11.802926900993862,
      lng: 13.171610913316805
    },
    zoom: 12
  };
  const [center, setCenter] = React.useState({lat: 11.802926900993862, lng: 13.171610913316805})
  const [zoom, setZoom] = React.useState(11)

  const handleChange = ({center, zoom }) => {
    setCenter(center);
    setZoom(zoom)
  }
  
  return (
    // Important! Always set the container height explicitly
    <div className="w-full h-screen -z-20">
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAP_API_KEY }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
        center={center}
        onChange={handleChange}>
          {coordinates.map(coordinate => (
            <Marker key={coordinate.lat} lat={coordinate.lat} lng={coordinate.lng} place={coordinate.place}/>
          ))}
      </GoogleMapReact>
    </div>
  );
}