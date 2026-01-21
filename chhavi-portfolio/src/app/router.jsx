import { Routes, Route } from "react-router-dom";

import Home from "../features/home/Home.page";
import Resume from "../features/resume/Resume.page";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/resume" element={<Resume />} />
    </Routes>
  );
}
