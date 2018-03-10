import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import * as actions from '../../actions';

import { DEALER_SIGNUP_FIELDS } from './fieldSets';

import { dealerSignup } from './validation';
import BasicForm from './BasicForm';

const validate = dealerSignup;

class DealerSignup extends Component {

  componentWillUnmount() {
    this.props.clearStatus();
  };

  onSubmit = (values) => {
    this.props.dealerSignup(values);
  };

  render () {
    const { handleSubmit, statusMessage } = this.props;
    return <BasicForm
             fields={DEALER_SIGNUP_FIELDS}
             handleSubmit={handleSubmit}
             onSubmit={this.onSubmit}
             submit={'Sign up'}
             status={statusMessage}
           />;
  }
};

const mapStateToProps = ({ status }) => ({ statusMessage: status });

export default connect(mapStateToProps, actions)(reduxForm({
  validate,
  form: 'dealerSignup',
})(DealerSignup));
