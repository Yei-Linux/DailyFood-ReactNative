import React from 'react';
import {View} from 'react-native';
import Svg from 'react-native-svg';
import {svgs} from '../../../config/svgs';
import {IconStyles} from './styles';

export type TIcons = keyof typeof svgs;

export interface IIconUI {
  name: TIcons;
  height?: string;
  width?: string;
  fill?: string;
  paddingLeft?: number;
  paddingRight?: number;
}

const IconUI = ({
  name,
  width = '20',
  height = '20',
  fill,
  paddingLeft = 0,
  paddingRight = 0,
}: IIconUI) => {
  const {svg, ...iconSelected} = svgs[name];

  const viewBox = (iconSelected as any)?.viewBox;

  return (
    <View style={{...IconStyles.icon, paddingRight, paddingLeft}}>
      <Svg height={height} width={width} fill={fill} viewBox={viewBox}>
        {svg}
      </Svg>
    </View>
  );
};

export default IconUI;
