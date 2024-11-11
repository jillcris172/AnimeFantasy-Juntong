import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground, Image, ScrollView } from 'react-native';
import { Link } from 'expo-router';
import { images } from '../../constants';
import icons from '../../constants/icons';

const SignUp = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSignUp = () => {
    console.log('Sign Up with:', firstName, lastName, username, password, confirmPassword);
  };

  return (
    <ImageBackground
      source={{ uri: 'https://i.pinimg.com/564x/30/c2/60/30c26037241df9d7fd1631bebf69bf3f.jpg' }}
      style={styles.background}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <Text style={styles.title}>Create Account</Text>

          <TextInput
            style={styles.input}
            placeholder="First Name"
            placeholderTextColor="#aaa"
            value={firstName}
            onChangeText={setFirstName}
          />

          <TextInput
            style={styles.input}
            placeholder="Last Name"
            placeholderTextColor="#aaa"
            value={lastName}
            onChangeText={setLastName}
          />

          <TextInput
            style={styles.input}
            placeholder="Username"
            placeholderTextColor="#aaa"
            value={username}
            onChangeText={setUsername}
          />

          <View style={styles.passwordContainer}>
            <TextInput
              style={styles.passwordInput}
              placeholder="Password"
              placeholderTextColor="#aaa"
              value={password}
              onChangeText={setPassword}
              secureTextEntry={!showPassword}
            />
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
              <Image
                source={showPassword ? icons.eye : icons.hide_eye}
                style={styles.eyeIcon}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.passwordContainer}>
            <TextInput
              style={styles.passwordInput}
              placeholder="Confirm Password"
              placeholderTextColor="#aaa"
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              secureTextEntry={!showPassword} 
            />
          </View>

          <Link href="/sign-in" asChild>
            <TouchableOpacity onPress={handleSignUp} style={styles.button}>
              <Text style={styles.buttonText}>Sign Up</Text>
            </TouchableOpacity>
          </Link>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
    background: {
      flex: 1,
      resizeMode: 'cover',
    },
    scrollContainer: {
      flexGrow: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    container: {
      borderRadius: 15,
      padding: 20,
      width: '100%',
      alignItems: 'center',
    },
    title: {
      fontSize: 24,
      marginBottom: 100,
      color: '#fff',
      fontFamily: 'SOR',
    },
    input: {
      width: '100%',
      padding: 10,
      marginVertical: 10,
      borderRadius: 15,
      backgroundColor: '#000',
      color: 'white',
      borderColor: '#ddd', 
      borderWidth: 1,
      shadowColor: '#00ffff', 
      shadowOffset: { width: 0, height: 0 },
      shadowOpacity: 0.8,
      shadowRadius: 10,
      elevation: 8, 
    },
    passwordContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      width: '100%',
      backgroundColor: '#000',
      borderRadius: 15,
      marginVertical: 10,
      borderColor: '#ddd', 
      borderWidth: 1,
      shadowColor: '#00ffff', 
      shadowOffset: { width: 0, height: 0 },
      shadowOpacity: 0.8,
      shadowRadius: 10,
      elevation: 8, 
    },
    passwordInput: {
      flex: 1,
      padding: 10,
      color: 'white',
    },
    eyeIcon: {
      width: 20,
      height: 20,
      marginRight: 10,
      tintColor: '#aaa',
    },
    button: {
      width: '90  %',
      padding: 15,
      borderRadius: 60,
      backgroundColor: '#555',
      alignItems: 'center',
      marginTop: 20,
    },
    buttonText: {
      color: 'white',
      fontSize: 16,
    },
  });
  
  export default SignUp;
  
