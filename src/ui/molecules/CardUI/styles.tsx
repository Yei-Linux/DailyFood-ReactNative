import {StyleSheet} from 'react-native';

export const CardStyles = StyleSheet.create({
  card: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    alignItems: 'center',
    borderRadius: 13,
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {height: 4, width: 0},
    shadowOpacity: 0.3,
    shadowRadius: 1,
    elevation: 4,
  },
  primary: {
    backgroundColor: '#EEEEEE',
  },
});
