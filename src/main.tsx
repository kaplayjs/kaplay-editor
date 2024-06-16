import React from "react";
import ReactDOM from "react-dom/client";
import App from "./Core/components/App.tsx";
import "./index.css";
import "allotment/dist/style.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
);
