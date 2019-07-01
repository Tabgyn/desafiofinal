import { StyleSheet } from 'react-native';

import { metrics, colors } from '~/styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  titleStyles: {
    alignItems: 'center',
  },

  cartButton: {
    alignItems: 'center',
    justifyContent: 'center',

    borderRadius: 50,
    backgroundColor: colors.secundary,
    width: 42,
    height: 42,
  },

  badge: {
    position: 'relative',
  },

  badgeButton: {
    alignItems: 'center',
    justifyContent: 'center',

    position: 'absolute',
    top: -35,
    right: -20,
    width: 18,
    height: 18,
    backgroundColor: '#FFC10C',
    borderRadius: 50,
  },

  badgeText: {
    color: colors.darker,
    textAlign: 'center',
    fontSize: 11,
  },

  cardContainer: {
    flex: 1,
  },

  cardItem: {
    flexDirection: 'row',

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

  cardTitle: {
    fontSize: 14,
    color: colors.fontPrimary,
    marginBottom: 5,
  },

  cardDescription: {
    fontSize: 12,
    color: colors.fontSecundary,
    lineHeight: 14,
    marginBottom: 5,
  },

  cardTimes: {
    flexDirection: 'row',
  },

  cardTimespan: {
    fontSize: 12,
    color: colors.fontSecundary,
    marginLeft: 2,
  },
});

export default styles;
