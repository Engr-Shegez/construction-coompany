import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import ExplorePage from "./pages/ExplorePage";
import Home from "./pages/Home";
import Layout from "./components/Layout";
import WorkWithUsPage from "./pages/WorkWithUsPage";
import ViewProject from "./pages/ViewProject";
import ReadMorePage from "./pages/ReadMorePage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/explore" element={<ExplorePage />} />
          <Route path="/workWithUs" element={<WorkWithUsPage />} />
          <Route path="/viewProject" element={<ViewProject />} />
          <Route path="/readMore" element={<ReadMorePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
