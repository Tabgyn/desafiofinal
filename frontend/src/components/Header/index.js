import React from 'react';
import PropTypes from 'prop-types';
import { IconContext } from 'react-icons';
import { FaShoppingBag } from 'react-icons/fa';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import AuthActions from 'store/ducks/auth';

import {
  Container, Brand, Nav, User, OrdersButton,
} from './styles';

import Logo from '../../assets/logo.svg';

const Header = ({ signOut }) => (
  <Container>
    <Brand>
      <img src={Logo} alt="Pizzaria Don Juan" />
      <h1>Pizzaria Don Juan</h1>
    </Brand>
    <Nav>
      <User>
        <h1>Tiago Borges</h1>
        <button type="button" onClick={signOut}>
          Sair do app
        </button>
      </User>
      <OrdersButton>
        <IconContext.Provider value={{ size: 18 }}>
          <FaShoppingBag />
        </IconContext.Provider>
      </OrdersButton>
    </Nav>
  </Container>
);

Header.propTypes = {
  signOut: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => bindActionCreators(AuthActions, dispatch);

export default connect(
  null,
  mapDispatchToProps,
)(Header);
