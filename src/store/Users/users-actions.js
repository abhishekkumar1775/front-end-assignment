import {
  fetchAllUsersSuccessful,
  fetchingSelectedUser,
  fetchSelectedUserSuccessful,
} from ".";

export const fetchAllUsers = () => {
  return async (dispatch) => {
    const fetchUsers = async () => {
      const response = await fetch("https://reqres.in/api/users");

      //   console.log(response);

      const statusCode = response.status;
      if (!response.ok) {
        const responseText = await response.text();

        console.log("status code:", statusCode);
        throw new Error(responseText);
      }
      const data = await response.json();

      return data;
    };
    console.log("sending request");
    try {
      const data = await fetchUsers();
      dispatch(fetchAllUsersSuccessful({ ...data }));
    } catch (error) {
      console.log(error);
      console.log({ errorMessage: error.message });
    }
  };
};

export const fetchSelectedUser = (userId) => {
  return async (dispatch) => {
    dispatch(fetchingSelectedUser());
    // dispatch(addingOrder())
    // console.log(userId);
    const fetchUser = async () => {
      const response = await fetch("https://reqres.in/api/users/" + userId);

      //   console.log(response);

      const statusCode = response.status;
      if (!response.ok) {
        const responseText = await response.text();

        console.log("status code:", statusCode);
        throw new Error(responseText);
      }
      const data = await response.json();

      return data;
    };
    console.log("sending request");
    try {
      const data = await fetchUser();
      dispatch(fetchSelectedUserSuccessful({ ...data }));
    } catch (error) {
      console.log(error);
      console.log({ errorMessage: error.message });
    }
  };
};
