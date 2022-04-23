import React from 'react';
import {View} from 'react-native';
import TouchBody, {ITouchBody} from '../TouchBody';
import {ButtonStyles} from './styles';

export type TButtonUI = ITouchBody;

const ButtonUI = ({
  text,
  variants = 'primary',
  iconName,
  direction = 'normal',
}: TButtonUI) => {
  return (
    <View style={ButtonStyles.buttonView}>
      <TouchBody
        direction={direction}
        text={text}
        variants={variants}
        iconName={iconName}
      />
    </View>
  );
};

export default ButtonUI;
