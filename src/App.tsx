import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import styled from 'styled-components';

import Header from './components/header';
import Menu from './components/menu';
import DefaultView from './views/default';
import PayloadView from './views/payload';
import UseCaseView from './views/use-case';

const LayoutStyled = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  flex: 1;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: .5fr 1.5fr;
    grid-gap: 1rem;
  }
`;

const App = () => {
  return (
    <Router>
      <Header />
      <LayoutStyled>
        <Menu />
        <Switch>
          <Route path="/payload/:id">
            <PayloadView />
          </Route>
          <Route path="/use-case/:id">
            <UseCaseView />
          </Route>
          <Route path="/" exact>
            <DefaultView />
          </Route>
        </Switch>
      </LayoutStyled>
    </Router>
  );
};

export default App;
