import React from "react";
import { Route, Routes } from "react-router-dom";
import Blogs from "./components/blog/Blogs";
import CourseDetails from "./components/course/CourseDetails";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Courses from "./components/home/Courses";
import Teachers from "./components/team/Teachers";
import TeamDetails from "./components/team/TeamDetails";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Course from "./pages/Course";
import Error from "./pages/Error";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import SingleBlog from "./pages/SingleBlog";
// import SingleCourse from "./pages/SingleCourse";
import Team from "./pages/Team";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/*" element={<Course />}>
          <Route path="Course" element={<Courses />} />
          <Route path="Course/:id" element={<CourseDetails />} />
        </Route>
        <Route path="/*" element={<Team />}>
          <Route path="team" element={<Teachers />} />
          <Route path="team/:id" element={<TeamDetails />} />
        </Route>
        {/* <Route path="/blog" element={<Blog />} /> */}
        <Route path="/contact" element={<Contact />} />
        <Route path="/*" element={<Blog />}>
          <Route path="blog" element={<Blogs />} />
          <Route path="blog/:id" element={<SingleBlog />} />
        </Route>
        {/* <Route path="/singlecourse/:id" element={<SingleCourse />} /> */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
