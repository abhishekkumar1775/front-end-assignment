import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchSelectedUser } from "../store/Users/users-actions";
import LoadingLayout from "./UI/LoadingLayout";

const AllUsers = () => {
  const { allUsersData, allUsersLoading } = useSelector((state) => state.users);

  // console.log(allUsersData);

  const dispatch = useDispatch();

  const onClickHandler = (id) => {
    dispatch(fetchSelectedUser(id));
  };

  return (
    <>
      {allUsersLoading ? (
        <LoadingLayout />
      ) : (
        allUsersData.map((item) => (
          <span key={item.id} className="m-2">
            <Button
              onClick={() => {
                onClickHandler(item.id);
              }}
            >
              {item.id}
            </Button>
          </span>
        ))
      )}
    </>
  );
};

export default AllUsers;
