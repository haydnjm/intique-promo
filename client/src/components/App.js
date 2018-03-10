import React, { Component } from 'react';

import { BrowserRouter, Route, Link } from 'react-router-dom';
//import * as actions from '../actions';

import Competition from './forms/Competition';
import DealerSignup from './forms/DealerSignup';

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <div>
            <h1>Intique logo here</h1>
            <Link to="/enter-competition"><button>Enter our competition</button></Link>
            <Link to="/dealer-signup"><button>Signup to become a dealer</button></Link>
          </div>
          <div>
            <Route path="/enter-competition" component={ Competition }/>
            <Route path="/dealer-signup" component={ DealerSignup }/>
          </div>
        </div>
      </BrowserRouter>
    );
  };
}

// export default connect(null, actions)(App);

export default App;
