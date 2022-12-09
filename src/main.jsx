import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { BrowserRouter, Router } from "react-router-dom";
// auth

// import Auth0ProviderWithHistory from "./Auth0ProviderWithHistory";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Auth0Provider
        domain="dev-6twipy77.us.auth0.com"
        clientId="ZZmZEgje248aV0MMQNorw6SjelwClVwh"
        redirectUri={window.location.origin}
      >
        <App />
      </Auth0Provider>
    </BrowserRouter>
  </React.StrictMode>
);
