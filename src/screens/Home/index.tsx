import React from 'react';
import Ingredients from '../../components/Ingredients';
import WithCovered from '../../hocs/WithCovered';

const Home = () => {
  return (
    <WithCovered src="https://i.imgur.com/GXKIoyc.jpg">
      <Ingredients />
    </WithCovered>
  );
};

export default Home;
