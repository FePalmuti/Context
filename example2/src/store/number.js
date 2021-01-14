import React, { createContext, useContext, useState } from "react";

const NumberContext = createContext();

export default function NumberProvider({ children }) {
  const [number, setNumber] = useState(0);

  const value = {
    number,
    increment: () => setNumber(number+1),
    decrement: () => setNumber(number-1)
  }

  return (
    <NumberContext.Provider value={value}>{children}</NumberContext.Provider>
  );
}

export function useNumber() {
  const context = useContext(NumberContext);
  const { number, increment, decrement } = context;
  return { number, increment, decrement };
}
