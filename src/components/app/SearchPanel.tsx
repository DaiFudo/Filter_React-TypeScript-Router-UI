import React, { useState, MouseEvent } from "react";
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
    console.log(request, "from SearchPanel request");
  };

  return (
    <form className="app-form">
      <input
        onChange={changeHandler}
        onKeyPress={keyPressHandler}
        value={request}
        type="text"
        placeholder="Hi there!"
        id="title"
        className="app-input"
      />
      <button onClick={changeHandlerBtn} type="submit" className="btn">
        Search
      </button>
    </form>
  );
};
