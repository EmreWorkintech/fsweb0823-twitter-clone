import { useState } from "react";

export const useLocalStorage = (key, initialValue) => {
  const [storedData, setStoredData] = useState(() => {
    const storedData = localStorage.getItem(key);
    const value = storedData ? JSON.parse(storedData) : initialValue;
    localStorage.setItem(key, JSON.stringify(value));
    return value;
  });

  const updateStorage = (value) => {
    localStorage.setItem(key, JSON.stringify(value));
    setStoredData(value);
  };

  return [storedData, updateStorage];
};
