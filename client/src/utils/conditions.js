export const isLogin = () => {
  if (localStorage.getItem("accessToken")) {
    return true;
  }
  return false;
};

export const isStarted = () => {
  if (sessionStorage.getItem("isStarted")) {
    return true;
  }
  return false;
};
