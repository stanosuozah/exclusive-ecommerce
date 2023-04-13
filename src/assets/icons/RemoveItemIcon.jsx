import React from "react";

const RemoveItemIcon = ({ onClick }) => {
	return (
		<div>
			<svg
				style={{ cursor: "pointer" }}
				onClick={onClick}
				className="remove-item-icon"
				width="8"
				height="8"
				viewBox="0 0 8 8"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M1 7L4 4M7 1L3.99943 4M3.99943 4L1 1M4 4L7 7"
					stroke="white"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</svg>
		</div>
	);
};

export default RemoveItemIcon;
