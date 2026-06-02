import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { ThemeProvider } from "./context/ThemeContext";
import { Toaster } from "react-hot-toast";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
      <Toaster 
        position="bottom-right" 
        toastOptions={{
          duration: 5000,
        }}
      />
    </ThemeProvider>
  </React.StrictMode>
);