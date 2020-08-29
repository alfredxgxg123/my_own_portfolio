import React from 'react';
import styled from 'styled-components';
import { Route, Switch } from 'react-router-dom';

import HeaderComp from './Components/HeaderComp/HeaderComp';
import MainComp from './Components/MainComp/MainComp';
import AboutMeComp from './Components/AboutMeComp/AboutMeComp';
import MyProjectsComp from './Components/MyProjectsComp/MyProjectsComp';
import ContactMeComp from './Containers/ContactMeComp/ContactMeComp';
import {mediaSm, mediaMd, mediaLg, mediaXL} from './reponsive.css';


const AppDev = styled.div`
  a {
    color: #fff;
    text-decoration: none;
  }

  header {
    position: fixed;
    z-index: 2;
    width: 100%;
  }
  #main-footer {
    text-align: center;
    padding: 1.5rem;
    font-size: 0.8em;
    color: #fff;
    height: 60px; 
    width: 100%;
    bottom:0;
  }

  ${mediaSm()}
  ${mediaMd()}
  ${mediaLg()}
  ${mediaXL()}
`;


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <AppDev>
        <HeaderComp />  
        <Switch>
          <Route path="/About_Me" exact component={AboutMeComp} />
          <Route path="/My_Projects" exact component={MyProjectsComp} />
          <Route path="/Contact_Me"  exact component={ContactMeComp} />
          <Route path="/" component={MainComp} />
        </Switch>
        <footer id="main-footer">
          Copyright &copy; 2020
        </footer>
      </AppDev>
    );
  }
}
export default App;