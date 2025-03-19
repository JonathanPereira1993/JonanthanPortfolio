import Sidebar from "../../components/sidebar/Sidebar";
import ContentLayout from "../../components/contentLayout/ContentLayout";
import "./ProjectsPage.scss";

const ProjectsPage = () => {
  return (
    <section className="projects-section">
      <Sidebar open></Sidebar>
      <ContentLayout title="_projects">Hello</ContentLayout>
    </section>
  );
};

export default ProjectsPage;
