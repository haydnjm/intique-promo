import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import * as actions from '../../actions';

import { COMPETITION_FIELDS } from './fieldSets';
import { compEntry } from './validation';
import BasicForm from './BasicForm';

const validate = compEntry;

class Competition extends Component {

  state = {
    isLoading: false,
  };

  componentWillUnmount() {
    this.props.clearStatus();
  };

  onSubmit = (values) => {
    this.setState({ isLoading: true });
    this.props.competitionEntry(values);
  };

  render () {
    const { handleSubmit, statusMessage } = this.props;
    return <BasicForm
             fields={COMPETITION_FIELDS}
             handleSubmit={handleSubmit}
             onSubmit={this.onSubmit}
             submit={'Enter!'}
             status={statusMessage}
             isLoading = { this.state.isLoading }
           />;
  }
};

const mapStateToProps = ({ status }) => ({ statusMessage: status });

export default connect(mapStateToProps, actions)(reduxForm({
  validate,
  form: 'compEntry',
})(Competition));
