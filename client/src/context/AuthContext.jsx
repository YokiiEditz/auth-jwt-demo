import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const API_URL = "http://localhost:5001/api/auth";

export const AuthContextProvider = ({ children }) => {
  const [data, setData] = useState(null);
  const [dataChanged, setDataChanged] = useState(false);

  // console.log("data in context", data);

  //   useEffect(() => {
  //     fetchData();
  //   }, [!dataChanged]);

  const fetchData = async () => {
    // const response = await fetch(API_URL + "/profile", {
    //   credentials: "include",
    // });
    // if (response.ok) {
    //   const result = await response.json();
    //   console.log("Fetched user data:", result);
    //   setData(result);
    // } else {
    //   console.log("Failed to fetch userdata:", response.status);
    //   setData(null);
    // }
  };

  const contextValues = { data, setData, setDataChanged, fetchData };

  return (
    <>
      <AuthContext.Provider value={contextValues}>
        {children}
      </AuthContext.Provider>
    </>
  );
};
