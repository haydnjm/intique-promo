import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import styled from 'styled-components';

import { DEALER_SIGNUP_FIELDS } from './fieldSets';

import { dealerSignup } from './validation';
import BasicForm from './BasicForm';
import DealerInfo from './DealerInfo';

const validate = dealerSignup;

const Container = styled.div`
  display: flex;
  justify-content: space-around;
`;

class DealerSignup extends Component {

  componentWillUnmount() {
    this.props.clearStatus();
  };

  onSubmit = (values) => {
    this.props.dealerSignup(values);
  };

  render () {

    const description = `We'll be launching the website in July.
      Try our commission-free marketplace for 2 months,
      free of charge, by signing up to our priority list now!`;

    const { handleSubmit, statusMessage } = this.props;
    return (
      <Container>
        <DealerInfo />
        <BasicForm
          description={description}
          fields={DEALER_SIGNUP_FIELDS}
          handleSubmit={handleSubmit}
          onSubmit={this.onSubmit}
          submit={'Sign up'}
          status={statusMessage}
        />
      </Container>
    );
  }
};

const mapStateToProps = ({ status }) => ({ statusMessage: status });

export default connect(mapStateToProps, actions)(reduxForm({
  validate,
  form: 'dealerSignup',
})(DealerSignup));
