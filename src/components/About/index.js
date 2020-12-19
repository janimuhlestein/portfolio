import React from 'react';
import coverImage from '../../assets/images/coverImage.jpg';

function About() {
    return (
        <section className = "my-5 coverImage">
            <div className = "coverImage top">
            <img src={coverImage} className = "coverImage" style={{ width: "50%"}} alt = "female developer" />
            <div>
                <p>I am a software tester, full-stack software developer, writer, historian, musician, and avid supporter of our military.</p>
                <p>I have worked in the software industry for 25 years. I adore software: creating it, and breaking it.
                    </p>
                <p>
                I believe that software is meant to make the world a better place, not make it harder to do what you need to.
                </p>
                
                <p>Teams must work together to form software that makes a difference. Each 
                team member is as important as the rest.
                </p>
                <p>
                    I have little patience for ego, temper, or arrogance; I love it when a team comes together as one to achieve something 
                    amazing.
                </p>
                <p>
                    As a tester, I am the liaison between the user and the development team. As such, what I do matters to everyone.
                </p>
            </div>
            </div>
        </section>
    )

};

export default About;