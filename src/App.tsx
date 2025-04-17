import AboutPage from "./pages/about/AboutPage";
import ContactsPage from "./pages/contacts/ContactsPage";
import HomePage from "./pages/home/HomePage";
import Layout from "./pages/layout/Layout";

import { Routes, Route } from "react-router";
import ProjectsPage from "./pages/projects/ProjectsPage";
import ProjectDetailsPage from "./pages/projects/ProjectDetailsPage";
import HobbieDetailsPage from "./pages/hobbies/HobbieDetailsPage";
import { SidebarContextProvider } from "./Context/SidebarProvider";

function App() {
  return (
    <SidebarContextProvider>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/about/hobbies/:hid" element={<HobbieDetailsPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/projects/:pid" element={<ProjectDetailsPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
        </Routes>
      </Layout>
    </SidebarContextProvider>
  );
}

export default App;
