import { useEffect, useReducer } from "react";
import "../styles.css";
import { SupermarketList } from "./SupermarketList";
import { SupermarketAdd, ProductProps } from "./SupermarketAdd";
import { listReducer } from "../reducers/listReducer";

import AWN from "awesome-notifications";

const options = {
  durations: {
    global: 1500,
  },
};
let notifier = new AWN(options);

const init = () => {
  return JSON.parse(localStorage.getItem("list") || []);
};

export const SupermarketApp = () => {
  const [list, dispatch] = useReducer(listReducer, [], init);

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);

  const handleAdd = (newProduct) => {
    setTimeout(() => {
      dispatch({
        type: "add",
        payload: newProduct,
      });
      notifier.success(`${newProduct.product} has been added`);
    }, 500);
  };

  const handleToggle = (product) => {
    setTimeout(() => {
      dispatch({
        type: "toggle",
        payload: product.id,
      });
    }, 200);
  };

  const handleDelete = (product) => {
    setTimeout(() => {
      dispatch({
        type: "delete",
        payload: product.id,
      });
      notifier.warning(`${product.product} has been deleted`);
    }, 500);
  };

  return (
    <>
      <div className="container">
        <h1 className="d-flex justify-content-center mt-5 fw-bold">
          Supermarket list
        </h1>
        <hr />
        <SupermarketAdd handleAdd={handleAdd} />
        <h2 className="d-flex justify-content-center fs-4 mb-4 fw-bold">
          {list.length} {list.length > 1 ? "items" : "item"}
        </h2>
        <div className="d-flex justify-content-center">
          <SupermarketList
            list={list}
            handleToggle={handleToggle}
            handleDelete={handleDelete}
          />
        </div>
      </div>
    </>
  );
};
