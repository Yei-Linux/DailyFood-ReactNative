import React from 'react';
import {TextInput} from 'react-native';
import {InputStyles} from './styles';

export interface IInputUI {
  placeholder?: string;
  value?: string;
  onChangeText?: (text: string) => void;
}

const InputUI = ({placeholder = '', value, onChangeText}: IInputUI) => {
  return (
    <TextInput
      placeholder={placeholder}
      style={InputStyles.input}
      onChangeText={onChangeText}
      value={value}
    />
  );
};

export default InputUI;
