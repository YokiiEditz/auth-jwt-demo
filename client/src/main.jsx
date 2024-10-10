import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { AuthContextProvider } from "./context/AuthContext";
import { AuthProvider, useAuthors } from "./context/Auths";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthContextProvider>
      <AuthProvider>
        <App />
      </AuthProvider>
    </AuthContextProvider>
  </StrictMode>
);
