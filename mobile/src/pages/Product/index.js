import React, { Component } from 'react';
import {
  View, TouchableOpacity, FlatList, Image, Text,
} from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import ProductActions from '~/store/ducks/products';
import TypeActions from '~/store/ducks/types';
import AuthActions from '~/store/ducks/auth';

import styles from './styles';
import Header from '~/components/Header';

class Product extends Component {
  static propTypes = {
    loadProductsRequest: PropTypes.func.isRequired,
    loadTypesRequest: PropTypes.func.isRequired,
    products: PropTypes.shape({}).isRequired,
    cart: PropTypes.shape({}).isRequired,
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }).isRequired,
  };

  componentDidMount() {
    // AsyncStorage.clear();
    const { loadProductsRequest, signOutRequest } = this.props;

    // signOutRequest();

    loadProductsRequest();
  }

  handleProductTypes = (product) => {
    const { loadTypesRequest } = this.props;

    loadTypesRequest(product);
  };

  renderItem = ({ item }) => (
    <TouchableOpacity style={styles.cardItem} activeOpacity={0.8} onPress={() => this.handleProductTypes(item)}>
      <Image source={{ uri: item.image.url }} style={styles.cardImage} resizeMode="contain" />
      <View style={styles.cardDetail}>
        <Text style={styles.cardTitle}>{item.name}</Text>
        <Text style={styles.cardDescription}>{item.description}</Text>
        <View style={styles.cardTimes}>
          <Icon name="stopwatch" color="#706e7b" size={12} />
          <Text style={styles.cardTimespan}>{item.preparation_time}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  render() {
    const { products, cart, navigation } = this.props;

    return (
      <View style={styles.container}>
        <Header
          title="Pizzaria Don Juan"
          titleStyles={styles.titleStyles}
          leftContent={(
            <TouchableOpacity onPress={() => navigation.navigate('History')} hitSlop={{top: 20}}>
              <Icon name="history" color="#fff" size={24} />
            </TouchableOpacity>
)}
          rightContent={(
            <TouchableOpacity style={styles.cartButton} onPress={() => navigation.navigate('Cart')}>
              <Icon name="shopping-bag" color="#fff" size={18} />
              <View style={styles.badge}>
                {!!cart.data.length && (
                  <View style={styles.badgeButton}>
                    { cart.data.length > 9 ? (
                      <Text style={styles.badgeText}>9+</Text>) : (
                        <Text style={styles.badgeText}>{cart.data.length}</Text>
                    )}
                  </View>
                )}
              </View>
            </TouchableOpacity>
)}
        />
        <View style={styles.cardContainer}>
          <FlatList 
            data={products.data} 
            keyExtractor={item => String(item.id)} 
            renderItem={this.renderItem} 
          />
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  products: state.products,
  cart: state.cart,
});

const mapDispatchToProps = dispatch => bindActionCreators({ ...ProductActions, ...TypeActions, ...AuthActions }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Product);
