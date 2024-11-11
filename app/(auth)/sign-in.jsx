import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground, Image, ScrollView, Dimensions } from 'react-native';
import { Link } from 'expo-router';
import { images } from '../../constants'; 
import icons from '../../constants/icons'; 

const { width } = Dimensions.get('window'); 

const SignIn = () => {
  const [email, setEmail] = useState('');  
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <ImageBackground
      source={{ uri: 'https://i.pinimg.com/564x/30/c2/60/30c26037241df9d7fd1631bebf69bf3f.jpg' }}
      style={styles.background}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        <Image 
          source={images.Textlogo} 
          resizeMode="contain"
          style={styles.logo}
        />
        
        <View style={styles.container}>
          <TextInput
            style={styles.input}
            placeholder="Username"
            placeholderTextColor="#aaa"
            value={email}
            onChangeText={setEmail}
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

          <Link href="/home" asChild>
            <TouchableOpacity onPress={handleLogin} style={styles.button}>
              <Text style={styles.buttonText}>Sign In</Text>
            </TouchableOpacity>
          </Link>

          <Link href="/sign-up" asChild>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Create Account</Text>
            </TouchableOpacity>
          </Link>

          <TouchableOpacity>
            <Text style={styles.forgotPassword}>Forgot password?</Text>
          </TouchableOpacity>
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
  logo: {
    marginTop: -200,
    marginBottom: -60, 
  },
  container: { 
    borderRadius: 15,
    padding: 20,
    width: '100%', 
    alignItems: 'center',
  },
  input: {
    width: '100%',
    padding: 10,
    marginVertical: 15,
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
    width: '90%',
    padding: 10,
    marginTop: 10,
    borderRadius: 60,
    backgroundColor: '#555',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  forgotPassword: {
    color: '#fff',
    textAlign: 'center',
    marginTop: 150,
  },
});



export default SignIn;
