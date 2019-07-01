import React, { Component } from 'react';
import {
  View, TouchableOpacity, FlatList, Image, Text,
} from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import SizesActions from '~/store/ducks/sizes';

import styles from './styles';
import Header from '~/components/Header';
import { metrics } from '~/styles';

class Type extends Component {
  static propTypes = {
    loadSizesRequest: PropTypes.func.isRequired,
    types: PropTypes.shape({}).isRequired,
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }).isRequired,
  };

  handleTypeSizes = (productType) => {
    const { loadSizesRequest } = this.props;

    loadSizesRequest(productType);
  };

  renderItem = ({ item, index }) => (
    <TouchableOpacity
      style={[
        styles.cardItem,
        index % 2 === 0 ? { marginRight: metrics.baseMargin } : { marginRight: 0, marginLeft: 0 },
      ]}
      activeOpacity={0.8}
      onPress={() => this.handleTypeSizes(item)}
    >
      <Image source={{ uri: item.image.url }} style={styles.cardImage} resizeMode="contain" />
      <Text style={styles.cardTitle}>{item.name}</Text>
    </TouchableOpacity>
  );

  render() {
    const { types, navigation } = this.props;

    return (
      <View style={styles.container}>
        <Header
          title="Selecione um tipo"
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
          <FlatList
            data={types.data}
            keyExtractor={item => String(item.id)}
            renderItem={this.renderItem}
            numColumns={2}
          />
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  types: state.types,
});

const mapDispatchToProps = dispatch => bindActionCreators(SizesActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Type);
