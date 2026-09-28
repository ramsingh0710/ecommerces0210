import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import {
  asyncdeleteuser,
  asynclogoutuser,
  asyncupdateuser,
} from "../../store/actions/userActions";

const UserProfile = () => {
  const { users } = useSelector((state) => state.userReducer);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { register, reset, handleSubmit } = useForm({
    defaultValues: {
      username: users?.username,
      email: users?.email,
      password: users?.password,
    },
  });

  const UpdateUserHandler = (user) => {
    dispatch(asyncupdateuser(users.id, user));
  };

  const logoutuser = () => {
    dispatch(asynclogoutuser());
    navigate("/login");
  };

  const deleteHandler = () => {
    dispatch(asyncdeleteuser(users.id));
    navigate("/login");
  };
  return users ? (
    <div>
      <form
        onSubmit={handleSubmit(UpdateUserHandler)}
        className="flex flex-col w-1/2 items-start"
      >
        <input
          {...register("username")}
          className="mb-3 outline-0 border-b p-2 text-2xl"
          type="text"
          placeholder="username"
        />

        <input
          {...register("email")}
          className="mb-3 outline-0 border-b p-2 text-2xl"
          type="email"
          placeholder="Email"
        />

        <input
          {...register("password")}
          className="mb-3 outline-0 border-b p-2 text-2xl"
          type="password"
          placeholder="Password"
        />

        <div className="flex gap-3">
          <button className="mt-5 px-4 py-2 bg-blue-500 rounded-xl">
            Update User
          </button>
          <button
            type="button"
            className="mt-5 px-4 py-2 bg-red-600 rounded-xl"
            onClick={deleteHandler}
          >
            Delete User
          </button>
        </div>
        <div>
          <button
            type="button"
            className="mt-5 px-4 py-2 bg-red-500 rounded-xl"
            onClick={logoutuser}
          >
            Logout User
          </button>
        </div>
      </form>
    </div>
  ) : (
    "Loading..."
  );
};

export default UserProfile;
