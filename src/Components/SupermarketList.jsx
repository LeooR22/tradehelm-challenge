import { SupermarketListItem } from "./SupermarketListItem";

export const SupermarketList = ({ list, handleToggle, handleDelete }) => {
  return (
    <div className="w-75">
      {/* <h1>hola</h1> */}
      {/* {console.log(list)}{" "} */}
      {list.map((product) => (
        <SupermarketListItem
          key={product.id}
          product={product}
          handleDelete={handleDelete}
          handleToggle={handleToggle}
        />
      ))}
    </div>
  );
};
