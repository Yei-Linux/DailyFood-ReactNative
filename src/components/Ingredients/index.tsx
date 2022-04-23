import React, {useState} from 'react';
import {ScrollView, TouchableOpacity, View} from 'react-native';
import {ingredients} from '../../mocks/ingredients';
import TextUI from '../../ui/atoms/TextUI';
import IconUI from '../../ui/atoms/IconUI';
import {cls} from '../../utils/classNames';
import Ingredient from '../Ingredient';
import {IngredientsStyles} from './styles';

export interface IIngredients {}

export type TView = 'grid' | 'slider';

const Ingredients = ({}: IIngredients) => {
  const [viewType, setViewType] = useState<TView>('slider');

  const toggleToSliderViewType = () => setViewType('slider');

  const toggleToGridViewType = () => setViewType('grid');

  return (
    <View style={cls(IngredientsStyles.ingredients)}>
      <View style={cls(IngredientsStyles.ingredientsHeader)}>
        <TextUI text="Ingredients" weight="700" size={20} />
        <View style={cls(IngredientsStyles.ingredientsSwitchView)}>
          <TouchableOpacity
            onPress={toggleToGridViewType}
            activeOpacity={0.5}
            style={cls(
              IngredientsStyles.switcherAction,
              viewType === 'grid' && IngredientsStyles.switcherActionActive,
            )}>
            <IconUI name="Grid" fill="red" paddingLeft={5} paddingRight={5} />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={toggleToSliderViewType}
            activeOpacity={0.5}
            style={cls(
              IngredientsStyles.switcherAction,
              viewType === 'slider' && IngredientsStyles.switcherActionActive,
            )}>
            <IconUI
              width="15"
              height="15"
              name="Right"
              fill="#7f9cf5"
              paddingLeft={5}
              paddingRight={5}
            />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView
        style={cls(
          viewType === 'slider' && IngredientsStyles.ingredientsSlider,
          viewType === 'grid' && IngredientsStyles.ingredientsGrid,
        )}
        horizontal={viewType === 'slider'}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}>
        {ingredients.map(({image, name, size, sizeType}) => (
          <Ingredient
            marginHorizontal={8}
            image={image}
            name={name}
            size={size}
            sizeType={sizeType}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default Ingredients;
