import {StyleSheet} from 'react-native';

export const ButtonStyles = StyleSheet.create({
  buttonView: {
    alignItems: 'center',
  },
  button: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 20,
  },
  buttonContent: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  shadow: {
    shadowColor: '#ff0000',
    shadowOffset: {height: 4, width: 0},
    shadowOpacity: 0.3,
    shadowRadius: 1,
    elevation: 20,
  },
  primary: {
    backgroundColor: '#FEB139',
  },
  secondary: {
    backgroundColor: '#FEB139',
  },
  tertiary: {
    backgroundColor: '#FEB139',
  },

  textPrimary: {
    color: '#FFFFFF',
  },
});
