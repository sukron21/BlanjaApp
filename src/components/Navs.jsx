import React, { Fragment } from "react";
import Navbar from "./Navbar";
import NavbarLogin from "./NavbarLogin";

const Navs = () => {
	const token = localStorage.getItem("token");
	return <Fragment>{!token ? <Navbar /> : <NavbarLogin />}</Fragment>;
};

export default Navs;
