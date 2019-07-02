import { StyleSheet } from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper';

import { metrics, colors } from '~/styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  avoidView: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center',
  },

  titleStyles: {
    marginLeft: 50,
  },

  cartSubtotal: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.white,
  },

  input: {
    fontSize: 15,
    backgroundColor: colors.white,
    borderRadius: metrics.baseRadius * 4,
    paddingHorizontal: metrics.basePadding,
    paddingVertical: 15,
    marginBottom: metrics.baseMargin,
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 5 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 1,
  },

  textArea: {
    fontSize: 15,
    height: 100,
    backgroundColor: colors.white,
    borderRadius: metrics.baseRadius * 4,
    paddingHorizontal: metrics.basePadding,
    paddingTop: 15,
    marginBottom: metrics.baseMargin,
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 5 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 1,
  },

  actionBar: {
    flexDirection: 'row',
    justifyContent: 'flex-end',

    marginBottom: getBottomSpace(),
    paddingVertical: metrics.basePadding,
    backgroundColor: colors.transparent,
  },

  doneButton: {
    flexDirection: 'row',
    alignItems: 'center',

    borderRadius: 50,
    backgroundColor: colors.secundary,
    height: 42,
    paddingHorizontal: metrics.basePadding,
  },
  doneButtonText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: colors.white,
    marginRight: metrics.baseMargin,
    textTransform: 'uppercase',
  },
});

export default styles;
