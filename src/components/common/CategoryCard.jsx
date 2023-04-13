import React from "react";

const CategoryCard = ({ name, image }) => {
	return (
		<div className="category-card">
			{image}
			<h3>{name}</h3>
		</div>
	);
};

export default CategoryCard;
