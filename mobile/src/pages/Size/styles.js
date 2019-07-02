import { StyleSheet } from 'react-native';

import { metrics, colors } from '~/styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  titleStyles: {
    marginLeft: 50,
  },

  listPadding: {
    paddingHorizontal: 20,
  },

  cardContainer: {
    flex: 1,
  },

  cardItem: {
    flexDirection: 'column',
    alignItems: 'center',

    width: (metrics.screenWidth - metrics.baseMargin * 4 - metrics.baseMargin) / 2,
    backgroundColor: colors.white,
    borderRadius: metrics.baseRadius * 4,
    padding: metrics.basePadding,
    marginBottom: metrics.baseMargin,
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 5 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 1,
  },

  cardImage: {
    alignItems: 'center',
    justifyContent: 'center',

    width: '100%',
    height: 126,
    marginBottom: 18,
    borderRadius: metrics.baseRadius * 4,
  },

  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.fontPrimary,
  },

  cardPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.fontSecundary,
  },
});

export default styles;
