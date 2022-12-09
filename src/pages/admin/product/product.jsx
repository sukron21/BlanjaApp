import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import NavAdmin from "../../../components/NavAdmin";
import style from "./style.module.css";

const AdminProduct = () => {
	const [product, setProduct] = useState([]);
	const [delProduct, setDelProduct] = useState([]);
	console.log(product);

	// get product
	useEffect(() => {
		axios
			.get(`${process.env.REACT_APP_BACKEND_URL}/product`)
			.then((response) => {
				setProduct(response.data.data.rows);
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);

	// delete product
	const deleteProduct = (id_product, e) => {
		e.preventDefault();
		axios
			.delete(`${process.env.REACT_APP_BACKEND_URL}/product/${id_product}`)
			.then((result) => {
				console.log(result);

				const posts = delProduct.filter(
					(item) => item.id_product !== id_product
				);

				setDelProduct({ data: posts });
				alert("Product berhasil dihapus");
			})
			.catch((error) => {
				console.log(error);
			});
	};

	return (
		<Fragment>
			<NavAdmin />
			<div className={`container-fluid row`}>
				<div className="d-flex justify-content-center align-items-center mt-5">
					<div className="col-8">
						<h1 className="text-center">Product list</h1>
						{product.length === 0 ? (
							<h1>No order found!</h1>
						) : (
							product.map((item, index) => (
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
													{item.size === 0
														? "XS"
														: item.size === 1
														? "S"
														: item.size === 2
														? "M"
														: item.size === 3
														? "L"
														: "XL"}
												</span>
											</p>
											<p className="text-secondary">Color: {item.color}</p>
										</div>
										<div className="col-4">
											<h4 className="fontMedium">Shope name:</h4>
											<p className="text-secondary">{item.name}</p>
											<p className="text-secondary">
												Condition: {item.condition == 0 ? "New" : "Used"}
											</p>
										</div>
										<div className="col-4 d-flex my-auto">
											<button
												type="button"
												className="btn btn-danger"
												onClick={(e) => deleteProduct(item.id_product, e)}>
												Delete Product
											</button>
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

export default AdminProduct;
