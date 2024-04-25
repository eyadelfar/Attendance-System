const setAuthUser = (data) => {
    localStorage.setItem("user", JSON.stringify(data));
};
  
const getAuthUser = (data) => {
    if (localStorage.getItem("user")) {
      return JSON.parse(localStorage.getItem("user"));
    }
    return null;
};
  
const removeAuthUser = () => {
    if (localStorage.getItem("user")) localStorage.removeItem("user");
};

export default { setAuthUser, getAuthUser, removeAuthUser };