import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { asyncloginuser } from "../store/actions/userActions";
import { useDispatch } from "react-redux";

const Login = () => {
  const { register, reset, handleSubmit } = useForm({});

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const loginHandler = (user) => {
    dispatch(asyncloginuser(user));
    navigate("/");
  };

  return (
    <form
      onSubmit={handleSubmit(loginHandler)}
      className="flex flex-col w-1/2 items-start"
    >
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
        Login User
      </button>
      <p className="mt-3">
        Don't have an account?{" "}
        <Link to="/register" className="text-blue-500">
          Register
        </Link>
      </p>
    </form>
  );
};

export default Login;
