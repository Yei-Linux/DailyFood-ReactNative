import {StyleSheet} from 'react-native';

export const IngredientsStyles = StyleSheet.create({
  ingredients: {},
  ingredientsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    marginVertical: 20,
  },
  ingredientsSwitchView: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  switcherAction: {
    padding: 0,
    marginHorizontal: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  switcherActionActive: {
    borderRadius: 10,
    backgroundColor: '#ebebeb',
    shadowColor: '#000',
    shadowOffset: {height: 4, width: 0},
    shadowOpacity: 0.3,
    shadowRadius: 1,
    elevation: 20,
  },
  ingredientsGrid: {
    backgroundColor: 'red',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  ingredientsSlider: {},
});
