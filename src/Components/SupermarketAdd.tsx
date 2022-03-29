import { FormEvent } from "react";
import { useForm } from "../hooks/useForm";

export interface ProductProps {
  id: number;
  product: string;
  done: boolean;
}

export interface handleAddProps {
  handleAdd: (newProduct: ProductProps) => void;
}

export const SupermarketAdd = ({ handleAdd }: handleAddProps) => {
  const { formValues, reset, handleInputChange } = useForm({ product: "" });

  const { product } = formValues;

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!product.trim()) return;

    const newProduct: ProductProps = {
      id: new Date().getTime(),
      product,
      done: false,
    };

    handleAdd(newProduct);
    reset();

    // notifier.success(`${product} has been added`, options);
  };

  return (
    <form
      onSubmit={(e) => handleSubmit(e)}
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
