import React from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";   // your custom CSS first...
import "./tailwind.css"; // ...then Tailwind, same order the CDN version used
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(<App />);
