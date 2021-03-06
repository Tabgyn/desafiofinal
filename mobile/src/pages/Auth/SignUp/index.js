import React, { Component } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  View,
  ImageBackground,
  Image,
  TextInput,
  TouchableOpacity,
  Text,
} from 'react-native';
import PropTypes from 'prop-types';
import LinearGradient from 'react-native-linear-gradient';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import AuthActions from '~/store/ducks/auth';

import styles from '~/pages/Auth/styles';

import fundo from '~/assets/fundo.jpg';
import logo from '~/assets/logo.png';

class SignUp extends Component {
  static propTypes = {
    signUpRequest: PropTypes.func.isRequired,
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }).isRequired,
  };

  state = {
    name: '',
    email: '',
    password: '',
  };

  handleSubmit = () => {
    const { name, email, password } = this.state;
    const { signUpRequest } = this.props;

    signUpRequest(name, email, password);
  };

  render() {
    const { name, email, password } = this.state;
    const { navigation } = this.props;

    return (
      <ImageBackground source={fundo} style={styles.background}>
        <LinearGradient colors={['rgba(0, 0, 0, 0.4)', 'rgba(0,0,0,1)']} style={styles.gradient}>
          <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : null} style={styles.avoidView}>
            <View style={styles.container}>
              <Image source={logo} style={styles.logo} />
              <TextInput
                value={name}
                onChangeText={text => this.setState({ name: text })}
                style={styles.input}
                placeholder="Nome completo"
                autoCapitalize="none"
                autoCorrect={false}
                underlineColorAndroid="transparent"
                autoFocus
                returnKeyType="next"
                onSubmitEditing={() => this.emailInput.focus()}
              />
              <TextInput
                value={email}
                onChangeText={text => this.setState({ email: text })}
                style={styles.input}
                placeholder="Seu e-mail"
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
                underlineColorAndroid="transparent"
                returnKeyType="next"
                ref={(el) => {
                  this.emailInput = el;
                }}
                onSubmitEditing={() => this.passwordInput.focus()}
              />
              <TextInput
                value={password}
                onChangeText={text => this.setState({ password: text })}
                style={styles.input}
                placeholder="Senha secreta"
                secureTextEntry
                autoCapitalize="none"
                autoCorrect={false}
                underlineColorAndroid="transparent"
                returnKeyType="send"
                ref={(el) => {
                  this.passwordInput = el;
                }}
                onSubmitEditing={() => this.handleSubmit}
              />
              <TouchableOpacity onPress={this.handleSubmit} style={styles.button} activeOpacity={0.8}>
                <Text style={styles.buttonText}>Criar conta</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('SignIn')} style={styles.link} activeOpacity={0.8}>
                <Text style={styles.buttonText}>Já tenho login</Text>
              </TouchableOpacity>
            </View>
          </KeyboardAvoidingView>
        </LinearGradient>
      </ImageBackground>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators(AuthActions, dispatch);

export default connect(
  null,
  mapDispatchToProps,
)(SignUp);
