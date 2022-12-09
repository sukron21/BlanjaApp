import React, { useState, useEffect } from 'react';
import style from '../category/category.module.css';
import { Link } from 'react-router-dom';
import Navs from '../../components/Navs';
import axios from 'axios';

const Category = () => {
  const [getProduct, setProduct] = useState([]);
  const [data, setData] = useState([]);

  // const navigate = useNavigate();
  // useEffect(() => {
  //   const search = JSON.parse(localStorage.getItem('name'));
  //   axios
  //     .get(`${process.env.REACT_APP_BACKEND_URL}/product/search/${search}`)

  //     .then((res) => {
  //       console.log(res.data);
  //       setProduct(res.data.data.rows);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  //   // return navigate(`?search=${search}`);

  //   // console.log(search);
  // }, []);

  const [sort, setSort] = useState('id_product');
  const [currentPage, setCurrentPage] = useState(1);
  const [asc, setAsc] = useState('asc');

  useEffect(() => {
    getData(sort, asc, 5, currentPage);
  }, [sort, asc, currentPage]);

  const getData = (sort, asc, limit, page) => {
    const search = JSON.parse(localStorage.getItem('name'));

    const body = {
      product_name: search,
      color: null,
      size: null,
      category: null,
      sortBy: sort,
      sortOrd: asc,
      page: page,
      limit: limit,
    };
    axios
      .post(`${process.env.REACT_APP_BACKEND_URL}/product/filter`, body)
      .then((res) => {
        console.log(res.data.data);
        setProduct(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleNext = () => {
    setCurrentPage(currentPage + 1);
    getData(sort, asc, 3, currentPage + 1);
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      getData(sort, asc, 3, currentPage - 1);
    }
  };

  const handleSorting = () => {
    if (sort == 'id_product') {
      setSort('product_name');
    } else {
      setSort('id_product');
    }
    getData(sort, asc, 3, currentPage);
  };

  const handleAsc = () => {
    if (asc == 'asc') {
      setAsc('desc');
    } else {
      setAsc('asc');
    }
    getData(sort, asc, 3, currentPage);
  };

  return (
    <>
      <Navs />

      <div className="container">
        <div className="row">
          <div className={`${style.menus} col-md-12 `}>
            <Link className={style.menu}>Home </Link>
            <Link className={`${style.menu} ms-2 `}>Category </Link>
            <Link className={`${style.menu} ms-2 `}> T-Shirt</Link>
          </div>

          <div className="col-md-12">
            <h2 className={style.text}>T-Shirt</h2>
          </div>

          <div className="col-md-12 d-flex flex-row gap-4 flex-wrap justify-content-center">
            {getProduct && getProduct.length === 0 ? (
              <div>product not found</div>
            ) : (
              getProduct.map((item, index) => (
                <Link key={index} to={`/product/${item.id_product}`} className={`${style.links}`}>
                  <div className="card " style={{ width: '14rem', top: '10px' }}>
                    <img src={`${process.env.REACT_APP_BACKEND_URL}/${item.photo.split('||')[0]}`} height="200px" className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h4 className="card-text">{item.product_name}</h4>
                      <h4 className="card-text text-danger">$ {item.price}.0</h4>
                      <p className={style.p}>{item.name}</p>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star text-warning ms-1" viewBox="0 0 16 16">
                        <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star text-warning ms-2  " viewBox="0 0 16 16">
                        <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star text-warning ms-2" viewBox="0 0 16 16">
                        <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star text-warning ms-2" viewBox="0 0 16 16">
                        <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star text-warning ms-2" viewBox="0 0 16 16">
                        <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                      </svg>
                      <span className={`${style.p} ms-2`}>({item.stock})</span>
                    </div>
                  </div>
                </Link>
              ))
            )}
          </div>

          <div className="d-flex justify-content-center mt-4">
            <nav aria-label="Page navigation example">
              <ul className="pagination">
                <li className="page-item">
                  <button className="page-link" onClick={() => handlePrevious()}>
                    Previous
                  </button>
                </li>
                <li className="page-item">
                  <button className="page-link">{currentPage}</button>
                </li>
                <li className="page-item">
                  <button className="page-link" disabled={getProduct.data <= 0} onClick={() => handleNext()}>
                    Next
                  </button>
                </li>
                <li className="page-item">
                  <button className="page-link" aria-label="Next" onClick={() => handleSorting()}>
                    <span aria-hidden="true">{sort}</span>
                  </button>
                </li>
                <li className="page-item">
                  <button className="page-link" aria-label="Next" onClick={() => handleAsc()}>
                    <span aria-hidden="true">{asc}</span>
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Category;