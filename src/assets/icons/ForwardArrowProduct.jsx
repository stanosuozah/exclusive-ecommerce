import React from "react";

const ForwardArrowProduct = ({ onClick }) => {
	return (
		<svg
			onClick={onClick}
			className="arrow-nav"
			width="16.5"
			height="14"
			viewBox="0 0 19 16"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M1.5 8H18M18 8L11 1M18 8L11 15"
				stroke="black"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};

export default ForwardArrowProduct;
