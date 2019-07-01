import { StyleSheet } from 'react-native';

import { metrics, colors } from '~/styles';

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },

  gradient: {
    flex: 1,
  },

  avoidView: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center',

    padding: metrics.basePadding * 2,
  },

  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },

  logo: {
    width: 72,
    height: 72,
    marginBottom: metrics.baseMargin * 3,
  },

  input: {
    borderRadius: metrics.baseRadius * 3,
    paddingVertical: metrics.basePadding / 1.5,
    paddingHorizontal: metrics.basePadding,
    backgroundColor: colors.white,
    marginBottom: metrics.baseMargin,
    width: metrics.screenWidth - 40,
    fontSize: 15,
  },

  button: {
    alignItems: 'center',
    justifyContent: 'center',

    borderRadius: metrics.baseRadius * 3,
    paddingVertical: metrics.basePadding / 1.5,
    paddingHorizontal: metrics.basePadding,
    marginTop: metrics.baseMargin / 2,
    marginBottom: metrics.baseMargin,
    backgroundColor: colors.secundary,
    width: metrics.screenWidth - 40,
  },

  link: {
    alignItems: 'center',
    justifyContent: 'center',

    borderRadius: metrics.baseRadius * 3,
    paddingVertical: metrics.basePadding / 1.5,
    paddingHorizontal: metrics.basePadding,
    marginBottom: metrics.baseMargin,
    backgroundColor: colors.transparent,
    width: metrics.screenWidth - 40,
  },

  buttonText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: colors.white,
  },
});

export default styles;
