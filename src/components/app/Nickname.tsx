import React from "react";
import { Link } from "react-router-dom";

export const Nickname: React.FC = () => {
  return (
    <div>
      Не ужели это... Leeroy Jenkins?!{" "}
      <button>
        <Link to="/">Вернуться домой</Link>
      </button>
    </div>
  );
};
