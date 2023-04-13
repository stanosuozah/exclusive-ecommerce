import React from "react";

const IncrementIcon = ({ onClick }) => {
	return (
		<div className="increment-quantity-icon">
			<svg
				onClick={onClick}
				width="9"
				height="6"
				viewBox="0 0 9 6"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M4.75732 2.36666L1.45732 5.66666L0.514648 4.72399L4.75732 0.481323L8.99998 4.72399L8.05732 5.66666L4.75732 2.36666Z"
					fill="black"
				/>
			</svg>
		</div>
	);
};

export default IncrementIcon;
