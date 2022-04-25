import React from 'react';
import {View, Image} from 'react-native';
import TextUI from '../../ui/atoms/TextUI';
import CardUI from '../../ui/molecules/CardUI';
import {cls} from '../../utils/classNames';
import {ImageStyles} from './styles';

type TIngredient = 'kg' | 'gr' | 'mg';

export interface IIngredient {
  marginVertical?: number;
  marginHorizontal?: number;
  image: string;
  name: string;
  size: number;
  sizeType: TIngredient;
}

const Ingredient = ({
  image,
  name,
  size,
  sizeType,
  marginVertical = 0,
  marginHorizontal = 0,
}: IIngredient) => {
  return (
    <View
      style={cls(ImageStyles.ingredientWrapper, {
        marginHorizontal,
        marginVertical,
      })}>
      <CardUI>
        <View style={ImageStyles.ingredient}>
          <View style={ImageStyles.ingredientImage}>
            <Image
              style={ImageStyles.image}
              source={{
                uri: image,
              }}
            />
          </View>

          <TextUI text={name} weight="500" color="black" />
          <TextUI
            text={`${size} ${sizeType}`}
            weight="500"
            color="#7f9cf5"
            size={13}
          />
        </View>
      </CardUI>
    </View>
  );
};

export default Ingredient;
