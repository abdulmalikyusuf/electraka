import React from "react";

export const ColourPreferenceContext = React.createContext();
ColourPreferenceContext.displayName = "ColourPreference"

export default function ColourPreferenceProvider({ children }) {
    const [lightMode, setLightMode] = React.useState(
        () =>
            localStorage.getItem("color-theme") === "dark" ||
            (!("color-theme" in localStorage) &&
                window.matchMedia("(prefers-color-scheme: dark)").matches)
    );
    const [darkMode, setDarkMode] = React.useState(!lightMode);

    const toggleDarkMode = () => {
		setDarkMode(!darkMode);
		setLightMode(!lightMode);
		if (localStorage.getItem("color-theme")) {
			if (localStorage.getItem("color-theme") === "light") {
				document.documentElement.classList.add("dark");
				localStorage.setItem("color-theme", "dark");
			} else {
				document.documentElement.classList.remove("dark");
				localStorage.setItem("color-theme", "light");
			}

			// if NOT set via local storage previously
		} else {
			if (document.documentElement.classList.contains("dark")) {
				document.documentElement.classList.remove("dark");
				localStorage.setItem("color-theme", "light");
			} else {
				document.documentElement.classList.add("dark");
				localStorage.setItem("color-theme", "dark");
			}
		}
	};
    
    
    return (
        <ColourPreferenceContext.Provider value={{
            lightMode,
            darkMode,
            toggleDarkMode}}>
            {children}
        </ColourPreferenceContext.Provider>
    )
}