import React from "react";

const RadioButton = ({ color, ...rest }) => {
	return <input type="radio" color {...rest} className="product-color-input" />;
};

export default RadioButton;
