import React from 'react';
import styled from 'styled-components';
import HeaderComp from './Components/HeaderComp';
import MainComp from './Components/MainComp';
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
        <MainComp />
      </AppDev>
    );
  }
}
export default App;