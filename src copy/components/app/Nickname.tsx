import React from "react";

import {MyButton, BoxStyle,  LinkRout} from '../styles/styles'

const Nickname: React.FC = () => {
  return (
    <BoxStyle>
      Не ужели это... Leeroy Jenkins?!
      <LinkRout to="/">
        <MyButton variant="contained" color="primary">
          Кикнуть героя
        </MyButton>
      </LinkRout>
    </BoxStyle>
    );
  };
export default Nickname;