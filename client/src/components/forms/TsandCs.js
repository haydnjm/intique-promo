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

const TsandCs = ({ close }) =>
  <Modal>
    <Close onClick={close}>x</Close>
    <h2>Terms and Conditions</h2>
    <p>
      1. This prize draw is open to residents of the UK, aged 18 years or over, except employees of Intique, their families, agents or anyone else professionally associated with the draw.
    </p>
    <p>
      2. Details of how to enter form part of the terms and conditions.  It is a condition of entry that all rules are accepted as final and that the competitor agrees to abide by these rules.  The decision of the judges is final and no correspondence will be entered into.
    </p>
    <p>
      3. Entries must be submitted via the web address www.intique.net/win and entry is restricted to one per person.  Once submitted, entries cannot be amended in any way.
    </p>
    <p>
      4. Late, illegible, incomplete, defaced or corrupt entries or entries sent through agencies and third parties will not be accepted.  There is no entry fee and no purchase necessary to enter this competition.  The winner will be drawn at random from all entries received by the closing date.  The draw will take place on the 13/07/2018
    </p>
    <p>
      5. All entries must be received by 11.59pm on 12/07/18. After this date no further entries to the competition will be permitted.
    </p>
    <p>
      6. The winner will be contacted by Intique Limited via email up to 5 days after the competition closes. Should Intique Limited be unable to contact the winner within 5 working days of notification or should the winner be unable to accept the prize, Intique reserves the rights to award the prize to an alternative winner, drawn in accordance with these terms and conditions.
    </p>
    <p>
      7. Delivery time scales will vary depending on location within the UK and can take up to 28 days to receive your prize.
    </p>
    <p>
      8. One winning entrant will win one of the following three options listed: option 1 - Vernon Panton C1 Vitra chair, option 2 - 1940’s Industrial Machinists green lamp or option 3 – a circular teak 1960’s coffee table. All three items are photographed on our competition page at: www.intique.net/win. All three products are vintage/antique so may show signs of fair wear and tear.
    </p>
    <p>
      9. No cash alternative to the prize will be offered. The prize is not transferable.
    </p>
    <p>
      10. The winner may be required to participate in reasonable publicity on behalf of Intique.
    </p>
    <p>
      11. Entrants’ data will be used for the purpose of administration of this prize draw and in accordance with the permissions granted or withheld at the point of entry.
    </p>
    <p>
      12. Events may occur that render the prize draw itself or the awarding of the prizes impossible due to reasons beyond the control of Intique.  Accordingly, Intique may, at its absolute discretion, vary or amend the promotion and the entrant agrees that no liability shall attach to Intique as a result thereof.
    </p>
    <p>
      13. Intique is responsible for the promotion, which is the publication and adjudication of the prize draw. Provision of the prize is also the responsibility of Intique.
    </p>
    <p>
      14. This promotion is in no way sponsored, endorsed or administered by, or associated with, Facebook, Twitter or any other social network.
    </p>
    <p>
      15. These Terms and Conditions are to be interpreted in accordance with English law and any dispute arising out of these Terms or their subject matter is subject to the exclusive jurisdiction of the English Courts.
    </p>
    <p>
      16. By agreeing to these terms and conditions you agree to receive promotional offers from Intique Limited to the email you have provided.
    </p>
  </Modal>;
export default TsandCs;
