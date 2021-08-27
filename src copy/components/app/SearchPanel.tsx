import React, { useState, MouseEvent } from "react";

import {MyButton, BoxStyle,  InputStyle} from '../styles/styles'

interface SearchPanelProps {
  onAdd(text: string): void;
  }

export const SearchPanel: React.FC<SearchPanelProps> = (props) => {
  const [text, setText] = useState<string>("");

  const Handler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
    };
  const PressHandler = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault();
      props.onAdd(text);
      setText("");
      }
    };
  const HandlerBtn = (e: MouseEvent) => {
    e.preventDefault();
    props.onAdd(text);
    setText("");
    };

  return (
    <BoxStyle className="wrapper">
      <InputStyle
        onChange={Handler}
        onKeyPress={PressHandler}
        value={text}
        type="text"
        placeholder="ФИЛЬТРУЕМ?"
        id="title"
        className="input"
      />
      <MyButton onClick={HandlerBtn} type="submit" className="search-button">
        Поиск
      </MyButton>
    </BoxStyle>
    );
  };
