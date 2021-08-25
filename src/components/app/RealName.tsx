import React from "react";
import { Link } from "react-router-dom";

export const RealName: React.FC = () => {
  return (
    <div>
      Имя... Его нельзя произносить...
      <button>
        <Link to="/">Вернуться домой</Link>
      </button>
    </div>
  );
};
