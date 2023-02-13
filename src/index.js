import React, {createContext} from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { App } from "./app";
import { Auth0ProviderWithNavigate } from "./auth0-provider-with-navigate";
import "./styles/styles.css";
import actionCable from "actioncable";

const CableApp = {};
CableApp.cable = actionCable.createConsumer("ws://localhost:3001/cable");
export const ActionCableContext = createContext();

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Auth0ProviderWithNavigate>
        <ActionCableContext.Provider value={CableApp.cable}>
          <App />
        </ActionCableContext.Provider>
      </Auth0ProviderWithNavigate>
    </BrowserRouter>
  </React.StrictMode>
);
