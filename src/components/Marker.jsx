import React from "react";
import { MapPinIcon } from "@heroicons/react/20/solid";
import {
	useFloating,
	useInteractions,
	useHover,
	useDismiss,
	offset,
	flip,
	shift,
} from "@floating-ui/react-dom-interactions";

function Marker(props) {
	const { place = "Point 1", lat = 11, lng = 13 } = props;
	const [tooltip, setToggleTooltip] = React.useState(false);
	const [open, setOpen] = React.useState(false);
	const { x, y, reference, floating, strategy, context } = useFloating({
		open,
		onOpenChange: setOpen,
		middleware: [offset(4), flip(), shift({ padding: 10 })],
		placement: "bottom",
	});
	const { getReferenceProps, getFloatingProps } = useInteractions([
		useHover(context, {
			enabled: true,
			delay: 1,
		}),
		useDismiss(context, {
			enabled: true,
			referencePress: true,
			ancestorScroll: true,
		}),
	]);

	return (
		<div className="">
            <MapPinIcon
				className="h-10 cursor-pointer"
				ref={reference}
				{...getReferenceProps()}
			/>
			{open && (<div class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
				<div
                ref={floating}
                {...getFloatingProps}
                style={{
                    position: strategy,
                    left: x ?? 0,
                    top: y ?? 0,
                }}
					role="tooltip"
					class="relative max-w-xs break-words rounded bg-gray-800 px-3 py-2 text-center text-xs font-medium text-gray-300 shadow-lg outline-none"
				>
					<svg
						class="absolute fill-gray-800"
						width="10"
						height="5"
						viewBox="0 0 30 10"
						style={{transform: "translate3d(30px,-13px,0)"}}
						preserveAspectRatio="none"
					>
						<polygon points="15,0 30,10 0,10"></polygon>
					</svg>
                    <h4 className="h5">{place}</h4>
					<p className="text-sm">
						Latitude: <span className="italic">{lat}</span>
					</p>
					<p className="text-sm">
						Longitude: <span className="italic">{lng}</span>
					</p>
				</div>
			</div>)}
			
			
		</div>
		// <>
		//     <MapPinIcon className="h-10" onMouseOver={()=>setToggleTooltip(true)} onMouseOut={()=>setToggleTooltip(false)}/>
		//     {tooltip &&
		//         <div className="w-72">
		//             <h4 className="h5">{place}</h4>
		//             <p className="text-sm">Latitude: <span className="italic">{lat}</span></p>
		//             <p className="text-sm">Longitude: <span className="italic">{lng}</span></p>
		//         </div>
		//     }
		// </>
	);
}

export default Marker;

        {/* {open && (
            <div
                ref={floating}
                {...getFloatingProps}
                className={`${strategy} top-[582px] left-[331px] bg-white py-1 w-44 rounded-lg font-medium text-gray-500 border border-gray-500`}
                style={{
                    position: strategy,
                    left: x ?? 0,
                    top: y ?? 0,
                }}
            >
                <h4 className="h5">{place}</h4>
                <p className="text-sm">
                    Latitude: <span className="italic">{lat}</span>
                </p>
                <p className="text-sm">
                    Longitude: <span className="italic">{lng}</span>
                </p>
            </div>
        )} */}