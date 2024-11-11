import { TouchableOpacity, Text, StyleSheet, ActivityIndicator } from 'react-native';
import React from 'react';

const CustomButton = ({ title, handlePress, containerStyles, textStyles, isLoading }) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      activeOpacity={0.7}
      style={[styles.button, containerStyles]} 
      disabled={isLoading}
    >
      {isLoading ? (
        <ActivityIndicator color="#fff" />
      ) : (
        <Text style={[styles.text, textStyles]}>
          {title}
        </Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'transparent', 
    borderRadius: 30, 
    minHeight: 45,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1, 
    borderColor: '#ccc',
    paddingHorizontal: 90, 
  },
  text: {
    color: '#fff',
    fontSize: 16, 
    fontFamily: 'RleyI', 
  },
});

export default CustomButton;