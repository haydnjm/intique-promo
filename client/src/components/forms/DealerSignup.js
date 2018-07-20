import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import styled from 'styled-components';

import * as actions from '../../actions';
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

    const description = `We'll be launching the website in September.
      If you let us know here that you might like to get involved when we do,
      we'll create all of your initial listings for you for free! Don't
      worry, you're not committing to anything now; just giving us a heads
      up to keep you updated on when you'll be able to sign up.
      Come and be part of the new way to sell as an independent business
      online!`;

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
          title={
            `Let us know that you'd like to get involved when we launch!`
          }
          />
      </Container>
    );
  }
};

const mapStateToProps = ({ signupState }) => ({ signupState });

export default connect(mapStateToProps, actions)(reduxForm({
  validate,
  form: 'dealerSignup',
})(DealerSignup));
