import React from "react";

import {MyButton, BoxStyle,  LinkRout} from '../styles/styles'

 const Phone: React.FC = () => {
  return (
    <BoxStyle>
      8(800)-555-35-35 Проще позвонить, чем у кого-то занимать.
      <LinkRout to="/">
        <MyButton variant="contained" color="primary">
          Отдать долг!
        </MyButton>
      </LinkRout>
    </BoxStyle>
    );
  
  };
export default Phone;