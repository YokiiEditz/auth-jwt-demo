import { useEffect } from "react";
import { useAuthors } from "../context/Auths";

const Homepage = () => {
  const { user } = useAuthors();
  console.log("user-datas", user);

  useEffect(() => {
    if (user) {
      fetchPosts();
    }
  }, [user]);

  // const fetchPosts = async () => {
  //   const response = await fetch("http://localhost:5001/posts", {
  //     method: "GET",
  //     headers: {
  //       "Content-Type": "application/json",
  //       Authorization: `Bearer ${user?.token}`,
  //     },
  //   });
  //   if (response.ok) {
  //     const data = await response.json();
  //     console.log("data", data);
  //   } else {
  //     console.log("ERRORR!!!");
  //   }
  // };

  const fetchPosts = async () => {
    const response = await fetch("http://localhost:5001/api/auth/posts", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        //for authorization -> req.headers
        Authorization: `Bearer ${user?.userData}`,
      },
      //for stored cookie-> req.cookies
      credentials: "include",
    });

    if (response.ok) {
      const data = await response.json();
      console.log("data", data);
    } else {
      console.log("FETCH ERRORR!!!");
    }
  };

  return (
    <div>
      Homepage
      <button onClick={fetchPosts}>Click here!</button>
    </div>
  );
};

export default Homepage;
