import { Link } from "react-router-dom";
import { useAuth, API_URL } from "../context/AuthContext";
import { useLogout } from "../hooks/useLogout";
import { useAuthors } from "../context/Auths";

const Header = () => {
  // const { data, setData } = useAuth();
  const { logout } = useLogout();
  const { user } = useAuthors();

  const handleLogout = async () => {
    // await fetch(API_URL + "/logout", {
    //   credentials: "include",
    //   method: "POST",
    // });
    // setData(null);
    logout();
    window.location.href = "/login";
  };

  return (
    <div>
      <nav className="h-[50px] p-3 flex justify-between items-center text-lg text-emerald-400 bg-gray-700">
        <h2 className="text-xl">JWT</h2>

        <ul className="flex gap-5 items-center">
          <Link to="/">Home</Link>
          {user ? (
            <>
              <Link to="/profile">Profile: {user ? user.email : "nope"}</Link>

              <Link to="/">
                <button onClick={handleLogout}>Logout</button>
              </Link>
            </>
          ) : (
            <>
              <Link to="/signup">Signup</Link>
              <Link to="/login">Login</Link>
            </>
          )}
        </ul>
      </nav>
    </div>
  );
};

export default Header;
