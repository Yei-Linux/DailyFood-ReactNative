import React from 'react';
import {View} from 'react-native';
import {ingredients} from '../../mocks/ingredients';
import {cls} from '../../utils/classNames';
import Ingredient from '../Ingredient';
import {IngredientsStyles} from './styles';

export interface IIngredients {}

const Ingredients = ({}: IIngredients) => {
  return (
    <View style={cls(IngredientsStyles.ingredients)}>
      <View style={cls(IngredientsStyles.ingredientsSlider)}>
        {ingredients.map(({image, name, size, sizeType}) => (
          <Ingredient
            marginHorizontal={8}
            image={image}
            name={name}
            size={size}
            sizeType={sizeType}
          />
        ))}
      </View>
    </View>
  );
};

export default Ingredients;
