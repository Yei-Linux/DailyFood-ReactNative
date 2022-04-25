import React from 'react';
import {Image, SafeAreaView, View} from 'react-native';
import CardUI from '../../ui/molecules/CardUI';
import {cls} from '../../utils/classNames';
import {CoveredStyles} from './styles';

export interface IWithCovered {
  children?: React.ReactNode;
  src: string;
}

const WithCovered = ({src, children}: IWithCovered) => {
  return (
    <SafeAreaView style={cls(CoveredStyles.covered)}>
      <View>
        <Image style={cls(CoveredStyles.coveredImage)} source={{uri: src}} />
      </View>

      <View style={cls(CoveredStyles.coveredCardContainer)}>
        <CardUI height="100%" hasShadow={false} borderType="top" border={3}>
          {children}
        </CardUI>
      </View>
    </SafeAreaView>
  );
};

export default WithCovered;
