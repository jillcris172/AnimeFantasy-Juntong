import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

const Bookmark = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>No bookmarks yet...</Text>
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
    fontSize: 18,
    fontFamily:'SOR',
  },
});

export default Bookmark;
