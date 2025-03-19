import AboutPage from "./pages/about/AboutPage";
import ContactsPage from "./pages/contacts/ContactsPage";
import HomePage from "./pages/home/HomePage";
import Layout from "./pages/layout/Layout";

import { Routes, Route } from "react-router";
import ProjectsPage from "./pages/projects/ProjectsPage";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
