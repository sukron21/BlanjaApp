import React, { Fragment, useEffect, useState } from "react";
import ProductReview from "../../components/product/ProductReview";
import OtherProduct from "../../components/product/OtherProduct";
import { Helmet } from "react-helmet";
import Navs from "../../components/Navs";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { selectReceiver } from "../../redux/action/chat";
import style from "../../assets/style/style.module.css";
import star from "../../assets/images/Star.png";
import Swal from 'sweetalert2';

const Product = () => {
	const [active, setActive] = useState();
	const [jumlah, setJumlah] = useState(1);
	const { id_product } = useParams();
	const [details, setDetails] = useState({});
	const [size, setSize] = useState();
	const dispatch = useDispatch();

	const user = useSelector((state) => state.user.user);

	// Get product detail
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

	const [product, setProduct] = useState({
		userid: user.id_user,
		item: parseInt(id_product),
		status: 0,
	});

	const onSubmit = (e) => {
		e.preventDefault();

		const body = {
			userid: product.userid,
			item: product.item,
			size: size,
			color: active,
			quantity: jumlah,
			status: product.status,
		};

		axios
			.post(`${process.env.REACT_APP_BACKEND_URL}/order`, body)
			.then((response) => {
				Swal.fire({
					icon: 'success',
					title: 'Order success',
					timer: 1800,
					showConfirmButton: false,
				})
				window.location.reload();
			})
			.catch((error) => {
				console.log(error);
			});
	};

	const chatSeller = () => {
		dispatch(selectReceiver(details.id_seller));
	};

	return (
		<>
			<Helmet>
				<title>Product</title>
			</Helmet>
			<Fragment>
				<>
					<Navs />
				</>
				<div className="container-fluid row">
					<div className="col-md-10 col-12 my-4 position-absolute start-50 translate-middle-x">
						<div className="row">
							<div className="col-12 col-md-6">
								<div className="container-fluid row">
									<div className={`flex-row d-flex col-12 ${style.margins}`}>
										<div
											className={`${style.mobiles} d-flex col-12 flex-row overflow-scroll`}>
											{details.id_product &&
												details.photo.split("||").map((item, index) => (
													<img
														key={index}
														src={`${process.env.REACT_APP_BACKEND_URL}/${item}`}
														alt=""
														className={`col-md-10 col-10 pe-1 mb-2 ${style.thumbs} ${style.thumbnails}`}
													/>
												))}
										</div>
									</div>
								</div>
							</div>
							<div className="col-12 col-md-6">
								<div className="container-fluid row">
									<form onSubmit={(e) => onSubmit(e)}>
										<div className="col-12">
											<h4 className="fontBold">{details.product_name}</h4>
											<p className={`text-secondary ${style.ups}`}>
												{details.name}
											</p>
											<div className="d-flex">
												<div className="me-2">
													<img src={star} alt="tydac ramah" />
												</div>
												<p className={`text-secondary my-auto ${style.review}`}>
													5
												</p>
											</div>
											<div className="my-3">
												<p className="text-secondary">Price</p>
												<h4 className={`fontBold ${style.ups}`}>
													$ {details.price}
												</h4>
											</div>
											<div className="my-3">
												<p className="fontBold">Color</p>
												<div className="d-flex flex-row">
													{details.id_product &&
														details.color.split(",").map((item, index) => (
															<div key={index}>
																<div
																	onClick={() => {
																		setActive(item);
																	}}>
																	{active === item ? (
																		<div
																			className={`me-2 ${style.colorActive}`}>
																			<div
																				className={`mx-auto ${style.colors}`}
																				style={{ backgroundColor: item }}></div>
																		</div>
																	) : (
																		<div
																			className={`me-2 ${style.colors}`}
																			style={{ backgroundColor: item }}></div>
																	)}
																</div>
															</div>
														))
													}
												</div>
											</div>
											<div className="d-flex flex-row">
												<div className="col-6 col-md-4">
													<p className="fontBold">Size</p>
													<div className="d-flex flex-row col-11">
														{details.id_product &&
															details.size.split(",").map((item, index) => (
																<div key={index}>
																	<div
																		onClick={() => setSize(item)}
																		className="me-2">
																		{item == size ? (
																			<div className="btn btn-danger">
																				{item == 1
																					? "XS"
																					: item == 2
																					? "S"
																					: item == 3
																					? "M"
																					: item == 4
																					? "L"
																					: "XL"}
																			</div>
																		) : (
																			<div className="btn btn-secondary">
																				{item == 1
																					? "XS"
																					: item == 2
																					? "S"
																					: item == 3
																					? "M"
																					: item == 4
																					? "L"
																					: "XL"}
																			</div>
																		)}
																	</div>
																</div>
															))}
													</div>
												</div>
												<div className="col-6 col-md-4">
													<p className="fontBold">Jumlah</p>
													<div className="d-flex flex-row">
														{jumlah == 1 ? (
															<button
																className={`fontBold btn btn-secondary rounded-circle ${style.button} ${style.buttonSize}`}
																onClick={() => setJumlah((value) => value - 1)}
																disabled>
																-
															</button>
														) : (
															<button
																type="button"
																className={`fontBold btn btn-secondary rounded-circle ${style.button} ${style.buttonSize}`}
																onClick={() => setJumlah((value) => value - 1)}>
																-
															</button>
														)}

														<p className="fontBold my-auto mx-3">{jumlah}</p>
														{jumlah == details.stock ? (
															<button
																type="button"
																className={`fontBold btn btn-light rounded-circle ${style.button} ${style.buttonSize}`}
																onClick={() => setJumlah((value) => value + 1)}
																disabled>
																+
															</button>
														) : (
															<button
																type="button"
																className={`fontBold btn btn-light rounded-circle ${style.button} ${style.buttonSize}`}
																onClick={() => setJumlah((value) => value + 1)}>
																+
															</button>
														)}
													</div>
												</div>
											</div>
											<div className="col-md-7 col-12">
												<div className="flex-row d-flex my-3">
													<Link
														onClick={chatSeller}
														className={`col-6 me-2 btn btn-light border fontMedium ${style.buttonProductDetail}`}
														to="/chat">
														Chat
													</Link>
													<button
														type="submit"
														className={`col-6 me-2 btn btn-light border fontMedium ${style.buttonProductDetail}`}>
														Add bag
													</button>
												</div>
												<button
													type="submit"
													className={`btn btn-danger col-12 ${style.buttonProductDetail}`}>
													Buy now
												</button>
											</div>
										</div>
									</form>
								</div>
							</div>
						</div>
						<div className="my-3">
							<ProductReview />
						</div>
						<div className="my-3">
							<OtherProduct />
						</div>
					</div>
				</div>
			</Fragment>
		</>
	);
};

export default Product;