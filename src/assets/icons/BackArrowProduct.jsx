import React from "react";

const BackArrowProduct = ({ onClick }) => {
	return (
		<svg
			onClick={onClick}
			className="arrow-nav"
			width="16.5"
			height="14"
			viewBox="0 0 18 16"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M8 1L1 8L8 15M1 8H17"
				stroke="black"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};

export default BackArrowProduct;
