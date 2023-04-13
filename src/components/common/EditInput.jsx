import React from "react";

const EditInput = ({ type, placeHolder, ...rest }) => {
	return (
		<div>
			<input
				className="edit-input"
				type={type}
				placeholder={placeHolder}
				{...rest}
			/>
		</div>
	);
};

export default EditInput;
