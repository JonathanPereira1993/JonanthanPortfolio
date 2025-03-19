import Sidebar from "../../components/sidebar/Sidebar";
import ContentLayout from "../../components/contentLayout/ContentLayout";
import "./ProjectsPage.scss";
import GridContainer from "../../components/gridContainer/GridContainer";
import ProjectItem from "../../components/projectItem/ProjectItem";
import { useState } from "react";

import CheckboxFilterItem from "../../components/checkboxFilterItem/CheckboxFilterItem";

import { projects, projectFilters } from "../../constants/Constants";

const ProjectsPage = () => {
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

  const handleFilterChange = (filter: string) => {
    setSelectedFilters((prevFilters) =>
      prevFilters.includes(filter)
        ? prevFilters.filter((f) => f !== filter)
        : [...prevFilters, filter]
    );
  };

  const filteredProjects = projects.filter((project) =>
    selectedFilters.length > 0
      ? project.tags.some((tag) => selectedFilters.includes(tag))
      : true
  );

  return (
    <section className="projects-section">
      <Sidebar open>
        {projectFilters.map((filter, index) => (
          <CheckboxFilterItem
            key={index}
            id={index}
            isChecked={selectedFilters.includes(filter)}
            label={filter}
            onClick={() => handleFilterChange(filter)}
          />
        ))}
      </Sidebar>
      <ContentLayout title="_projects">
        <GridContainer columns="3" gap="20px">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project) => (
              <ProjectItem
                key={project.id}
                projNum={String(project.id)}
                title={project.title}
                icon={project.icon}
                image={project.image}
                smallDescription={project.description}
                onClick={() => console.log(`Clicked on ${project.title}`)}
              />
            ))
          ) : (
            <p>No projects match the selected filters.</p>
          )}
        </GridContainer>
      </ContentLayout>
    </section>
  );
};

export default ProjectsPage;
