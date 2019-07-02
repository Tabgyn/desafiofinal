import React, { Component } from 'react';
import {
  View, TouchableOpacity, FlatList, Image, Text,
} from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome5';
import NumberFormat from 'react-number-format';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import CartActions from '~/store/ducks/cart';

import Header from '~/components/Header';
import styles from './styles';
import { metrics } from '~/styles';

class Type extends Component {
  static propTypes = {
    addItemRequest: PropTypes.func.isRequired,
    sizes: PropTypes.shape({}).isRequired,
    currentType: PropTypes.shape({
      price_factor: PropTypes.string.isRequired,
    }).isRequired,
    currentProduct: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }).isRequired,
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }).isRequired,
  };

  handleAddItem = (size) => {
    const { addItemRequest } = this.props;

    addItemRequest(size);
  };

  renderItem = ({ item, index }) => {
    const { currentType } = this.props;

    return (
      <TouchableOpacity
        style={[styles.cardItem, index % 2 === 0 ? { marginRight: metrics.baseMargin } : { marginHorizontal: 0 }]}
        activeOpacity={0.8}
        onPress={() => this.handleAddItem(item)}
      >
        <View style={styles.cardImage}>
          <Image source={{ uri: item.image.url }} style={styles.cardImage} resizeMode="contain" resizeMethod="scale" />
        </View>
        <Text style={styles.cardTitle}>{item.name}</Text>
        <NumberFormat
          value={currentType.price_factor * item.base_price}
          displayType="text"
          prefix="R$"
          decimalSeparator=","
          decimalScale={2}
          fixedDecimalScale
          renderText={value => <Text style={styles.cardPrice}>{value}</Text>}
        />
      </TouchableOpacity>
    );
  };

  render() {
    const { sizes, navigation } = this.props;
    return (
      <View style={styles.container}>
        <Header
          title="Selecione um tamanho"
          titleStyles={styles.titleStyles}
          leftContent={(
            <TouchableOpacity
              onPress={() => navigation.navigate('Type')}
              hitSlop={{
                top: 20,
                bottom: 20,
                left: 20,
                right: 20,
              }}
            >
              <Icon name="chevron-left" color="#fff" size={14} />
            </TouchableOpacity>
)}
        />
        <View style={styles.cardContainer}>
          <FlatList
            data={sizes.data}
            keyExtractor={item => String(item.id)}
            renderItem={this.renderItem}
            numColumns={2}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.listPadding}
          />
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  sizes: state.sizes,
  currentType: state.types.currentType,
  currentProduct: state.products.currentProduct,
});

const mapDispatchToProps = dispatch => bindActionCreators(CartActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Type);
