import React from "react";

import {MyButton, BoxStyle,  LinkRout} from '../styles/styles'

const RealName: React.FC = () => {
  return (
    <BoxStyle>
      Имя... Его нельзя произносить...
      <LinkRout to="/">
        <MyButton variant="contained" color="primary">
          Tccc...
        </MyButton>
      </LinkRout>
    </BoxStyle>
    );
  };
export default RealName;