import React from 'react';
import {Text} from 'react-native';
import {TextStyles} from './styles';

type TWeight =
  | 'normal'
  | 'bold'
  | '100'
  | '200'
  | '300'
  | '400'
  | '500'
  | '600'
  | '700'
  | '800'
  | '900';

export interface ITextUI {
  color?: string;
  text: string;
  weight?: TWeight;
}

const TextUI = ({text, weight, color = '#000'}: ITextUI) => {
  return (
    <Text style={{...TextStyles.text, fontWeight: weight, color}}>{text}</Text>
  );
};

export default TextUI;
