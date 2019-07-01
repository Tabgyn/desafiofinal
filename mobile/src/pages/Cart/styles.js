import { StyleSheet } from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper';

import { metrics, colors } from '~/styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  titleStyles: {
    alignItems: 'center',
  },

  cartSubtotal: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.white,
  },

  cardContainer: {
    flex: 1,
  },

  cardItem: {
    flexDirection: 'row',
    alignItems: 'center',

    backgroundColor: colors.white,
    borderRadius: metrics.baseRadius * 4,
    padding: metrics.basePadding / 1.5,
    marginBottom: metrics.baseMargin,
    marginHorizontal: metrics.baseMargin * 2,
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 5 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 1,
    zIndex: 99,
  },

  cardImage: {
    width: 79,
    height: 79,
    marginRight: 10,
    borderRadius: metrics.baseRadius * 4,
  },

  cardDetail: {
    flexGrow: 1,

    width: 0,
  },

  cardType: {
    fontSize: 12,
    color: colors.fontPrimary,
    marginBottom: 5,
  },

  cardSize: {
    fontSize: 11,
    color: colors.fontSecundary,
    lineHeight: 14,
    marginBottom: 5,
  },

  cardPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.fontPrimary,
  },

  deleteButton: {
    marginRight: metrics.baseMargin,
  },

  actionBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',

    marginBottom: getBottomSpace(),
    paddingHorizontal: metrics.basePadding,
    paddingVertical: metrics.basePadding,
    backgroundColor: colors.transparent,
  },

  moreButton: {
    alignItems: 'center',
    justifyContent: 'center',

    borderRadius: 50,
    backgroundColor: colors.light,
    width: 42,
    height: 42,
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

  emptyCartText: {
    color: colors.fontPrimary,
    fontSize: 16,
    textAlign: 'center',
    marginTop: 100,
  },
});

export default styles;
