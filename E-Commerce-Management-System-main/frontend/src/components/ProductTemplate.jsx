import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { asyncupdateuser } from "../store/actions/userActions";

const ProductTemplate = ({ product }) => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.userReducer.users);

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

  return (
    <div
      className="rounded-2xl w-[19%] mr-3 mb-3 border shadow"
      key={product.id}
    >
      <img
        className="rounded-2xl w-full h-[35vh] object-cover"
        src={product.image}
        alt="error"
      />
      <div className="ml-3 mr-3">
        <h1 className="mb-1.5">{product.title}</h1>
        <small>{product.description?.slice(0, 70)}...</small>
        <div className="p-3 mt-3 flex items-center justify-between">
          <p>₹{product.price}</p>
          <button onClick={() => AddtoCartHandler(product)}>Add to cart</button>
        </div>
        <Link
          className="m-auto w-1/2 text-center block"
          to={`/product/${product.id}`}
        >
          More Info
        </Link>
      </div>
    </div>
  );
};

export default ProductTemplate;
