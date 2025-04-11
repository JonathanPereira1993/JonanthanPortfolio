import Sidebar from "../../components/Sidebar/Sidebar";
import ContentLayout from "../../components/ContentLayout/ContentLayout";

import ProjectItem from "../../components/ProjectItem/ProjectItem";
import { useState } from "react";

import CheckboxFilterItem from "../../components/CheckboxFilterItem/CheckboxFilterItem";

import { projects, projectFilters } from "../../constants/Constants";
import StaggeredListAnimation from "../../components/StaggeredListAnimation/StaggeredListAnimation";

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
        <StaggeredListAnimation className="columns columns-projects">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project) => (
              <div key={project.id}>
                <ProjectItem
                  key={project.id}
                  projNum={String(project.id)}
                  title={project.title}
                  icon={project.icon}
                  image={project.image}
                  smallDescription={project.description}
                  onClick={() => console.log(`Clicked on ${project.title}`)}
                />
              </div>
            ))
          ) : (
            <p>No projects match the selected filters.</p>
          )}
        </StaggeredListAnimation>
      </ContentLayout>
    </section>
  );
};

export default ProjectsPage;
