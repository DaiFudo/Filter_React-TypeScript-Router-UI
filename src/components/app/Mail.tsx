import React from "react";
import { Link } from "react-router-dom";
export const Mail: React.FC = () => {
  return (
    <div>
      Поговаривают тут были сообщения... Но Снитчи украли их! Вернуться домой
      <button>
        <Link to="/">Вернуться домой</Link>
      </button>
    </div>
  );
};
