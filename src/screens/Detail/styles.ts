import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    flex: 1,
    justifyContent: 'space-between',
  },
  spinnerContainer: {
    justifyContent: 'center',
    flex: 1,
  },
  headerContainer: {
    paddingTop: 30 * 0.35,
    justifyContent: 'center',
    alignItems: 'center',
  },
  fabStyles: {
    position: 'absolute',
    top: 0,
    left: 0,
  },
  btnStyle: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: 10,
    marginTop: 20,
  },
});
