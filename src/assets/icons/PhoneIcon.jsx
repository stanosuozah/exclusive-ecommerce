import React from "react";

const PhoneIcon = ({ className }) => {
	return (
		<svg
			className={className}
			width="30"
			height="46"
			viewBox="0 0 30 46"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M25.9375 1.125H4.0625C2.55235 1.125 1.32812 2.34922 1.32812 3.85938V42.1406C1.32812 43.6508 2.55235 44.875 4.0625 44.875H25.9375C27.4477 44.875 28.6719 43.6508 28.6719 42.1406V3.85938C28.6719 2.34922 27.4477 1.125 25.9375 1.125Z"
				stroke="black"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M12.6667 2H18.1354"
				stroke="black"
				strokeWidth="3"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M15 39.0052V39.0305"
				stroke="black"
				strokeWidth="2.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<line
				x1="2.16667"
				y1="34.8334"
				x2="27.8333"
				y2="34.8334"
				stroke="black"
				strokeWidth="2"
			/>
		</svg>
	);
};

export default PhoneIcon;
