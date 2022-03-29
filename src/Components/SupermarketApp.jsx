import { useEffect, useReducer } from "react";
import "../styles.css";
import { SupermarketList } from "./SupermarketList";
import { SupermarketAdd } from "./SupermarketAdd";
import { listReducer } from "../reducers/listReducer";

const init = () => {
  return JSON.parse(localStorage.getItem("list")) || [];
};

export const SupermarketApp = () => {
  const [list, dispatch] = useReducer(listReducer, [], init);

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);

  const handleAdd = (newProduct) => {
    dispatch({
      type: "add",
      payload: newProduct,
    });
  };

  const handleToggle = (idProduct) => {
    dispatch({
      type: "toggle",
      payload: idProduct,
    });
  };

  const handleDelete = (idProduct) => {
    dispatch({
      type: "delete",
      payload: idProduct,
    });
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
