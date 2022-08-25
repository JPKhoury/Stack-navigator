import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const Aboutscreen = () => {
  return (
    <View style={styles.about}>
      <Text style={{ fontSize: 30 }}>About Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  about: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center',
    backgroundColor: '#50C7C7'
  }
})

export default Aboutscreen;
