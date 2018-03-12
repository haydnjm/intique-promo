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

    const description = `Brighten up your home with this *details details
      details details*. For your chance to win just enter your details below
      and you'll be entered into the prize draw. We'll send you an email to
      let you know when we'll be drawing the winning ticket and again if you
      are the lucky winner of our prize! (We'll also pay for postage, so you've
      got nothing to lose!)`;

    const { handleSubmit, statusMessage } = this.props;
    return <BasicForm
             description={description}
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
