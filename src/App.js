import React from "react";
import "./App.css";
import Header from "./Component/Header";
import Sidebar from "./Component/Sidebar";
import RecommendVideos from "./Component/RecommendVideos";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const App = () => {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/search">
              <Header />
            <h1>Search page</h1>
          </Route>
          <Route path="/">
            <Header />
            <div className="app_page">
              <Sidebar />
              <RecommendVideos />
            </div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
