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
  flex-wrap: wrap;
  justify-content: space-around;
`;

class DealerSignup extends Component {

  onSubmit = (values) => {
    this.props.dealerSignup(values);
  };

  render () {

    const description = `We'll be launching the website in July.
      Try our commission-free marketplace for 2 months, and get all
      of your initial listings done for you
      free of charge, by signing up to our priority seller list now!`;

    const { handleSubmit, signupState } = this.props;
    return (
      <Container>
        <DealerInfo />
        <BasicForm
          description={description}
          fields={DEALER_SIGNUP_FIELDS}
          handleSubmit={handleSubmit}
          onSubmit={this.onSubmit}
          submit={'Sign up'}
          status={ signupState }
          title={'GET 2 MONTHS FREE'}
        />
      </Container>
    );
  }
};

const mapStateToProps = ({ signupState }) => {
  return { signupState };
};

export default connect(mapStateToProps, actions)(reduxForm({
  validate,
  form: 'dealerSignup',
})(DealerSignup));
