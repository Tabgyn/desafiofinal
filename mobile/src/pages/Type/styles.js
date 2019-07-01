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
    alignItems: 'center',

    width: (metrics.screenWidth - metrics.baseMargin * 4 - metrics.baseMargin) / 2,
    backgroundColor: colors.white,
    borderRadius: metrics.baseRadius * 4,
    padding: metrics.basePadding,
    marginBottom: metrics.baseMargin,
    marginHorizontal: metrics.baseMargin * 2,
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 5 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 1,
  },

  cardImage: {
    width: 130,
    height: 126,
    marginBottom: 18,
    borderRadius: metrics.baseRadius * 4,
  },

  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.fontPrimary,
  },
});

export default styles;
