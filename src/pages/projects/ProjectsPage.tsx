import Sidebar from "../../components/sidebar/Sidebar";
import ContentLayout from "../../components/contentLayout/ContentLayout";
import "./ProjectsPage.scss";
import GridContainer from "../../components/gridContainer/GridContainer";
import ProjectItem from "../../components/projectItem/ProjectItem";

import { React } from "developer-icons";

import imageTest from "../../assets/books/BillionsAndBillions.jpg";

const ProjectsPage = () => {
  return (
    <section className="projects-section">
      <Sidebar open></Sidebar>
      <ContentLayout title="_projects">
        <GridContainer columns="3" gap="20px">
          <ProjectItem
            icon={<React />}
            image={imageTest}
            title="Simple TODO app in React Native"
            onClick={() => console.log("Clicked")}
          />
        </GridContainer>
      </ContentLayout>
    </section>
  );
};

export default ProjectsPage;
