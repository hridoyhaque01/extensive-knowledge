import Aos from "aos";
import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Blogs from "./components/blog/Blogs";
import CourseDetails from "./components/course/CourseDetails";
import Courses from "./components/course/Courses";
import Teachers from "./components/team/Teachers";
import TeamDetails from "./components/team/TeamDetails";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Course from "./pages/Course";
import Error from "./pages/Error";
import Home from "./pages/Home";
import Login from "./pages/Login";
import PageLayout from "./pages/PageLayout";
import Register from "./pages/Register";
import SingleBlog from "./pages/SingleBlog";
// import SingleCourse from "./pages/SingleCourse";
import "aos/dist/aos.css";
import Team from "./pages/Team";

function App() {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    });
  });

  return (
    <>
      <Routes>
        <Route element={<PageLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="courses" element={<Course />}>
            <Route path="" element={<Courses />} />
            <Route path=":id" element={<CourseDetails />} />
          </Route>
          <Route path="teacher" element={<Team />}>
            <Route path="" element={<Teachers />} />
            <Route path=":id" element={<TeamDetails />} />
          </Route>
          <Route path="blog" element={<Blog />}>
            <Route path="" element={<Blogs />} />
            <Route path=":id" element={<SingleBlog />} />
          </Route>
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>

      {/* <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/*" element={<Course />}>
          <Route path="courses" element={<Courses />} />
          <Route path="courses/:id" element={<CourseDetails />} />
        </Route>
        <Route path="/*" element={<Team />}>
          <Route path="teacher" element={<Teachers />} />
          <Route path="teacher/:id" element={<TeamDetails />} />
        </Route>
        <Route path="/*" element={<Blog />}>
          <Route path="blog" element={<Blogs />} />
          <Route path="blog/:id" element={<SingleBlog />} />
        </Route>
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <ArrowButton />
      <Footer /> */}
    </>
  );
}

export default App;
