import { useForm } from "react-hook-form";
import { nanoid } from "nanoid";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { asynccreateproduct } from "../../store/actions/productActions";

const CreateProduct = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const { register, reset, handleSubmit } = useForm({});

  const CreateProductHandler = (product) => {
    product.id = nanoid();
    navigate("/");

    dispatch(asynccreateproduct(product));
  };
  return (
    <form
      onSubmit={handleSubmit(CreateProductHandler)}
      className="flex flex-col w-1/2 items-start"
    >
      <input
        {...register("image")}
        className="mb-3 outline-0 border-b p-2 text-2xl"
        type="url"
        placeholder="Image URL"
      />

      <input
        {...register("title")}
        className="mb-3 outline-0 border-b p-2 text-2xl"
        type="text"
        placeholder="Title"
      />

      <textarea
        {...register("description")}
        className="mb-3 outline-0 p-2 border-b text-2xl"
        placeholder="Description"
      ></textarea>

      <input
        {...register("price")}
        className="mb-3 outline-0 border-b p-2 text-2xl"
        type="number"
        placeholder="price"
      />

      <input
        {...register("category")}
        className="mb-3 outline-0 border-b p-2 text-2xl"
        type="text"
        placeholder="Category"
      />

      <button className="mt-5 px-4 py-2 bg-blue-500 rounded-xl">
        Create Product
      </button>
    </form>
  );
};

export default CreateProduct;
