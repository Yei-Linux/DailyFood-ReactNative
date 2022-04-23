import React from 'react';
import {View} from 'react-native';
import Ingredients from '../../components/Ingredients';
import ButtonUI from '../../ui/atoms/ButtonUI';
import Tag from '../../ui/atoms/TagUI';

const Home = () => {
  return (
    <View>
      <Ingredients />
      <ButtonUI direction="normal" text="Add Food" iconName="Plus" />
      <Tag direction="normal" text="Finish" iconName="Plus" />
    </View>
  );
};

export default Home;
