import { useDispatch, useSelector } from "react-redux";
import { asyncupdateuser } from "../store/actions/userActions";

const Cart = () => {
  const dispatch = useDispatch();

  const users = useSelector((state) => state.userReducer.users);

  const increasequantityhandler = (index, product) => {
    const copyuser = { ...users, cart: [...users.cart] };

    copyuser.cart[index] = {
      ...copyuser.cart[index],
      quantity: copyuser.cart[index].quantity + 1,
    };

    dispatch(asyncupdateuser(copyuser.id, copyuser));
  };

  const decreasequantityhandler = (index, product) => {
    const copyuser = { ...users, cart: [...users.cart] };

    if (users.cart[index].quantity > 1) {
      copyuser.cart[index] = {
        ...copyuser.cart[index],
        quantity: copyuser.cart[index].quantity - 1,
      };
    } else {
      copyuser.cart.splice(index, 1);
    }

    dispatch(asyncupdateuser(copyuser.id, copyuser));
  };

  const cartItems = users.cart.map((c, index) => {
    return (
      <li
        className="flex items-center justify-between mb-5 bg-gray-700 rounded-xl"
        key={c.product.id}
      >
        <img
          className="mr-10 w-[8vmax] h-[10vmax] rounded-xl object-cover"
          src={c.product.image}
          alt=""
        />
        <span>{c.product.title}</span>
        <span>{c.product.price}</span>
        <p>
          <button
            onClick={() => decreasequantityhandler(index, c)}
            className="text-2xl"
          >
            -
          </button>
          <span className="mx-3 text-xl rounded-2xl p-2"> {c.quantity} </span>
          <button
            onClick={() => increasequantityhandler(index, c)}
            className="text-xl mr-3"
          >
            +
          </button>
        </p>
      </li>
    );
  });

  return <ol>{cartItems}</ol>;
};

export default Cart;
