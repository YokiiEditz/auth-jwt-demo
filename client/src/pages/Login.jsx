import { useState } from "react";
import { useLogin } from "../hooks/useLogin";

const login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, isLoading, error } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email === "" || password === "") {
      return null;
    }

    if (email !== "" || password !== "") {
      await login(email, password);

      setEmail("");
      setPassword("");
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="my-5 py-3 mx-auto max-w-[600px]  flex justify-center items-center flex-col gap-5"
      >
        <h2 className="my-3 text-3xl">login</h2>
        <input
          className="px-2 py-1 rounded-md border-2 border-gray-400"
          type="text"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          className="px-2 py-1 rounded-md border-2 border-gray-400"
          type="text"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={handleSubmit}>Create</button>
        {error && <div className="text-red-400">{error}</div>}
      </form>
    </>
  );
};

export default login;
