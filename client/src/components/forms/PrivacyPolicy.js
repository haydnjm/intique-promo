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
    <div>
      <h3>This privacy policy sets out how Intique uses and protects any information that you give Intique when you use this website.</h3>
      <p>
        Intique is committed to ensuring that your privacy is protected. Should we ask you to provide certain information by which you can be identified when using this website, then you can be assured that it will only be used in accordance with this privacy statement.
      </p>
      <p>
        Intique may change this policy from time to time by updating this page. You should check this page from time to time to ensure that you are happy with any changes. This policy is effective from 18/05/2018
      </p>

      <h3>What we collect</h3>
      <div>
        We may collect the following information:
        <ul>
          <li>name and job title</li>
          <li>contact information including email address</li>
          <li>demographic information such as postcode, preferences and interests</li>
          <li>other information relevant to customer surveys and/or offers</li>
        </ul>
      </div>
      <h3>What we do with the information we gather</h3>
        <div>
          We require this information to understand your needs and provide you with a better service, and in particular for the following reasons:
          <ul>
            <li>Internal record keeping.</li>
            <li>We may use the information to improve our products and services.</li>
            <li>We may periodically send promotional emails about new products, special offers or other information which we think you may find interesting using the email address which you have provided.</li>
            <li>From time to time, we may also use your information to contact you for market research purposes. We may contact you by email, phone, fax or mail. We may use the information to customise the website according to your interests.</li>
          </ul>
        </div>
      <h3>Security</h3>
      <p>
        We are committed to ensuring that your information is secure. In order to prevent unauthorised access or disclosure, we have put in place suitable physical, electronic and managerial procedures to safeguard and secure the information we collect online.
      </p>
      <h3>Links to other websites</h3>
      <p>
        Our website may contain links to other websites of interest. However, once you have used these links to leave our site, you should note that we do not have any control over that other website. Therefore, we cannot be responsible for the protection and privacy of any information which you provide whilst visiting such sites and such sites are not governed by this privacy statement. You should exercise caution and look at the privacy statement applicable to the website in question.
      </p>
    </div>
  </Modal>;

export default PrivacyPolicy;
