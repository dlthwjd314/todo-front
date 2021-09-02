import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Todopage from "./pages/TodoPage";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Todopage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
