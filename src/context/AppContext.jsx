import { createContext, useState, useEffect } from "react";
import useForm from "../hooks/useForm";
import { useNavigate } from "react-router-dom";

export const AppContext = createContext();
const AppContextProvider = ({ children }) => {
	//Function for mobile menu

	const [getUser, setGetUser] = useState(
		JSON.parse(localStorage.getItem("user"))
	); //geting user from localstorage
	const [user, setUser] = useState();

	const [refreshPage, setRefreshPage] = useState(false);

	//SEARCH
	const [query, setQuery] = useState("");

	const [cartItem, setCartItem] = useState(() => {
		const storeItems = localStorage?.getItem("cartItems");
		return storeItems ? JSON.parse(storeItems) : [];
	});

	const handleAddToCart = (product) => {
		const updatedItem = [...cartItem];
		const itemIndex = cartItem.findIndex((item) => item.id === product.id);

		if (itemIndex >= 0) {
			updatedItem[itemIndex] = {
				...updatedItem[itemIndex],
				quantity: updatedItem[itemIndex].quantity + 1,
			};
			setCartItem(updatedItem);
		} else {
			const newProductCart = [...cartItem, { ...product, quantity: 1 }];
			setCartItem(newProductCart);
		}
	};

	const handleRemoveFromCart = (id) => {
		const removeItem = [...cartItem];
		const newCartItems = removeItem.filter((item) => item.id !== id);
		setCartItem(newCartItems);
	};

	const handleCartIncreement = (id) => {
		const items = [...cartItem];
		const itemIndex = cartItem.findIndex((item) => item.id === id);
		items[itemIndex] = {
			...items[itemIndex],
			quantity: items[itemIndex].quantity + 1,
		};
		setCartItem(items);
	};

	const handleCartDecreement = (id) => {
		const items = [...cartItem];
		const itemIndex = cartItem.findIndex((item) => item.id === id);
		if (items[itemIndex].quantity > 1) {
			items[itemIndex] = {
				...items[itemIndex],
				quantity: items[itemIndex].quantity - 1,
			};
			setCartItem(items);
		} else {
			handleRemoveFromCart(id);
		}
	};

	const handleLogOut = () => {
		localStorage.removeItem("user");
		setRefreshPage(window.location.reload(true));
	};

	useEffect(() => {
		localStorage.setItem("cartItems", JSON.stringify(cartItem));
	}, [cartItem]);

	return (
		<AppContext.Provider
			value={{
				getUser,
				setGetUser,
				cartItem,
				setCartItem,
				handleAddToCart,
				handleRemoveFromCart,
				handleCartIncreement,
				handleCartDecreement,
				handleLogOut,
				setUser,
				refreshPage,
				setRefreshPage,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};

export default AppContextProvider;
