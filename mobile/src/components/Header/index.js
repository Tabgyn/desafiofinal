import React from 'react';
import { View, Image, Text } from 'react-native';

import styles from './styles';

import headerBackground from '~/assets/header-background.png';

export default function Header(props) {
  return (
    <View style={styles.container}>
      <Image source={headerBackground} style={styles.headerBackground} resizeMode="stretch" />
      <View style={styles.headerBar}>
        <View style={[styles.headerTitle, props.titleStyles]}>
          <Text style={styles.headerTitleText}>{props.title}</Text>
        </View>
        <View>{props.leftContent}</View>
        <View>{props.rightContent}</View>
      </View>
    </View>
  );
}
