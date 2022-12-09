import React, {useState} from "react";
// components
import AllitemsStore from "./Allitems/AllitemsStore";
import SoldOut from "./SoldOut/SoldOut";
import Archived from "./Archived/Archived";
const MyProducts = () => {
    const [showAllItems, setShowAllItems] = useState(false);
    const [showSoldOut, setShowSoldOut] = useState(false);
    const [showArchived, setShowArchived] = useState(false);


    const listAllItems = () => {
        setShowAllItems(true)
        setShowSoldOut(false)
        setShowArchived(false)
    }

    const listSoldOut = () => {
        setShowAllItems(false)
        setShowSoldOut(true)
        setShowArchived(false)
    }
    
    const listArchived = () => {
        setShowAllItems(false)
        setShowSoldOut(false)
        setShowArchived(true)
    }
  return (
    <div className="w-90 m-3 mt-5">
      <div className="wrapper m-4">
        <div className="title mb-3">
          <p className="fontBold h4">My Product</p>
        </div>
        <div className="nav-menu">
          <ul className="row list-unstyled">
            <li className="col-2">
              <button
                type="button"
                className="btn"
                onClick={listAllItems}
                style={
                  showAllItems
                    ? {
                        color: "#F01F0E ",
                        borderRadius: "0%",
                        borderBottom: "5px solid #F01F0E",
                        fontWeight: "bolder",
                      }
                    : {}
                }
              >
                All items
              </button>
            </li>

            <li className="col-2">
              <button
                type="button"
                className="btn"
                onClick={listSoldOut}
                style={
                  showSoldOut
                    ? {
                        color: "#F01F0E ",
                        borderRadius: "0%",
                        borderBottom: "5px solid #F01F0E",
                        fontWeight: "bolder",
                      }
                    : {}
                }
              >
                Sold out
              </button>
            </li>
            <li className="col-2">
              <button
                type="button"
                className="btn"
                onClick={listArchived}
                style={
                  showArchived
                    ? {
                        color: "#F01F0E ",
                        borderRadius: "0%",
                        borderBottom: "5px solid #F01F0E",
                        fontWeight: "bolder",
                      }
                    : {}
                }
              >
                Archived
              </button>
            </li>
          </ul>
        </div>
        <div className="break-line mb-3"></div>
        {showAllItems ? <AllitemsStore/> : <></>}
        {showSoldOut ?  <SoldOut/> : <></>}
        {showArchived ?  <Archived/> : <></>}
        <div className="mb-5"></div>
      </div>
    </div>
  );
};

export default MyProducts;
