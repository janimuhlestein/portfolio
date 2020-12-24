import React, { useState} from 'react';
import ProjectCard from '../Project-Card';
import Wrapper from '../Wrapper';
import  overImage from '../../assets/images/small/over-deliver-small.jpeg';
import scratchImage from '../../assets/images/small/scratch-small.jpg';
import budgetImage from '../../assets/images/small/budget-tracker-small.jpg';
import noteImage from '../../assets/images/small/note-taker-small.jpg';
import pizzaImage from '../../assets/images/small/pizza-hunt-small.jpg';
import teamImage from '../../assets/images/small/team-list-small.jpg';
import weatherImage from '../../assets/images/small/weather-small.jpeg';
import techImage from '../../assets/images/small/tech-blog-small.jpg';
import workdayImage from '../../assets/images/small/workday-small.jpeg';
import zookeeprImage from '../../assets/images/small/zookeepr-small.jpg';
//import projects from './projects.json';


function Portfolio() {
  //  const [projectList, setProjectsList] = useState(projects);
  const [projectList] = useState([
    {
        "id": 1,
        "name": "OverDeliver",
        "image": overImage,
        "description": "A delivery rating application for foods and delivery services.",
        "liveLink": "https://shrouded-fortress-41826.herokuapp.com/",
        "gitHublink":"https://github.com/jlightheart24/over-deliver"
    },
    {
        "id": 2,
        "name": "Scratching Your Travel Itch",
        "image": scratchImage,
        "description": "A virtual travel application.",
        "liveLink": "https://loganmerchant.github.io/scratching-your-travel-itch/",
        "gitHublink": "https://github.com/LoganMerchant/scratching-your-travel-itch"
    },
    {
        "id": 3,
        "name": "Budget Tracker",
        "image": budgetImage,
        "description": "A budget-tracking application.",
        "liveLink": "https://mighty-mesa-85556.herokuapp.com/",
        "gitHublink": "https://github.com/janimuhlestein/budget-tracker"
        
    },
    {
            "id": 4,
            "name": "Note Taker",
            "image": noteImage,
            "description": "A note-taking application.",
            "liveLink": "https://pacific-falls-06053.herokuapp.com/",
            "gitHublink": "https://github.com/janimuhlestein/note-taker"
            
    },
    {
        "id": 5,
        "name": "Pizza Hunt",
        "image": pizzaImage,
        "description": "A pizza creation application.",
        "liveLink": "https://stark-spire-86477.herokuapp.com/",
        "gitHublink": "https://github.com/janimuhlestein/pizza-hunt"
    },
    {
        "id": 6,
        "name": "Team List",
        "image": teamImage,
        "description": "A team-list building application.",
        "liveLink": "https://drive.google.com/file/d/1oeqL35O2Tjno6P1NRNppSWwGr8g6A4T2/view",
        "gitHublink": "https://github.com/janimuhlestein/team-list"
    },
    {
        "id": 7,
        "name": "Tech Blog",
        "image": techImage,
        "description": "A technical blog application.",
        "liveLink": "https://stormy-garden-92362.herokuapp.com/",
        "gitHublink": "https://github.com/janimuhlestein/tech-blog"
    },
    {
        "id": 8,
        "name": "Weather Dashboard",
        "image": weatherImage,
        "description": "A weather dashboard application.",
        "liveLink": "https://janimuhlestein.github.io/Weather-Dashboard/",
        "gitHublink": "https://github.com/janimuhlestein/weather-dashboard"
    },
    {
        "id": 9,
        "name": "Workday Scheduler",
        "image": workdayImage,
        "description": "A workday time scheduling application.",
        "liveLink": "https://janimuhlestein.github.io/work-day-scheduler/",
        "gitHublink": "https://github.com/janimuhlestein/work-day-scheduler"
    },
    {
        "id": 10,
        "name": "Zookeepr",
        "image": zookeeprImage,
        "description": "A zoo-animal tracking application.",
        "liveLink": "https://calm-castle-65157.herokuapp.com/",
        "gitHublink": "https://github.com/janimuhlestein/zookeepr"
    }
]);
    return (
        <section className="project-top">
            <div className="top">
                <h1 className = "title">My Projects</h1>
            </div>
        <Wrapper>
            {projectList.map(project=>(
                <ProjectCard
                id={project.id}
                key={project.id}
                name={project.name}
                image={project.image}
                description={project.description}
                liveLink = {project.liveLink}
                gitHublink = {project.gitHublink}
                />
            ))}
        </Wrapper>
        </section>
    );
};

export default Portfolio;