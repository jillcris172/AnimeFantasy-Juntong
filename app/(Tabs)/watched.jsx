import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

const Watched = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>You Haven't Watched Video...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000', 
    justifyContent: 'center', 
    alignItems: 'center', 
  },
  text: {
    color: '#fff', 
    fontSize: 15,
    fontFamily:'SOR',
  },
});

export default Watched;
