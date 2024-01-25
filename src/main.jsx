import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import axios from "axios";
import { AuthProvider } from "./context/Auth.jsx";

axios.defaults.withCredentials = true;
axios.defaults.baseURL = import.meta.env.VITE_API_BASE_URL;
axios.defaults.headers.post["Content-Type"] = "application/json";
// axios.defaults.headers.post['Authorization'] = authCookie

ReactDOM.createRoot(document.getElementById("root")).render(
   // <React.StrictMode>
   <AuthProvider>
      <App />
   </AuthProvider>
   // </React.StrictMode>
);
