import React, { Component } from 'react';
import styled from 'styled-components';

import TsandCs from './TsandCs';
import PrivacyPolicy from './PrivacyPolicy';

const TCLink = styled.b`
  color: #f2e482;

  &:hover {
    cursor: pointer
  }
`;

class TandCButtons extends Component {
  state={
    tandc: false,
    priv: false,
  };

  clickButton = (param) => {
    let state = this.state;
    state.tandc = false;
    state.priv = false;
    state[param] = true;
    this.setState(state);
  };

  close = () =>
    this.setState({
      tandc: false,
      priv: false,
    });

  render() {

    const { tandc, priv } = this.state;

    return (
      <span>
        By entering this competition you are agreeing to our
        <TCLink onClick={() => this.clickButton('tandc')}> terms and conditions
        </TCLink> and our <TCLink onClick={() => this.clickButton('priv')}>privicy policy</TCLink>
      { tandc && <TsandCs close={this.close}/>  }
      { priv && <PrivacyPolicy close={this.close}/>}
      </span>
    );
  }
};

export default TandCButtons;
