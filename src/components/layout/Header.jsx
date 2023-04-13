import React, { useState } from "react";
import Banner from "../common/Banner";
import MainNav from "../common/MainNav";
import ProfileDropDown from "../common/ProfileDropDown";

const Header = () => {
	const [display, setDisplay] = useState(false);
	return (
		<header className="header">
			<Banner />
			<MainNav
				display={display}
				setDisplay={setDisplay} //passing state variables to MainNav
			/>
			{display && <ProfileDropDown setDisplay={setDisplay} />}
		</header>
	);
};

export default Header;
