import React, {Fragment} from 'react';
import {ScrollView, View} from 'react-native';
import {cls} from '../../../utils/classNames';
import {ViewTypeStyles} from './styles';

export type TView = 'grid' | 'slider';

export interface IViewType {
  viewType?: TView;
  children: React.ReactNode;
}

const ViewType = ({viewType, children}: IViewType) => {
  return (
    <Fragment>
      {viewType === 'grid' && (
        <View style={cls(ViewTypeStyles.viewTypeGrid)}>{children}</View>
      )}
      {viewType === 'slider' && (
        <ScrollView
          style={cls(ViewTypeStyles.viewTypeSlider)}
          contentContainerStyle={cls(ViewTypeStyles.viewTypeSliderContainer)}
          horizontal
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}>
          {children}
        </ScrollView>
      )}
    </Fragment>
  );
};

export default ViewType;
