import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    width: '50%',
    gap: 10,
    backgroundColor: 'white',
  },
  imageContainer: {
    height: 200,
    width: '100%',
    resizeMode: 'contain',
    marginTop: 15,
  },
  fabContainer: {
    position: 'absolute',
    right: 10,
    top: 10,
    height: 10,
    width: 10,
  },
  textContainer: {
    flex: 1,
    padding: 10,
  },
  textStyle: {
    position: 'absolute',
    left: 10,
    bottom: 10,
  },
  plusStyle: {
    position: 'absolute',
    right: 10,
    bottom: 10,
  },
});
