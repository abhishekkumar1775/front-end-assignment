import "./App.css";
import LoadingLayout from "./components/UI/LoadingLayout";
import { useDispatch } from "react-redux";
import store from "./store";
import AllUsers from "./components/AllUsers";
import { useEffect } from "react";
import { fetchAllUsers } from "./store/Users/users-actions";
import SelectedUser from "./components/SelectedUser";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllUsers());
  }, []);

  return (
    <div className="App">
      {/* <LoadingLayout />
       */}
      <SelectedUser />
      <AllUsers />
    </div>
  );
}

export default App;
