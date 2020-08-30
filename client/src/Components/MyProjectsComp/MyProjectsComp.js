import React from 'react';
import MyProjectsStyle from './MyProjectsComp.css.js';

const MyProjectsComp = () => {
    return (
        <MyProjectsStyle id="work">
            <h1 className="lg-heading">
                Some of My
                <span className="text-secondary"> Projects</span>
                
            </h1>
            <h2 className="sm-heading"> 
                Check them out...
            </h2>

            <div className="projects">
                <div className="item">
                    <a href="https://www.youtube.com/watch?v=joq4e4U_LHo">
                        <img src="https://pcituress.s3-us-west-1.amazonaws.com/Screen+Shot+2020-08-29+at+10.10.13+PM.png" alt="Project"/>
                    </a>
                    <a href="https://www.youtube.com/watch?v=joq4e4U_LHo" className="btn-light">
                        <i className="fas fa-eye"></i> { }
                        bitztream
                    </a>
                    <a href="https://github.com/bitztream/videoplayer-comp" className="btn-dark">
                        <i className="fas fa-github"></i> { }
                        GitHub
                    </a>
                </div>
                <div className="item">
                    <a href="https://github.com/Bungal-ow/Contacts">
                        <img src="https://pcituress.s3-us-west-1.amazonaws.com/Screen+Shot+2020-08-29+at+10.17.58+PM.png" alt="Project"/>
                    </a>
                    <a href="https://github.com/Bungal-ow/Contacts" className="btn-light">
                        <i className="fas fa-eye"></i> { }
                        Bungal-ow
                    </a>
                    <a href="https://github.com/Bungal-ow/Contacts" className="btn-dark">
                        <i className="fab fa-github"></i> { }
                        GitHub
                    </a>
                </div>
                <div className="item">
                    <a href="https://www.youtube.com/watch?v=nBU2P06DAlg">
                        <img src="https://pcituress.s3-us-west-1.amazonaws.com/Screen+Shot+2020-08-29+at+9.44.39+PM.png" alt="Project"/>
                    </a>
                    <a href="https://www.youtube.com/watch?v=nBU2P06DAlg" className="btn-light">
                        <i className="fas fa-eye"></i> { }
                        EcomFull
                    </a>
                    <a href="https://github.com/alfredxgxg123/EcomFull" className="btn-dark">
                        <i className="fab fa-github"></i> { }
                        GitHub
                    </a>
                </div>
                <div className="item">
                    <a href="https://www.youtube.com/watch?v=29qJbbnrYpo">
                        <img src="https://pcituress.s3-us-west-1.amazonaws.com/Screen+Shot+2020-08-29+at+9.20.05+PM.png" alt="Project"/>
                    </a>
                    <a href="https://www.youtube.com/watch?v=29qJbbnrYpo" className="btn-light">
                        <i className="fas fa-eye"></i>  { }
                        RecipeBank
                    </a>
                    <a href="https://github.com/alfredxgxg123/miniRecipeBank" className="btn-dark">
                        <i className="fab fa-github"></i> { }
                        GitHub
                    </a>
                </div>
               
            </div>

            
        </MyProjectsStyle>
    )
}

export default MyProjectsComp;