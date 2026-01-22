import { Routes, Route } from "react-router-dom";

import Home from "../features/home/Home.page";
import Projects from "../features/projects/Projects.page";
import Blogs from "../features/blogs/blogs.pages";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
       <Route path="/blogs" element={<Blogs />} />
    </Routes>
  );
}
