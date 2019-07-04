import React, { Component } from 'react';
import {
  View, TouchableOpacity, FlatList, Text,
} from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome5';
import NumberFormat from 'react-number-format';
import { distanceInWords } from 'date-fns';
import pt from 'date-fns/locale/pt';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import OrderActions from '~/store/ducks/orders';

import styles from './styles';
import Header from '~/components/Header';

class History extends Component {
  static propTypes = {
    loadOrdersRequest: PropTypes.func.isRequired,
    orders: PropTypes.shape({}).isRequired,
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }).isRequired,
  };

  componentDidMount() {
    const { loadOrdersRequest } = this.props;

    loadOrdersRequest();
  }

  getElapsedTime = (value) => {
    const date = new Date();
    const offSet = date.getTimezoneOffset() / 60;
    date.setHours(date.getHours() - offSet);

    const formated = distanceInWords(date, value, { locale: pt, addSuffix: true });

    return formated;
  };

  renderItem = ({ item }) => {
    console.tron.log(item);
    return (
      <View style={styles.cardItem} activeOpacity={0.8} onPress={() => this.handleProductTypes(item)}>
        <Text style={styles.cardTitle}>Pedido #{item.id}</Text>
        <Text style={styles.cardTimespan}>{this.getElapsedTime(item.created_at)}</Text>
        <NumberFormat
          value={Number(item.total_price)}
          displayType="text"
          prefix="R$"
          decimalSeparator=","
          decimalScale={2}
          fixedDecimalScale
          renderText={value => <Text style={styles.cardPrice}>{value}</Text>}
        />
      </View>
    );
  };

  render() {
    const { orders, navigation } = this.props;

    return (
      <View style={styles.container}>
        <Header
          title="Meus pedidos"
          titleStyles={styles.titleStyles}
          leftContent={(
            <TouchableOpacity
              onPress={() => navigation.navigate('Product')}
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
          {orders.data.length === 0 ? (
            <Text style={styles.emptyText}>Você não possui pedidos</Text>
          ) : (
            <FlatList
              data={orders.data}
              keyExtractor={item => String(item.id)}
              renderItem={this.renderItem}
              showsVerticalScrollIndicator={false}
              contentContainerStyle={styles.listPadding}
            />
          )}
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  orders: state.orders,
});

const mapDispatchToProps = dispatch => bindActionCreators(OrderActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(History);
