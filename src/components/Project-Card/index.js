import React from 'react';
import './style.css';

function ProjectCard(props) {
    return (
        <div className = "card">
            <div className = 'img-container'>
            <a href={props.liveLink}><img src={props.image} alt={props.name} onClick={props.liveLink} /></a>
            </div>
            <div className = "content">
                <ul>
                    <li>
                        Name: {props.name}
                    </li>
                    <li>
                        Description: {props.description}
                    </li>
                    <li>
                        <a className="card" href={props.gitHublink}>Github</a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default ProjectCard;