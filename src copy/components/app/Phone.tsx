import React from "react";
import { Button, Box, styled } from "@material-ui/core";
import { Link } from "react-router-dom";

const BoxStyle = styled(Box)({
  textTransform: "uppercase",
  paddingTop: "50px",
  margin: "0 auto",
  display: "flex",
  flexDirection: "column",
  textAlign: "center",
  fontSize: "2rem",
  padding: "10px",
  minWidth: "350px",
  height: "350px",
});

const LinkRout = styled(Link)({
  margin: "0 auto",
  display: "flex",
  textDecoration: "none",
});

const MyButton = styled(Button)({
  marginTop: "10px",
  background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
  color: "white",
  height: 48,
  padding: "0 30px",
  display: "flex",
  margin: "0 auto",
});

export const Phone: React.FC = () => {
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