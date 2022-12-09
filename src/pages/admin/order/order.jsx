import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import NavAdmin from "../../../components/NavAdmin";
import style from "./style.module.css";

const Order = () => {
	const [order, setOrder] = useState([]);

	// get order
	useEffect(() => {
		axios
			.get(`${process.env.REACT_APP_BACKEND_URL}/order`)
			.then((response) => {
				setOrder(response.data.data.rows);
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);

	return (
		<Fragment>
			<NavAdmin />
			<div className={`container-fluid row`}>
				<div className="d-flex justify-content-center align-items-center mt-5">
					<div className="col-8">
						<h1 className="text-center">Order list</h1>
						{order.length === 0 ? (
							<h1>No order found!</h1>
						) : (
							order.map((item, index) => (
								<div key={index}>
									<div className="border p-3 d-flex flex-row rounded mb-3">
										<div className="me-3">
											<img
												src={`${process.env.REACT_APP_BACKEND_URL}/${item.photo.split('||')[0]}`}
												alt=""
												className={`rounded ${style.productImage}`}
											/>
										</div>
										<div className="col-4 boder-end">
											<h4 className="fontMedium">{item.product_name}</h4>
											<p className="text-secondary">
												Price: ${item.price} ||
												<span>
													{" "}
													Size:{" "}
													{item.item_size === "1"
														? "XS"
														: item.item_size === "2"
														? "S"
														: item.item_size === "3"
														? "M"
														: item.item_size === "4"
														? "L"
														: "XL"}
												</span>
											</p>
											<p className="text-secondary">Color: {item.item_color}</p>
										</div>
										<div className="col-4">
											<h4 className="fontMedium">Order by:</h4>
											<p className="text-secondary">{item.name}</p>
											<p className="text-secondary">
												Quantity: {item.quantity}
											</p>
										</div>
										<div className="col-4">
											<h4 className="fontMedium">Total Price:</h4>
											<p className="text-secondary">
												$ {item.price * item.quantity}
											</p>
										</div>
									</div>
								</div>
							))
						)}
					</div>
				</div>
			</div>
		</Fragment>
	);
};

export default Order;
