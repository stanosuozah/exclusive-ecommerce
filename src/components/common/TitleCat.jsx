import React from "react";

const TitleCat = ({ title }) => {
	return (
		<div className="title-cat">
			<div className="title-cat-box"></div>
			<h3>{title}</h3>
		</div>
	);
};

export default TitleCat;
