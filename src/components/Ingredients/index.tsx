import React, {useState} from 'react';
import {TouchableOpacity, View} from 'react-native';
import {ingredients} from '../../mocks/ingredients';
import ButtonUI from '../../ui/atoms/ButtonUI';
import TextUI from '../../ui/atoms/TextUI';
import IconUI from '../../ui/atoms/IconUI';
import {cls} from '../../utils/classNames';
import Ingredient from '../Ingredient';
import {IngredientsStyles} from './styles';
import ViewType, {TView} from '../../ui/atoms/ViewType';
import InputUI from '../../ui/atoms/InputUI';
import {useInput} from '../../hooks/useInput';

export interface IIngredients {}

const Ingredients = ({}: IIngredients) => {
  const {inputValue, handleChange} = useInput();

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

      <View style={cls(IngredientsStyles.ingredientSearcher)}>
        <InputUI
          placeholder="Search any ingredient..."
          value={inputValue}
          onChangeText={handleChange}
        />
      </View>

      <ViewType viewType={viewType}>
        {ingredients
          .filter(({name}) =>
            inputValue === ''
              ? true
              : name.toLowerCase().includes(inputValue.toLowerCase()),
          )
          .map(({image, name, size, sizeType}) => (
            <Ingredient
              marginVertical={8}
              marginHorizontal={8}
              image={image}
              name={name}
              size={size}
              sizeType={sizeType}
            />
          ))}
      </ViewType>

      <View style={cls(IngredientsStyles.ingredientsFooter)}>
        <ButtonUI direction="normal" text="Add Ingredient" iconName="Plus" />
        <ButtonUI direction="normal" text="Show Preparation" iconName="Plus" />
      </View>
    </View>
  );
};

export default Ingredients;
