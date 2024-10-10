import "./App.css";
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./pages/Homepage";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import { useAuthors } from "./context/Auths";

const App = () => {
  const { user } = useAuthors();
  console.log("user", user);

  return (
    <div>
      <Router>
        {/* Context using useReducer */}
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* <Route
            path="/"
            element={user ? <HomePage /> : <Navigate to="/login" />}
          /> */}
          <Route
            path="/signup"
            element={!user ? <Signup /> : <Navigate to="/login" />}
          />
          <Route
            path="/login"
            element={!user ? <Login /> : <Navigate to="/" />}
          />
          {/* <Route
                path="/dashboard"
                element={!user ? <Dashboard /> : <Navigate to="/login" />}
              /> */}
        </Routes>
      </Router>
    </div>
  );
};

export default App;
