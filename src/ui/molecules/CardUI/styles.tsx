import {StyleSheet} from 'react-native';

export const CardStyles = StyleSheet.create({
  card: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    alignItems: 'center',
  },
  border__bottom__1: {
    borderBottomLeftRadius: 13,
    borderBottomRightRadius: 13,
  },
  border__bottom__2: {
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },
  border__bottom__3: {
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
  },
  border__top__1: {
    borderTopLeftRadius: 13,
    borderTopRightRadius: 13,
  },
  border__top__2: {
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  border__top__3: {
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
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
