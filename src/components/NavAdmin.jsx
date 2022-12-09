import React from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import style from "../assets/style/style.module.css";

const NavAdmin = () => {
	const user = useSelector((state) => state.user.user);
	const navigate = useNavigate();

	const logout = (e) => {
		e.preventDefault();
		localStorage.clear();
		return navigate("/admin");
	};

	return (
		<>
			<nav className="navbar bg-light">
				<div className="container-fluid">
					<div>
						<button
							className="btn btn-light"
							type="button"
							data-bs-toggle="offcanvas"
							data-bs-target="#offcanvasWithBothOptions"
							aria-controls="offcanvasWithBothOptions">
							Menu
						</button>

						<div
							className="offcanvas offcanvas-start"
							data-bs-scroll="true"
							tabIndex="-1"
							id="offcanvasWithBothOptions"
							aria-labelledby="offcanvasWithBothOptionsLabel">
							<div className="offcanvas-header">
								<h5
									className="offcanvas-title"
									id="offcanvasWithBothOptionsLabel">
									Menu
								</h5>
								<button
									type="button"
									className={`btn-close`}
									data-bs-dismiss="offcanvas"
									aria-label="Close"></button>
							</div>
							<div className="offcanvas-body">
								<div className="mb-3">
									<button
										className={`btn btn-secondary ${style.butts}`}
										type="button"
										data-bs-toggle="collapse"
										data-bs-target="#order"
										aria-expanded="false"
										aria-controls="order">
										Order
									</button>
									<div className="collapse" id="order">
										<div className="card card-body">
											<Link
												className={`${style.sideLink} ${style.mid}`}
												to="/admin/order">
												Order List
											</Link>
										</div>
									</div>
								</div>
								<div className="mb-3">
									<button
										className={`btn btn-secondary ${style.butts}`}
										type="button"
										data-bs-toggle="collapse"
										data-bs-target="#product"
										aria-expanded="false"
										aria-controls="product">
										Product
									</button>
									<div className="collapse" id="product">
										<div className="card card-body">
											<Link
												className={`${style.sideLink} ${style.mid}`}
												to="/admin/product">
												Product List
											</Link>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className={`d-flex`}>
						<ul className="navbar-nav">
							<li className="nav-item">
								<Link className="nav-link" aria-current="page" to="/admin/home">
									Admin Home
								</Link>
							</li>
						</ul>
						<div className="btn-group dropstart">
							<button
								type="button"
								className="btn btn-secondary dropdown-toggle mx-3"
								data-bs-toggle="dropdown"
								aria-expanded="false">
								{user.name}
							</button>
							<ul className="dropdown-menu">
								<li>
									<Link className="dropdown-item" to="">
										Reset Password
									</Link>
								</li>
								<li>
									<Link className="dropdown-item" onClick={(e) => logout(e)}>
										Logout
									</Link>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</nav>
		</>
	);
};

export default NavAdmin;
