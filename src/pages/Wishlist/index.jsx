import React from "react";
import CartButton from "../../components/common/CartButton";
import Gucci from "/gucci.png";
import RGB from "/RGB.png";
import SmallBookShelf from "/SmallBookShelf.png";
import TheNorthCoat from "/TheNorthCoat.png";
import ProductCard from "../../components/common/ProductCard";

const Wishlist = ({ number }) => {
	return (
		<div className="flex flex-col">
			<div>
				<div className="flex">
					<h3>Wishlist</h3>
					<p>({number})</p>
				</div>
				<CartButton name="Move All To Bag" />
			</div>
			<div>
				<ProductCard
					name="The north coat"
					image={TheNorthCoat}
					price="260"
					discountPrice="360"
				/>
				<ProductCard
					image={Gucci}
					name="Gucci duffle bag"
					price="960"
					discountPrice="1160"
				/>
				<ProductCard
					image={RGB}
					name="RGB liquid CPU Cooler"
					price="160"
					discountPrice="170"
				/>
				<ProductCard
					image={SmallBookShelf}
					name="Small BookSelf "
					price="360"
				/>
			</div>
		</div>
	);
};

export default Wishlist;
