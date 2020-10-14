import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";

const AppRouter = () => (
  <div className="container">
    <BrowserRouter basename="/portfolio-app">
      <Header />
      <Switch>
        <Route path="/" component={Home} exact={true} />
        <Route path="/about" component={About} />
        <Route path="/skills" component={Skills} />
        <Route path="/projects" component={Projects} />
        <Route component={Home} />
      </Switch>
    </BrowserRouter>
    <Footer />
  </div>
);

export default AppRouter;
