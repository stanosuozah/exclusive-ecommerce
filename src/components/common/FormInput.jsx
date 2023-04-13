import React from "react";

const FormInput = ({ type, placeholder, onChange, ...rest }) => {
	return (
		<input
			required
			onChange={onChange}
			className="form-input"
			type={type}
			placeholder={placeholder}
			{...rest}
		/>
	);
};

export default FormInput;
