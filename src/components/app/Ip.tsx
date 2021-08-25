import React from "react";

import { Link } from "react-router-dom";
export const Ip: React.FC = () => {
  return (
    <div>
      Мы найдем Вас по IP.
      <button>
        <Link to="/">Спрятаться под покрывало</Link>
      </button>
    </div>
  );
};
