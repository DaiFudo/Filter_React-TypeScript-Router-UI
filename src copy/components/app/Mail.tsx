import React from "react";

import {MyButton, BoxStyle,  LinkRout} from '../styles/styles'

const Mail: React.FC = () => {
  return (
    <BoxStyle>
      Дедушке Морозу уже пришло сообщение.
      <LinkRout to="/">
        <MyButton variant="contained" color="primary">
          Ждать подарка!
        </MyButton>
      </LinkRout>
    </BoxStyle>
    );
  };
export default Mail;