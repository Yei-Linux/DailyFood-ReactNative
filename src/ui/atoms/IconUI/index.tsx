import React from 'react';
import SvgIcon from 'react-native-svg-icon';
import {svgs} from '../../../config/svgs';

export type TIcons = keyof typeof svgs;

export interface IIconUI {
  name: TIcons;
  height?: string;
  width?: string;
}

const IconUI = ({name, height = '16px', width = '16px'}: IIconUI) => {
  return <SvgIcon name={name} height={height} width={width} svgs={svgs} />;
};

export default IconUI;
