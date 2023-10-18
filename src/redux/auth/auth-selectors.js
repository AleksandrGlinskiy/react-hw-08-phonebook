const getIsLoggedIn = state => state.auth.isLoggedIn;

const getUserEmail = state => state.auth.user.email;

const selectIsRefreshing = state => state.auth.isRefreshing;

const selectUser = state => state.auth.user;


const authSelectors = {
  getIsLoggedIn,
  getUserEmail,
  selectIsRefreshing,
  selectUser,
};

export default authSelectors;