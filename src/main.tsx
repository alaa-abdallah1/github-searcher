import App from "./App"
import React from "react"
import "./styles/global.css"
import {Provider} from "react-redux"
import {store, persistor} from "./store"
import {createRoot} from "react-dom/client"
import {BrowserRouter} from "react-router-dom"
import {PersistGate} from "redux-persist/integration/react"

const container = document.getElementById("root")

if (container) {
  const root = createRoot(container)

  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </PersistGate>
      </Provider>
    </React.StrictMode>
  )
}
