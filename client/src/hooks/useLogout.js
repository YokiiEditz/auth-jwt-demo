import { useAuthors } from "../context/Auths";

export const useLogout = () => {
  const { dispatch } = useAuthors();

  const logout = () => {
    localStorage.removeItem("user");

    dispatch({ type: "LOGOUT" });
  };

  return { logout };
};
