import React, { Fragment, useEffect, useState } from "react";
import style from "../../assets/style/style.module.css";
import star from "../../assets/images/Star.png";
import bar from "../../assets/images/bar.png";
import { useParams } from "react-router-dom";
import axios from "axios";

const ProductReview = () => {
	const [details, setDetails] = useState({});
	const { id_product } = useParams();

	useEffect(() => {
		axios
			.get(`${process.env.REACT_APP_BACKEND_URL}/product/${id_product}`)
			.then((response) => {
				setDetails(response.data.data.rows[0]);
			})
			.catch((error) => {
				console.log(error);
			});
	}, [id_product]);

	return (
		<Fragment>
			<div className={`container-fluid row ${style.borderBottom}`}>
				<div className="col-12">
					<h3 className="fontBold my-4">Informasi Produk</h3>
					<div>
						<h5 className="fontMedium">Condition</h5>
						{details.condition == 1 ? (
							<p className={`fontMedium text-danger ${style.ups}`}>Old</p>
						) : (
							<p className={`fontMedium text-danger ${style.ups}`}>New</p>
						)}
					</div>
					<div>
						<h5 className="fontMedium">Description</h5>
						<p className="text-secondary">{details.description}</p>
					</div>
					<div className="row">
						<h3 className="fontBold my-4">Review</h3>
						<div className="col-md-6 col-12 row">
							<div className="col-md-5 col-6">
								<h1 className={`fontMedium d-inline ${style.ratings}`}>5.0</h1>
								<p className="text-secondary d-inline">/ 5</p>
								<div className="d-flex flex-row">
									<img src={star} alt="" className="me-1" />
									<img src={star} alt="" className="me-1" />
									<img src={star} alt="" className="me-1" />
									<img src={star} alt="" className="me-1" />
									<img src={star} alt="" className="me-1" />
								</div>
							</div>
							<div className="col-6">
								<div className={`d-flex flex-row`}>
									<div className="me-2">
										<img src={star} alt="" className="me-1 my-auto" />
									</div>
									<p className="text-secondary me-2">5</p>
									<div className="me-2">
										<img src={bar} alt="" className="my-auto" />
									</div>
									<p className="text-secondary">4</p>
								</div>
								<div className={`d-flex flex-row ${style.ups}`}>
									<div className="me-2">
										<img src={star} alt="" className="me-1 my-auto" />
									</div>
									<p className="text-secondary me-2">5</p>
									<div className="me-2">
										<img src={bar} alt="" className="my-auto" />
									</div>
									<p className="text-secondary">4</p>
								</div>
								<div className={`d-flex flex-row ${style.ups}`}>
									<div className="me-2">
										<img src={star} alt="" className="me-1 my-auto" />
									</div>
									<p className="text-secondary me-2">5</p>
									<div className="me-2">
										<img src={bar} alt="" className="my-auto" />
									</div>
									<p className="text-secondary">4</p>
								</div>
								<div className={`d-flex flex-row ${style.ups}`}>
									<div className="me-2">
										<img src={star} alt="" className="me-1 my-auto" />
									</div>
									<p className="text-secondary me-2">5</p>
									<div className="me-2">
										<img src={bar} alt="" className="my-auto" />
									</div>
									<p className="text-secondary">4</p>
								</div>
								<div className={`d-flex flex-row ${style.ups}`}>
									<div className="me-2">
										<img src={star} alt="" className="me-1 my-auto" />
									</div>
									<p className="text-secondary me-2">5</p>
									<div className="me-2">
										<img src={bar} alt="" className="my-auto" />
									</div>
									<p className="text-secondary">4</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Fragment>
	);
};

export default ProductReview;
