import React from 'react';
import styled from 'styled-components';
import HeaderComp from './Components/HeaderComp';
import MainComp from './Components/MainComp';

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