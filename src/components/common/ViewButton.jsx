import React from "react";
import { Link } from "react-router-dom";

const ViewButton = ({ name }) => {
	return <button className="view-all-btn">{name}</button>;
};

export default ViewButton;
