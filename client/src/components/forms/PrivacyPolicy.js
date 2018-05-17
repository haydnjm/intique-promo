import React from 'react';
import styled, { keyframes } from 'styled-components';

const floatUp = keyframes`
  from {
    transform: translateY(100vh);
  }

  to {
    transform: translateY(0vh);
  }
`;

const Modal = styled.div`
  width: 95%;
  max-width: 800px;
  max-height: 80%;
  overflow-y: scroll;
  position: fixed;
  box-sizing: border-box;
  padding: 25px;
  top: 10%;
  z-index: 100;
  left: 50%;
  margin-left: -400px;
  background-color: #3b424c;
  color: #f2e482;
  border-radius: 10px;
  box-shadow: 0px 3px 15px rgba(0,0,0,0.75);

  animation: ${floatUp} .3s cubic-bezier(.25,.82,.41,.99);
`;

const Close = styled.span`
  color: #dd6540;
  font-size: 2rem;
  position: absolute;
  top: 10px;
  right: 20px;

  &:hover {
    cursor: pointer;
  }
`;

const PrivacyPolicy = ({ close }) =>
  <Modal>
    <Close onClick={close}>x</Close>
    <h2>Privacy Policy</h2>
    <p>
      We will not use your personal information with any 3rd parties. Your information will
      be stored on our own secure database. The winning entry will choose one
      of the three items photographed, the chosen item will also be delivered
      to you free of charge within the UK (excludes Ireland). All entries must
      be aged 18 or over. The draw will take place on 13/07/18 at 8:00PM and
      the winning entrant will be contacted via email within 5 days of the
      competition ending to arrange delivery.
    </p>
  </Modal>;

export default PrivacyPolicy;
