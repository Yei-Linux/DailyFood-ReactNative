import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {cls} from '../../../utils/classNames';
import IconUI, {TIcons} from '../IconUI';
import TextUI from '../TextUI';
import {TouchBodyStyles} from './styles';

type TVariants = 'primary' | 'secondary' | 'tertiary';
type TDirection = 'normal' | 'reverse';

export interface ITouchBody {
  shadowColor?: string;
  iconColor?: string;
  background?: string;
  color?: string;
  isTouchable?: boolean;
  direction?: TDirection;
  iconName?: TIcons | undefined;
  text: string;
  variants?: TVariants;
}

const TouchBody = ({
  shadowColor = '#ff0000',
  iconColor = '#FFFFFF',
  color = '#FFFFFF',
  background,
  isTouchable = true,
  text,
  variants = 'primary',
  iconName,
  direction = 'normal',
}: ITouchBody) => {
  return (
    <TouchableOpacity
      activeOpacity={isTouchable ? 0.5 : 0.9}
      style={cls(
        TouchBodyStyles.touchBody,
        TouchBodyStyles.shadow,
        TouchBodyStyles[variants],
        background && {backgroundColor: background},
        shadowColor && {shadowColor},
      )}>
      <View
        style={cls(TouchBodyStyles.touchBodyContent, {
          flexDirection: direction === 'normal' ? 'row' : 'row-reverse',
        })}>
        {iconName && (
          <IconUI
            paddingLeft={direction === 'normal' ? 0 : 5}
            paddingRight={direction === 'normal' ? 5 : 0}
            name={iconName}
            fill={iconColor}
          />
        )}
        <TextUI text={text} weight="500" color={color} />
      </View>
    </TouchableOpacity>
  );
};

export default TouchBody;
