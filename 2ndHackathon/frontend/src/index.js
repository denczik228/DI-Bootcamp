import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import "bootstrap/dist/css/bootstrap.min.css"
import { BudgetsProvider } from "./contexts/BudgetsContext"
import { BrowserRouter } from "react-router-dom"

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <BudgetsProvider>
      <App />
      </BudgetsProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
)
