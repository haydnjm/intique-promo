import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import styled from 'styled-components';

import { COMPETITION_FIELDS } from './fieldSets';
import { compEntry } from './validation';
import BasicForm from './BasicForm';
import CompetitionHeader from '../competition/CompetitionHeader';
import Prizes from '../competition/Prizes';

const validate = compEntry;

const Columns = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

class Competition extends Component {

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  onSubmit = (values) => {
    this.props.competitionEntry(values);
  };

  render () {

    const { handleSubmit, compState } = this.props;

    return <div>
              <CompetitionHeader  />
              <Columns>
                <Prizes />
                <BasicForm
                   fields={COMPETITION_FIELDS}
                   handleSubmit={handleSubmit}
                   onSubmit={this.onSubmit}
                   submit={'Enter!'}
                   status={ compState }
                 />
             </Columns>
           </div>;
  }
};

const mapStateToProps = ({ compState }) => ({ compState });

export default connect(mapStateToProps, actions)(reduxForm({
  validate,
  form: 'compEntry',
})(Competition));
