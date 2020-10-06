import React from "react"
import { render } from "react-dom"
import { Router, Link } from "@reach/router"

export default ROUTES;

let Home = () => <div>Home</div>
let Dash = () => <div>Dash</div>

render(
  <Router>
    <Home path="/" />
    <Dash path="dashboard" />
  </Router>
)

