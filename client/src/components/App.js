import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import styled from 'styled-components';

import Competition from './forms/Competition';
import DealerSignup from './forms/DealerSignup';

const Container = styled.div`
  width: 100%;
  height: 100vh;
  margin: 0;
  background-color: #252628;
  color: #eddd4f;
`;

const Header = styled.div`
  padding: 50px;
  text-align: center;
`;

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <Container>
          <Header>
            <h1>Intique logo here</h1>
            <Link to="/enter-competition"><button>Enter our competition</button></Link>
            <Link to="/dealer-signup"><button>Signup to become a dealer</button></Link>
          </Header>
          <div>
            <Route path="/enter-competition" component={ Competition }/>
            <Route path="/dealer-signup" component={ DealerSignup }/>
          </div>
        </Container>
      </BrowserRouter>
    );
  };
}

// export default connect(null, actions)(App);

export default App;
