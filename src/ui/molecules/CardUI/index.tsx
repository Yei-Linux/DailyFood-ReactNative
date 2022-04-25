import React from 'react';
import {View} from 'react-native';
import {cls} from '../../../utils/classNames';
import {CardStyles} from './styles';

export interface ICardUI {
  height?: string | number;
  hasShadow?: boolean;
  borderType?: 'top' | 'bottom' | 'both';
  variant?: 'primary' | 'secondary';
  children?: React.ReactNode | React.ReactNode[];
  border?: 1 | 2 | 3;
}

const CardUI = ({
  height,
  hasShadow = true,
  variant = 'primary',
  children,
  border = 1,
  borderType = 'both',
}: ICardUI) => {
  return (
    <View
      style={cls(
        CardStyles.card,
        CardStyles[variant],
        hasShadow && CardStyles.shadow,
        ['top', 'both'].includes(borderType) &&
          CardStyles[`border__top__${border}`],
        ['bottom', 'both'].includes(borderType) &&
          CardStyles[`border__bottom__${border}`],
        height && {height},
      )}>
      {children}
    </View>
  );
};

export default CardUI;
