import React from "react";

export const Greetings = ({ lang, children }) => {
  let greeting = lang;

  return (
    <div className="greeting">
      <p>{lang}</p>
      <p>{children}</p>
    </div>
  );
};
