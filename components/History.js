import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {list} from './Calculator';

export default function History() {
    return (
        <View style={styles.history}>
          <Text>History:</Text>
          
      </View>
    )
}

const styles = StyleSheet.create({
    history: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
  });