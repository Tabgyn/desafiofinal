import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import SignIn from '~/pages/Auth/SignIn';
import SignUp from '~/pages/Auth/SignUp';
import Product from '~/pages/Product';
import Type from '~/pages/Type';
import Size from '~/pages/Size';
import Cart from '~/pages/Cart';
import Order from '~/pages/Order';
import History from '~/pages/History';

export default function createNavigator(isLoggedIn = false) {
  return createAppContainer(
    createSwitchNavigator(
      {
        SignIn,
        SignUp,
        Product,
        Type,
        Size,
        Cart,
        Order,
        History,
      },
      {
        initialRouteName: isLoggedIn ? 'Product' : 'SignIn',
      },
    ),
  );
}
