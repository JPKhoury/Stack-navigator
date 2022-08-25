import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const Homescreen = ({ navigation }) => {
  return (
    <View style={styles.homes}>
      <Text style={{ fontSize: 30 }}>Home Screen</Text>
      <Button style={styles.botao}
        title="Go to About"
        onPress={() => navigation.navigate('Back')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  homes: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#50C7C7',
  }
})

export default Homescreen;
