import { Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import LoadingLayout from "./UI/LoadingLayout";
import UserCard from "./UI/UserCard";

const SelectedUser = () => {
  const { selectedUser, selectedUserLoading } = useSelector(
    (state) => state.users
  );

  //   console.log(selectedUser);

  return (
    <>
      {
        <UserCard
          isLoading={selectedUserLoading}
          header={selectedUser && "Id: " + selectedUser.id}
          imgSource={selectedUser && selectedUser.avatar}
          title={
            selectedUser &&
            "Name: " + selectedUser.first_name + " " + selectedUser.last_name
          }
          content={selectedUser && "Email: " + selectedUser.email}
        />
      }
    </>
  );
};

export default SelectedUser;
