import React, { Component } from 'react';
import {
  View, TouchableOpacity, Text, TextInput, KeyboardAvoidingView, Platform, ScrollView,
} from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome5';
import NumberFormat from 'react-number-format';
import cep from 'cep-promise';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import CartActions from '~/store/ducks/cart';
import OrderActions from '~/store/ducks/orders';

import styles from './styles';
import Header from '~/components/Header';
import { metrics } from '~/styles';

class Order extends Component {
  static propTypes = {
    addOrderRequest: PropTypes.func.isRequired,
    cart: PropTypes.shape({
      subtotal: PropTypes.number.isRequired,
    }).isRequired,
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }).isRequired,
  };

  state = {
    observation: '',
    zip: '',
    street: '',
    number: '',
    neighborhood: '',
  };

  handleZip = async () => {
    try {
      const { zip } = this.state;
      const result = await cep(zip);

      this.setState({ zip: result.cep });
      this.setState({ street: result.street });
      this.setState({ neighborhood: result.neighborhood });
    } catch (error) {
      console.tron.log(error.message);
    }
  };

  handleSubmit = () => {
    const { addOrderRequest } = this.props;
    const {
      observation, zip, street, number, neighborhood,
    } = this.state;

    addOrderRequest(observation, zip, street, number, neighborhood);
  };

  render() {
    const { cart, navigation } = this.props;
    const {
      observation, zip, street, number, neighborhood,
    } = this.state;

    return (
      <View style={styles.container}>
        <Header
          title="Realizar pedido"
          titleStyles={styles.titleStyles}
          leftContent={(
            <TouchableOpacity
              onPress={() => navigation.navigate('Cart')}
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
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : null} style={styles.avoidView}>
          <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingHorizontal: 20 }}>
            <View>
              <TextInput
                value={observation}
                onChangeText={text => this.setState({ observation: text })}
                style={styles.textArea}
                placeholder="Alguma observação?"
                autoCapitalize="none"
                autoCorrect={false}
                underlineColorAndroid="transparent"
                autoFocus
                multiline
                numberOfLines={4}
                textAlignVertical="top"
                returnKeyType="next"
                onSubmitEditing={() => this.zipInput.focus()}
              />
              <TextInput
                value={zip}
                onChangeText={text => this.setState({ zip: text })}
                onBlur={this.handleZip}
                style={styles.input}
                placeholder="Qual seu CEP?"
                keyboardType="number-pad"
                autoCapitalize="none"
                autoCorrect={false}
                underlineColorAndroid="transparent"
                returnKeyType="next"
                ref={(el) => {
                  this.zipInput = el;
                }}
                onSubmitEditing={() => this.streetInput.focus()}
              />
              <View style={{ flexDirection: 'row' }}>
                <TextInput
                  value={street}
                  onChangeText={text => this.setState({ street: text })}
                  style={[styles.input, { width: metrics.screenWidth - 150, marginRight: 0 }]}
                  placeholder="Rua"
                  autoCapitalize="none"
                  autoCorrect={false}
                  underlineColorAndroid="transparent"
                  returnKeyType="next"
                  ref={(el) => {
                    this.streetInput = el;
                  }}
                  onSubmitEditing={() => this.numberInput.focus()}
                />
                <TextInput
                  value={number}
                  onChangeText={text => this.setState({ number: text })}
                  style={[styles.input, { width: 100, marginLeft: 10 }]}
                  placeholder="Nº"
                  autoCapitalize="none"
                  autoCorrect={false}
                  underlineColorAndroid="transparent"
                  returnKeyType="next"
                  ref={(el) => {
                    this.numberInput = el;
                  }}
                  onSubmitEditing={() => this.neighborhoodInput.focus()}
                />
              </View>
              <TextInput
                value={neighborhood}
                onChangeText={text => this.setState({ neighborhood: text })}
                style={styles.input}
                placeholder="Bairro"
                autoCapitalize="none"
                autoCorrect={false}
                underlineColorAndroid="transparent"
                returnKeyType="send"
                ref={(el) => {
                  this.neighborhoodInput = el;
                }}
                onSubmitEditing={this.handleSubmit}
              />
            </View>
            <View style={styles.actionBar}>
              <TouchableOpacity style={styles.doneButton} onPress={this.handleSubmit}>
                <Text style={styles.doneButtonText}>finalizar</Text>
                <Icon name="chevron-right" color="#fff" size={14} />
              </TouchableOpacity>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  cart: state.cart,
});

const mapDispatchToProps = dispatch => bindActionCreators({ ...CartActions, ...OrderActions }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Order);
