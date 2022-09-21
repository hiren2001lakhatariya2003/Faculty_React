import React from "react";

import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Home";
import About from "./About";
import Layout from "./Layout";
import AllFacultyDesign from "./AllFacultyDesign";
import FacultyDetial from "./FacultyDetail";
import Contact from "./Contact";
import FacultyAdd from "./FacultyAdd";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/faculties" element={<AllFacultyDesign />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/faculty/:id" element={<FacultyDetial />}></Route>
          <Route path="/faculty/add" element={<FacultyAdd />}></Route>
          <Route path="/faculty/edit/:id" element={<FacultyAdd />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </>
);
