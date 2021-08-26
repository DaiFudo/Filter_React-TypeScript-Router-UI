import React, { useState, MouseEvent } from "react";
import { Button, Box, TextField, styled } from "@material-ui/core";

const InputStyle = styled(TextField)({
  fontSize: "2rem",
  border: "2px solid grey",
  borderRadius: "10px",
  padding: "10px",
  backgroundColor: "white",
});

const BoxStyle = styled(Box)({
  textTransform: "uppercase",
  paddingTop: "50px",
  margin: "0 auto",
  display: "flex",
  flexDirection: "column",
  textAlign: "center",
  fontSize: "2rem",
  padding: "10px",
  width: "350px",
  height: "350px",
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

interface SearchPanelProps {
  onAdd(request: string): void;
}

export const SearchPanel: React.FC<SearchPanelProps> = (props) => {
  const [request, setRequest] = useState<string>("");

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRequest(e.target.value);
  };
  const keyPressHandler = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault();
      props.onAdd(request);
      setRequest("");
    }
  };
  const changeHandlerBtn = (e: MouseEvent) => {
    e.preventDefault();
    props.onAdd(request);
    setRequest("");
  };

  return (
    <BoxStyle className="app-form">
      <InputStyle
        onChange={changeHandler}
        onKeyPress={keyPressHandler}
        value={request}
        type="text"
        placeholder="ФИЛЬТРУЕМ?"
        id="title"
        className="app-input"
      />
      <MyButton onClick={changeHandlerBtn} type="submit" className="btn">
        Поиск
      </MyButton>
    </BoxStyle>
  );
};
