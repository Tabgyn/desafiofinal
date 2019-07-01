import { StyleSheet } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

import { metrics, colors } from '~/styles';

const styles = StyleSheet.create({
  container: {
    paddingTop: getStatusBarHeight(),
  },

  headerBackground: {
    position: 'absolute',
    width: metrics.screenWidth,
  },

  headerBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',

    paddingHorizontal: metrics.basePadding,
    height: 72,
  },

  headerTitle: {
    position: 'absolute',
    width: metrics.screenWidth,
  },

  headerTitleText: {
    color: colors.white,
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default styles;
