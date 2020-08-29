import React from 'react';
import MainStyle from './MainComp.css.js';

const MainComp = () => {
    return (
        <MainStyle id="home">
            <h1 className="lg-heading">
                Alfred
                <span className="text-secondary"> Guan</span>
            </h1>
            <h2 className="sm-heading"> 
                Full-Stack Developer & Software Engineer
            </h2>
            <div className="icons">
                <a href="https://github.com/alfredxgxg123">
                    <i className="fab fa-github fa-2x"></i>
                </a>
                <a href="https://www.linkedin.com/in/weimingguan1003">
                    <i className="fab fa-linkedin fa-2x"></i>
                </a>
                <a href="#!">
                    <i className="fab fa-facebook fa-2x"></i>
                </a>
                <a href="#!">
                    <i className="fab fa-twitter fa-2x"></i>
                </a>
            </div>
        </MainStyle>
    )
}

export default MainComp;