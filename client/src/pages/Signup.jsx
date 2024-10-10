// import { useState } from "react";
// import Button from "../components/Button";
// import { API_URL } from "../context/AuthContext";

// const Signup = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (email === "" || password === "") {
//       return null;
//     }

//     if (email !== "" || password !== "") {
//       const data = {
//         email,
//         password,
//       };

//       const response = await fetch(API_URL + "/signup", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(data),
//       });

//       console.log("response", response);
//     }
//   };

//   return (
//     <>
//       <form
//         onSubmit={handleSubmit}
//         className="my-5 py-3 mx-auto max-w-[600px]  flex justify-center items-center flex-col gap-5"
//       >
//         <h2 className="my-3 text-3xl">SignUp</h2>
//         <input
//           className="px-2 py-1 rounded-md border-2 border-gray-400"
//           type="text"
//           placeholder="Enter email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />

//         <input
//           className="px-2 py-1 rounded-md border-2 border-gray-400"
//           type="text"
//           placeholder="Enter password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />

//         <Button>Create</Button>
//       </form>
//     </>
//   );
// };

// export default Signup;

import { useState } from "react";

import { useSignup } from "../hooks/useSignup";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signup, isLoading, error } = useSignup();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email === "" || password === "") {
      return null;
    }

    if (email !== "" || password !== "") {
      await signup(email, password);

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
        <h2 className="my-3 text-3xl">SignUp</h2>
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

export default Signup;
