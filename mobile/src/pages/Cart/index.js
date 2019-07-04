import React, { Component } from 'react';
import {
  View, TouchableOpacity, FlatList, Image, Text, Alert,
} from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome5';
import NumberFormat from 'react-number-format';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import CartActions from '~/store/ducks/cart';

import styles from './styles';
import Header from '~/components/Header';

class Cart extends Component {
  static propTypes = {
    removeItemRequest: PropTypes.func.isRequired,
    cart: PropTypes.shape({
      subtotal: PropTypes.number.isRequired,
    }).isRequired,
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }).isRequired,
  };

  handleDelete = (id) => {
    Alert.alert(
      'Excluir item',
      'Deseja realmente excluir o item?',
      [
        { text: 'Não', onPress: () => {}, style: 'cancel' },
        {
          text: 'Sim',
          onPress: () => {
            const { removeItemRequest } = this.props;

            removeItemRequest(id);
          },
        },
      ],
      { cancelable: false },
    );
  };

  renderItem = ({ item }) => (
    <View style={styles.cardItem} activeOpacity={0.8} onPress={() => {}}>
      <Image source={{ uri: item.productType.image.url }} style={styles.cardImage} resizeMode="contain" />
      <View style={styles.cardDetail}>
        <Text style={styles.cardType}>{item.productType.name}</Text>
        <Text style={styles.cardSize}>{item.size.name}</Text>
        <NumberFormat
          value={item.productType.price_factor * item.size.base_price}
          displayType="text"
          prefix="R$"
          decimalSeparator=","
          decimalScale={2}
          fixedDecimalScale
          renderText={value => <Text style={styles.cardPrice}>{value}</Text>}
        />
      </View>
      <TouchableOpacity style={styles.deleteButton} onPress={() => this.handleDelete(item.id)}>
        <Icon name="trash" color="#E5283E" size={20} />
      </TouchableOpacity>
    </View>
  );

  render() {
    const { cart, navigation } = this.props;

    return (
      <View style={styles.container}>
        <Header
          title="Carrinho"
          titleStyles={styles.titleStyles}
          rightContent={(
            <NumberFormat
              value={cart.subtotal}
              displayType="text"
              prefix="R$"
              decimalSeparator=","
              decimalScale={2}
              fixedDecimalScale
              renderText={value => <Text style={styles.cartSubtotal}>{value}</Text>}
            />
)}
        />
        <View style={styles.cardContainer}>
          {cart.data.length === 0 ? (
            <Text style={styles.emptyText}>Seu carrinho está vazio</Text>
          ) : (
            <FlatList
              data={cart.data}
              keyExtractor={item => item.id}
              renderItem={this.renderItem}
              showsVerticalScrollIndicator={false}
              contentContainerStyle={styles.listPadding}
            />
          )}
        </View>
        <View style={styles.actionBar}>
          <TouchableOpacity style={styles.moreButton} onPress={() => navigation.navigate('Product')}>
            <Icon name="cart-plus" color="#666" size={20} />
          </TouchableOpacity>
          {!!cart.data.length && (
            <TouchableOpacity style={styles.doneButton} onPress={() => navigation.navigate('Order')}>
              <Text style={styles.doneButtonText}>realizar pedido</Text>
              <Icon name="chevron-right" color="#fff" size={14} />
            </TouchableOpacity>
          )}
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  cart: state.cart,
});

const mapDispatchToProps = dispatch => bindActionCreators(CartActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Cart);
