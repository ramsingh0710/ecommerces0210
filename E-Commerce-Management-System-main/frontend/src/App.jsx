import Mainroutes from "./routes/Mainroutes";
import Nav from "./components/Nav.jsx";
import { useEffect } from "react";
import { asynccurrentuser } from "./store/actions/userActions.jsx";
import { useDispatch, useSelector } from "react-redux";

const App = () => {
  const dispatch = useDispatch();

  const { users } = useSelector((state) => state.userReducer);

  useEffect(() => {
    !users && dispatch(asynccurrentuser());
  }, [users]);

  return (
    <div className="px-[5%] w-screen min-h-screen bg-gray-800 text-white font-thin">
      <Nav />
      <Mainroutes />
    </div>
  );
};

export default App;
