import { useState } from "react";
import { useAuthors } from "../context/Auths";
import { API_URL, useAuth } from "../context/AuthContext";

export const useSignup = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const { dispatch } = useAuthors();
  const { setData } = useAuth();

  const signup = async (email, password) => {
    setIsLoading(true);
    setError(null);

    const response = await fetch(API_URL + "/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();
    console.log("response", data);

    if (response.ok) {
      //save it JWT
      localStorage.setItem("user", JSON.stringify(data));

      //update auth-context
      setData(data);
      dispatch({ type: "LOGIN", payload: data });
      setIsLoading(false);
    }

    if (!response.ok) {
      setIsLoading(false);
      setError(data.error);
    }
  };

  return { signup, isLoading, error };
};
