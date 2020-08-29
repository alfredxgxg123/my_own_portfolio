import React from 'react';
import MyProjectsStyle from './MyProjectsComp.css.js';

const MyProjectsComp = () => {
    return (
        <MyProjectsStyle id="work">
            <h1 className="lg-heading">
                My
                <span className="text-secondary"> Projects</span>
                
            </h1>
            <h2 className="sm-heading"> 
                Check them out...
            </h2>

            <div className="projects">
                <div className="item">
                    <a href="#!">
                        <img src="https://pcituress.s3-us-west-1.amazonaws.com/pexels-faaiq-ackmerd-1025469.jpg" alt="Project"/>
                    </a>
                    {/* <a href="#" className="btn-light">
                        <i className="fas fa-eye"></i> 
                        Project
                    </a> */}
                    <a href="#" className="btn-dark">
                        <i className="fas fa-github"></i> 
                        GitHub
                    </a>
                </div>
                <div className="item">
                    <a href="#!">
                        <img src="https://pcituress.s3-us-west-1.amazonaws.com/pexels-faaiq-ackmerd-1025469.jpg" alt="Project"/>
                    </a>
                    {/* <a href="#" className="btn-light">
                        <i className="fas fa-eye"></i> 
                        Project
                    </a> */}
                    <a href="#" className="btn-dark">
                        <i className="fab fa-github"></i> 
                        GitHub
                    </a>
                </div>
                <div className="item">
                    <a href="#!">
                        <img src="https://pcituress.s3-us-west-1.amazonaws.com/pexels-faaiq-ackmerd-1025469.jpg" alt="Project"/>
                    </a>
                    {/* <a href="#" className="btn-light">
                        <i className="fas fa-eye"></i> 
                        Project
                    </a> */}
                    <a href="#" className="btn-dark">
                        <i className="fab fa-github"></i> 
                        GitHub
                    </a>
                </div>
                <div className="item">
                    <a href="#!">
                        <img src="https://pcituress.s3-us-west-1.amazonaws.com/pexels-faaiq-ackmerd-1025469.jpg" alt="Project"/>
                    </a>
                    {/* <a href="#" className="btn-light">
                        <i className="fas fa-eye"></i> 
                        Project
                    </a> */}
                    <a href="#" className="btn-dark">
                        <i className="fab fa-github"></i>
                        GitHub
                    </a>
                </div>
               
            </div>

            
        </MyProjectsStyle>
    )
}

export default MyProjectsComp;