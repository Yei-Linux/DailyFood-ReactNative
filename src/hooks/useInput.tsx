import {useState} from 'react';

export const useInput = () => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (value: string) => setInputValue(value);

  return {
    inputValue,
    handleChange,
  };
};
