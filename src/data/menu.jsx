import { UserGroupIcon } from "@heroicons/react/20/solid";
import { ChartPieIcon, DocumentIcon, PaperClipIcon, MapIcon, Cog6ToothIcon, BuildingLibraryIcon, ViewColumnsIcon, VideoCameraIcon, VariableIcon } from "@heroicons/react/24/outline"

const menu = [
    {
        title: "Dashboard Overview",
        icon: <ChartPieIcon className="w-6 h-6"/>,
        link: "/home"
    },
    {
        title: "Sites",
        icon: <MapIcon className="w-6 h-6"/>,
        link: "/sites"
    },
    {
        title: "User Settings",
        icon: <Cog6ToothIcon className="w-6 h-6"/>,
        link: "/settings"
    },
]

export default menu;