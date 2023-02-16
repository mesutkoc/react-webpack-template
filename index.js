import React from "react";
import { createRoot } from "react-dom/client";
import {
    createBrowserRouter,
    RouterProvider,
    Link,
} from "react-router-dom";
import App from "./src/App";

const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <div>
                <h1>Hello World</h1>
                <Link to="homepage">Homepage</Link>
                <br></br>
                <Link to="about">About</Link>
            </div>
        ),
    },
    {
        path: "homepage",
        element: <App page={'Homepage'} />,
    },
    {
        path: "about",
        element: <App page={'About'} />,
    },
]);

createRoot(document.getElementById("root")).render(
    <RouterProvider router={router} />
);