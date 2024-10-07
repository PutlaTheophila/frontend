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
import { CookiesProvider } from 'react-cookie';
import { Suspense } from 'react';
import LoadingFallback from "./components/LoadingFallbackLoader.jsx";



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    
    <GoogleOAuthProvider clientId={'672247062346-njl2dru7fevcitsg5romorjtaiv8qinp.apps.googleusercontent.com'}>
    <Suspense fallback={<div>Loading......</div>}>
      <RouterProvider router={router} />
      </Suspense>
    </GoogleOAuthProvider>

  </React.StrictMode>
);