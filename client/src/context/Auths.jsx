import { createContext, useContext, useEffect, useReducer } from "react";

const AuthContexts = createContext();

export const useAuthors = () => {
  const context = useContext(AuthContexts);

  if (!context) {
    throw Error("useAuths must be used!!!");
  }
  return context;
};

const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return { user: action.payload };

    case "LOGOUT":
      return { user: null };

    default:
      return state;
  }
};

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, { user: null });

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("user"));

    if (userData) {
      dispatch({ type: "LOGIN", payload: userData });
    }
  }, []);

  const contextValues = { ...state, dispatch };

  return (
    <>
      <AuthContexts.Provider value={contextValues}>
        {children}
      </AuthContexts.Provider>
    </>
  );
};
