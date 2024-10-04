import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
  Routes
} from "react-router-dom";
import router from "./App.jsx";
import "./index.css";
import { GoogleOAuthProvider } from '@react-oauth/google';
import { CookieProvider } from 'react-cookie';


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    
    <GoogleOAuthProvider clientId={'672247062346-njl2dru7fevcitsg5romorjtaiv8qinp.apps.googleusercontent.com'}>
    <CookieProvider>
      <RouterProvider router={router} />
      </CookieProvider>
    </GoogleOAuthProvider>

  </React.StrictMode>
);