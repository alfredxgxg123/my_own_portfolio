import React from 'react';
import AboutMeStyle from './AboutMeComp.css.js';

const AboutMeComp = () => {
    return (
        <AboutMeStyle id="about">
            <h1 className="lg-heading">
                About
                <span className="text-secondary"> Me</span>
                
            </h1>
            <h2 className="sm-heading"> 
                Click Here: { } 
                <a href="https://drive.google.com/file/d/16OgYxFtCVkMh9Ibf5TLYWuVaSl8-x4tm/view?usp=sharing">
                    <span>My Resume</span>
                </a>
            </h2>

            <div className="about-info">
                <img  className="bio-image" src="https://pcituress.s3-us-west-1.amazonaws.com/123123.jpg" alt="Alfred Guan"/>

                <div className="bio">
                    <h3 class="text-secondary">About Me</h3>
                    <p>
                        lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 
                        lorem30 lorem30 lorem30  
                        lorem30 lorem30 lorem30 lorem30 lorem30 
                        lorem30 lorem30 lorem30 lorem30 lorem30 
                        orem30 lorem30 lorem30 lorem30 lorem30 
                        lorem30 lorem30 lorem30 lorem30 lorem30 
                        orem30 lorem30 lorem30 lorem30 lorem30 
                        lorem30 lorem30 lorem30 lorem30 lorem30 
                    </p>
                </div>
                
                <div className="job job-1">
                    <h3>project 1</h3>
                    <h6>Software Engineer Intern</h6>
                    <p>
                        lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 
                        lorem30 lorem30 lorem30  
                        lorem30 lorem30 lorem30 lorem30 lorem30 
                        lorem30d lorem30 lorem30 lorem30 lorem30 
                    </p>
                </div>
                <div className="job job-2">
                    <h3>project 2</h3>
                    <h6>Software Engineers Intern</h6>
                    <p>
                        lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 
                        lorem30 lorem30 lorem30  
                        lorem30 lorem30 lorem30 lorem30 lorem30 
                        lorem30 lorem30 lorem30 lorem30 lorem30 
           
                    </p>
                </div>
                <div className="job job-3">
                    <h3>project 3</h3>
                    <h6>Software Engineer</h6>
                    <p>
                        lorem30 lorem30 lorem30 lorem30 lorem30 lorem30 
                        lorem30 lorem30 lorem30  
                        lorem30 lorem30 lorem30 lorem30 lorem30 
                        lorem30 lorem30 lorem30 lorem30 lorem30 

                    </p>
                </div>
               
            </div>


        </AboutMeStyle>
    )
}

export default AboutMeComp;