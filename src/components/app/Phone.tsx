import React from "react";
import { Link } from "react-router-dom";

export const Phone: React.FC = () => {
  return (
    <div>
      8(800)-555-35-35 Проще позвонить, чем у кого-то занимать.
      <button>
        <Link to="/">Вернуться домой</Link>
      </button>
    </div>
  );
};
