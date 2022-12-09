import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import NavAdmin from "../../../components/NavAdmin";
import style from "./style.module.css";

const HomeAdmin = () => {
	const user = useSelector((state) => state.user.user);

	return (
		<div>
			<NavAdmin />
			<div className={`container-fluid row`}>
				<div className={`${style.title}`}>
					<h2>Home</h2>
				</div>
				<div
					className={`${style.welcome} col-11 position-relative translate-middle-x start-50`}>
					<div className={`position-relative top-50 translate-middle-y`}>
						<h1>
							Hello, <span>{user.name}</span>!
						</h1>
						<p>Welcome to Blanja Admin Page</p>
						<Link className="btn btn-primary" to="/" role="button">
							Blanja Home
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HomeAdmin;
