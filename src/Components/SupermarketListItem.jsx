export const SupermarketListItem = ({
  product,
  handleDelete,
  handleToggle,
}) => {
  return (
    <>
      <div key={product.id} className="card p-3 mb-2">
        <div className="d-flex justify-content-between">
          <span
            onClick={() => handleToggle(product.id)}
            className={
              product.done ? "text-decoration-line-through fw-bold" : "fw-bold"
            }
            style={{ cursor: "pointer" }}
          >
            {product.product}
          </span>
          <span
            onClick={() => handleDelete(product.id)}
            className="fst-italic"
            style={{ cursor: "pointer" }}
          >
            delete
          </span>
        </div>
      </div>
    </>
  );
};
