import React from 'react';
import './style.css';

function ProjectCard(props) {
    return (
        <div className = "card">
            <div className = 'img-container'>
            <a href={props.link}><img src={props.image} alt={props.name} onClick={props.link} /></a>
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
                        Technology: {props.technology}
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default ProjectCard;