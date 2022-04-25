import {StyleSheet} from 'react-native';

export const IngredientsStyles = StyleSheet.create({
  ingredients: {
    height: '100%',
  },
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
  ingredientSearcher: {
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  ingredientsFooter: {
    marginVertical: 15,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
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
});
