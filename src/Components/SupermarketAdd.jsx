import { useForm } from "../hooks/useForm";

export const SupermarketAdd = ({ handleAdd }) => {
  const { formValues, reset, handleInputChange } = useForm({ product: "" });

  const { product } = formValues;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!product.trim()) return;

    const newProduct = {
      id: new Date().getTime(),
      product,
      done: false,
    };

    handleAdd(newProduct);
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="d-flex justify-content-center mb-3 mt-4"
    >
      <input
        type="text"
        name="product"
        className="form-control w-50 me-2"
        placeholder="Insert product"
        value={product}
        onChange={handleInputChange}
      />
      <button className="btn btn-info">Add item</button>
    </form>
  );
};
