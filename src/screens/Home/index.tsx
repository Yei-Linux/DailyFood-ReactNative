import React from 'react';
import {Text, View} from 'react-native';
import ButtonUI from '../../ui/atoms/ButtonUI';

const Home = () => {
  return (
    <View>
      <Text>Hello world!</Text>
      <ButtonUI text="Add Food" iconName="Plus" />
    </View>
  );
};

export default Home;
