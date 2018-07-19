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
      If you register today to become a seller when we launch,
      you'll receive the first two months of your subscription for free.
      This offer will be ending in August, so make sure that you don't
      miss out!`;

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
          title={'GET 2 MONTHS SUBSCRIPTION FOR FREE'}
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
