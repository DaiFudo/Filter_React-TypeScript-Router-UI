import React from "react";

import {MyButton, BoxStyle,  LinkRout} from '../styles/styles'

const Ip: React.FC = () => {
  return (
    <BoxStyle>
      Мы найдем Вас по IP!
      <LinkRout to="/">
        <MyButton variant="contained" color="primary">
          Спрятаться под покрывало
        </MyButton>
      </LinkRout>
    </BoxStyle>
    );
  };
export default Ip;
