import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import * as actions from '../../actions';

import { COMPETITION_FIELDS } from './fieldSets';
import { compEntry } from './validation';
import BasicForm from './BasicForm';
import styled from 'styled-components';

const validate = compEntry;

const LampLink = styled.span`
  text-decoration: underline;
  color: white;
  display: inline-block;
  margin: 0;

  &hover {
    cursor: pointer;
  }
`;

const Banner = styled.img`
  display: block;
  width: 90%;
  margin: 0 auto 35px;
`;

class Competition extends Component {

  state = {
    showImage: false,
  };

  onSubmit = (values) => {
    this.props.competitionEntry(values);
  };

  showLamp = () => {
    this.setState({ showImage: true });
  };

  hideLamp = () => {
    this.setState({ showImage: false });
  };

  render () {

    const description =
      [
        <Banner src='./images/banner.svg' />,
        `Brighten up your home with `,
        <LampLink
          key='lamp'
          onMouseOver={() => this.showLamp()}
          onMouseLeave={() => this.hideLamp()}>
          this green enamel industrial lamp
        </LampLink>,
        `! For your chance to win just enter your details below
        and you'll be entered into the prize draw. We'll send you an email to
        let you know when we'll be drawing the winning ticket and again if you
        are the lucky winner of our prize! (We'll also pay for postage, so you've
        got nothing to lose!)`,
      ];

    const { handleSubmit, compState } = this.props;

    return <BasicForm
             description={description}
             fields={COMPETITION_FIELDS}
             handleSubmit={handleSubmit}
             onSubmit={this.onSubmit}
             submit={'Enter!'}
             status={ compState }
             showImage={this.state.showImage}
           />;
  }
};

const mapStateToProps = ({ compState }) => {
  return { compState };
};

export default connect(mapStateToProps, actions)(reduxForm({
  validate,
  form: 'compEntry',
})(Competition));
