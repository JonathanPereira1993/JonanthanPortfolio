import AboutPage from "./pages/about/AboutPage";
import HomePage from "./pages/home/HomePage";
import Layout from "./pages/layout/Layout";

import { Routes, Route } from "react-router";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
