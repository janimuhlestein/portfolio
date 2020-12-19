import React, { useState} from 'react';
import ProjectCard from '../Project-Card';
import Wrapper from '../Wrapper';
import projects from '../../projects.json';

function Portfolio() {
    const [projectList, setProjectsList] = useState(projects);
    return (
        <Wrapper>
            <h1 className="title">Project List</h1>
            {projectList.map(project=>(
                <ProjectCard
                id={project.id}
                key={project.id}
                name={project.name}
                image={project.image}
                description={project.description}
                technology = {project.technology}
                />
            ))}
        </Wrapper>

    );
};

export default Portfolio;