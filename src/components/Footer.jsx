import React from "react";

export default function Footer(props) {
	return (
		<footer className="text-xs font-medium text-primary dark:text-white md:text-sm lg:text-base">
			<p className="text-center">
			Copyright © {`${new Date().getFullYear()} `}
			<a href="https://vuetifysolutions.netlify.app" target="_blank" rel="noreferrer" className="">
				Designed by Vuetify Solutions
			</a>
			</p>
		</footer>
	);
};
