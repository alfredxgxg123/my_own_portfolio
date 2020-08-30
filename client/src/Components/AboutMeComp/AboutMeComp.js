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
                My work expereince...
            </h2>

            <div className="about-info">
                <img  className="bio-image" src="https://pcituress.s3-us-west-1.amazonaws.com/123123.jpg" alt="Alfred Guan"/>

                <div className="bio">
                    <h3 className="text-secondary"></h3>
                    <p>
                        I’m a software engineer with a passion for learning new technology and being able to solve problems that could make an impact on people.
                        I love learning new technologies and building things from scratch. It is always fascinating to see an idea that turns into a product that people can touch and use at the end.
                        I have experience with distributed, large-scale, highly available systems/full-stack application and database modeling.
                    </p>
                </div>
                
                <div className="job job-1">
                    <h3>Global Resource & Technology Development Inc.</h3>
                    <h3>July 2020 - Present</h3>
                    <h4>Software Engineer Intern</h4>
                    <p>
                        ● Increased code efficiency significantly by modifying existing features’ legacy frontend vanilla HTML/CSS andJavaScript codebase into React.js and Redux saga components
                    </p>
                    <p>
                        ● Designed PostgreSQL database schema and automated schema migration workflow for new features

                    </p>
                    <p>
                        ● Built backend REST APIs and backend system that could handle and support concurrent user CRUDinteractions efficiently with the Node.js and Express.js framework
                    </p>
                 
                </div>
                <div className="job job-2">
                    <h3>ICURO</h3>
            
                    <h3>Apr 2020 – July 2020</h3>
                    <h4>Software Engineer Intern</h4>
                    <p>
                        ● Deployed face recognition feature on the platform which reduced customer registration time incredibly
                    </p>
                    <p>
                        ● Migrated the company’s website to AWS EC2 cloud service and Docker which decreased website loading time by 1.2 seconds
                    </p>
                    <p>
                        ● Designed and implemented UI functionalities such as career and leader board page along with backend services in React.js and Node.js
                    </p>
                    <p>
                        ● Reduced codebase and workload from server by implementing mission-critical web service with the support of Ruby on Rails, AWS S3, Lambda, and DynamoDB
                    </p>

                </div>
               
            </div>


        </AboutMeStyle>
    )
}

export default AboutMeComp;