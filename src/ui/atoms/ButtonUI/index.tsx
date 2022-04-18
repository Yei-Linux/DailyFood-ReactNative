import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import IconUI, {TIcons} from '../IconUI';
import TextUI from '../TextUI';
import {ButtonStyles} from './styles';

type TVariants = 'primary' | 'secondary' | 'tertiary';

export interface IButtonUI {
  iconName?: TIcons | undefined;
  text: string;
  variants?: TVariants;
}

const ButtonUI = ({text, variants = 'primary', iconName}: IButtonUI) => {
  return (
    <View style={ButtonStyles.buttonView}>
      <TouchableOpacity
        style={{
          ...ButtonStyles.button,
          ...ButtonStyles[variants],
          ...ButtonStyles.shadow,
        }}>
        <View
          style={{
            ...ButtonStyles.buttonContent,
          }}>
          {iconName && <IconUI name={iconName} fill="#FFFFFF" />}
          <TextUI text={text} weight="500" color="#FFFFFF" />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ButtonUI;
