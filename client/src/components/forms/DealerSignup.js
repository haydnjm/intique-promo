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
      When we launch you'll get your first month's subscription for
      free and if you let us know that you'd like to get involved by
      filling this form in, we'll also create all of your listings for you!
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
          title={'All of your listings done for you for free if you decide to be an early adopter!'}
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
