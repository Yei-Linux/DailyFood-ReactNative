import React from 'react';
import {View} from 'react-native';
import {cls} from '../../../utils/classNames';
import TouchBody, {ITouchBody} from '../TouchBody';
import {TagStyles} from './styles';

export type TTag = ITouchBody;

const Tag = ({
  text,
  variants = 'primary',
  iconName,
  direction = 'normal',
}: TTag) => {
  return (
    <View style={cls(TagStyles.tag)}>
      <TouchBody
        color="black"
        iconColor="black"
        shadowColor="rgb(241, 220, 220)"
        background="rgb(243, 242, 242)"
        isTouchable={false}
        direction={direction}
        text={text}
        variants={variants}
        iconName={iconName}
      />
    </View>
  );
};

export default Tag;
