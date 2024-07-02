import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'center',
    borderWidth: 1,
    alignItems: 'center',
  },
  imageStyle: {
    height: 100,
    width: '30%',
    resizeMode: 'contain',
  },
  quantityStyle: {
    backgroundColor: '#FE9000',
    alignSelf: 'flex-start',
    padding: 5,
    borderRadius: 5,
  },
  fabStyle: {
    position: 'absolute',
    right: 10,
    bottom: 10,
    width: 20,
    height: 20,
  },
});
