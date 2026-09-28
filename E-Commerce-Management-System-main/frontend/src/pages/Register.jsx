import { useForm } from "react-hook-form";
import { nanoid } from "nanoid";
import { Link, useNavigate } from "react-router-dom";
import { asyncregisteruser } from "../store/actions/userActions";
import { useDispatch } from "react-redux";

const Register = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const { register, reset, handleSubmit } = useForm({});

  const registerHandler = (user) => {
    user.id = nanoid();
    user.isAdmin = false;

    user.cart = [];

    dispatch(asyncregisteruser(user));
    navigate("/login");
  };

  return (
    <form
      onSubmit={handleSubmit(registerHandler)}
      className="flex flex-col w-1/2 items-start"
    >
      <input
        {...register("username")}
        className="mb-3 outline-0 border-b p-2 text-2xl"
        type="text"
        placeholder="John-Don"
      />

      <input
        {...register("email")}
        className="mb-3 outline-0 border-b p-2 text-2xl"
        type="email"
        placeholder="john@don.com"
      />

      <input
        {...register("password")}
        className="mb-3 outline-0 border-b p-2 text-2xl"
        type="password"
        placeholder="********"
      />

      <button className="mt-5 px-4 py-2 bg-blue-500 rounded-xl">
        Register User
      </button>
      <p className="mt-3">
        Already have an account?{" "}
        <Link to="/login" className="text-blue-500">
          Login
        </Link>
      </p>
    </form>
  );
};

export default Register;
