import React from "react";
import { Route, Routes, Switch } from "react-router-dom";
import Home from "./components/home";
import ContactUs from "./components/contact";
import About from "./components/about";
import Header from "./components/header/header";

const AppRoutes = () => {
  return (
    <div>
      <main>
        <Header />
      </main>
      <Routes>
        <Route exact path="about" Component={About} />
        <Route exact path="contact" Component={ContactUs} />
        <Route exact path="/" Component={Home} />
      </Routes>
    </div>
  );
};

export default AppRoutes;
