import { StyleSheet } from 'react-native';

import { metrics, colors } from '~/styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  titleStyles: {
    marginLeft: 50,
  },

  cardContainer: {
    flex: 1,
  },

  cardItem: {
    flexDirection: 'column',
    justifyContent: 'center',

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

  cardTitle: {
    fontSize: 12,
    color: colors.fontPrimary,
    marginBottom: 5,
  },

  cardTimespan: {
    fontSize: 11,
    color: colors.fontSecundary,
    lineHeight: 14,
    marginBottom: 5,
  },

  cardPrice: {
    fontSize: 16,
    color: colors.fontPrimary,
  },
});

export default styles;
