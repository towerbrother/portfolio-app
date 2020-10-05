import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import About from "./About";
import Education from "./Education";
import Projects from "./Projects";

const AppRouter = () => (
  <div className="container">
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" component={Home} exact={true} />
        <Route path="/about" component={About} />
        <Route path="/education" component={Education} />
        <Route path="/projects" component={Projects} />
      </Switch>
    </BrowserRouter>
    <Footer />
  </div>
);

export default AppRouter;
