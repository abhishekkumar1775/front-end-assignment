import { createSlice, current } from "@reduxjs/toolkit";

const usersInitialState = {
  page: 0,
  per_page: null,
  totalUsers: null,
  total_pages: null,
  allUsersData: [{ id: 1 }, { id: 2 }, { id: 5 }],
  selectedUser: null,
  selectedUserLoading: false,
  allUsersLoading: true,
};

const userSlice = createSlice({
  name: "users",
  initialState: usersInitialState,
  reducers: {
    fetchAllUsersSuccessful(state, action) {
      //   console.log(action.payload);
      const {
        total: totalUsers,
        data: allUsersData,
        per_page: pageSize,
      } = action.payload;

      for (let user = pageSize + 1; user <= totalUsers; user++)
        allUsersData.push({ id: user });

      return { ...state, totalUsers, allUsersData, allUsersLoading: false };
    },
    fetchSelectedUserSuccessful(state, action) {
      //   console.log("payload", action.payload);
      return {
        ...state,
        selectedUser: action.payload.data,
        selectedUserLoading: false,
      };
    },
    fetchingSelectedUser(state, action) {
      return { ...state, selectedUserLoading: true };
    },
  },
});
export const {
  fetchAllUsersSuccessful,
  fetchSelectedUserSuccessful,
  fetchingSelectedUser,
} = userSlice.actions;

export default userSlice.reducer;
