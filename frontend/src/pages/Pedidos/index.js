import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { distanceInWords } from 'date-fns';
import pt from 'date-fns/locale/pt';
import NumberFormat from 'react-number-format';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import PedidosActions from 'store/ducks/pedidos';

import socket from 'services/socket';

import Header from 'components/Header';

import {
  Container, Content, OrdersList, OrderItem, ItemsList, ItemDetail,
} from './styles';

class Pedidos extends Component {
  static propTypes = {
    getPedidosRequest: PropTypes.func.isRequired,
    pedidos: PropTypes.shape({}).isRequired,
  };

  componentDidMount() {
    const { getPedidosRequest } = this.props;

    getPedidosRequest();

    socket.subscribe('orders').on('new:order', () => {
      getPedidosRequest();
    });
  }

  getElapsedTime = (value) => {
    const date = new Date();
    const offSet = date.getTimezoneOffset() / 60;
    date.setHours(date.getHours() - offSet);

    const formated = distanceInWords(date, value, { locale: pt, addSuffix: true });

    return formated;
  };

  render() {
    const { pedidos } = this.props;
    return (
      <Container>
        <Header />
        <Content>
          <h1>Últimos pedidos</h1>
          <OrdersList>
            {pedidos.data.map(pedido => (
              <OrderItem key={pedido.id}>
                <p>
                  Pedido <strong>#{pedido.id}</strong> - {pedido.user.name}
                </p>
                <span>{this.getElapsedTime(pedido.created_at)}</span>
                <NumberFormat
                  value={pedido.total_price}
                  displayType="text"
                  prefix="R$ "
                  decimalSeparator=","
                  isNumericString="true"
                  renderText={value => <strong>{value}</strong>}
                />
                <ItemsList>
                  {pedido.items.map(item => (
                    <ItemDetail key={item.id}>
                      <img src={item.type.image.url} alt={item.type.name} />
                      <div>
                        <p>{item.type.name}</p>
                        <span>{item.size.name}</span>
                      </div>
                    </ItemDetail>
                  ))}
                </ItemsList>
                {!!pedido.observation && (
                  <p className="obs">
                    <strong>Observações:</strong> {pedido.observation}
                  </p>
                )}
              </OrderItem>
            ))}
          </OrdersList>
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  pedidos: state.pedidos,
});

const mapDispatchToProps = dispatch => bindActionCreators(PedidosActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Pedidos);
