import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import * as actions from '../../actions';

import { COMPETITION_FIELDS } from './fieldSets';
import { compEntry } from './validation';
import BasicForm from './BasicForm';
import CompetitionHeader from './CompetitionHeader';
import styled from 'styled-components';

const validate = compEntry;

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

    const { handleSubmit, compState } = this.props;

    return <div>
              <CompetitionHeader
                showLamp={() => this.showLamp()}
                hideLamp={() => this.hideLamp()}
              />
              <BasicForm
                 fields={COMPETITION_FIELDS}
                 handleSubmit={handleSubmit}
                 onSubmit={this.onSubmit}
                 submit={'Enter!'}
                 status={ compState }
                 showImage={this.state.showImage}
               />
           </div>;
  }
};

const mapStateToProps = ({ compState }) => {
  return { compState };
};

export default connect(mapStateToProps, actions)(reduxForm({
  validate,
  form: 'compEntry',
})(Competition));
