import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import {
  asyncdeleteproduct,
  asyncupdateproduct,
} from "../../store/actions/productActions";
import { asyncupdateuser } from "../../store/actions/userActions";

const ProductDetails = () => {
  const { id } = useParams();

  const users = useSelector((state) => state.userReducer.users);
  const products = useSelector((state) => state.productReducer.products);

  const product = products?.find((product) => product.id === id);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { register, reset, handleSubmit } = useForm({
    defaultValues: {
      image: product?.image,
      title: product?.title,
      description: product?.description,
      price: product?.price,
      category: product?.category,
    },
  });

  const UpdateProductHandler = (product) => {
    dispatch(asyncupdateproduct(id, product));
  };

  const deleteHandler = () => {
    dispatch(asyncdeleteproduct(id));
    navigate("/");
  };

  const AddtoCartHandler = (product) => {
    const copyuser = { ...users, cart: [...users.cart] };
    const x = copyuser.cart.findIndex((c) => c?.product?.id == product.id);

    if (x == -1) {
      copyuser.cart.push({ product, quantity: 1 });
    } else {
      copyuser.cart[x] = {
        product,
        quantity: copyuser.cart[x].quantity + 1,
      };
    }
    dispatch(asyncupdateuser(copyuser.id, copyuser));
  };

  return product ? (
    <>
      <div className="w-full flex">
        <img
          className="w-1/2 h-[50vh] object-contain"
          src={product?.image}
          alt=""
        />
        <div className="px-3 w-1/2 h-1/2">
          <h1 className="text-5xl font-thin">{product?.title}</h1>
          <h1 className="text-3xl my-2 mb-4 text-green-400">
            Price: ₹{product?.price}
          </h1>
          <p className="mb-5">{product?.description}</p>
          <button onClick={() => AddtoCartHandler(product)}>Add to cart</button>
        </div>
      </div>

      <br />
      <hr />
      <br />

      {users && users.isAdmin && (
        <form
          onSubmit={handleSubmit(UpdateProductHandler)}
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

          <div className="flex gap-3">
            <button className="mt-5 px-4 py-2 bg-blue-500 rounded-xl">
              Update Product
            </button>
            <button
              className="mt-5 px-4 py-2 bg-red-500 rounded-xl"
              onClick={deleteHandler}
            >
              Delete Product
            </button>
          </div>
        </form>
      )}
    </>
  ) : (
    "Loading..."
  );
};

export default ProductDetails;
