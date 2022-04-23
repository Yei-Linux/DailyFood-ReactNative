import React from 'react';
import {View} from 'react-native';
import {cls} from '../../../utils/classNames';
import {CardStyles} from './styles';

export interface ICardUI {
  variant?: 'primary';
  children?: React.ReactNode | React.ReactNode[];
}

const CardUI = ({variant = 'primary', children}: ICardUI) => {
  return (
    <View style={cls(CardStyles.card, CardStyles[variant], CardStyles.shadow)}>
      {children}
    </View>
  );
};

export default CardUI;
