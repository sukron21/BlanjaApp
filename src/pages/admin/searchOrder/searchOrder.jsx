import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import NavAdmin from "../../../components/NavAdmin";

const SearchOrder = () => {
	const [name, setName] = useState("");
	const navigate = useNavigate();

	const onSubmit = (e) => {
		e.preventDefault();

		return navigate(`/admin/search-order/?search=${name}`);
	};

	return (
		<Fragment>
			<NavAdmin />
			<div className={`container-fluid row`}>
				<div className="d-flex justify-content-center align-items-center mt-5">
					<div className="col-8">
						<h1 className="text-center">Order list</h1>
					</div>
				</div>
				<div className="d-flex justify-content-center align-items-center mt-5">
					<div className="col-8">
						<form onSubmit={(e) => onSubmit(e)}>
							<div className="mb-3">
								<label htmlFor="searchAirlines" className="form-label">
									Search User Order
								</label>
								<input
									type="text"
									className="form-control"
									id="searchAirlines"
									aria-describedby="emailHelp"
									onChange={(e) => setName(e.target.value)}
								/>
							</div>
						</form>
					</div>
				</div>
			</div>
		</Fragment>
	);
};

export default SearchOrder;
