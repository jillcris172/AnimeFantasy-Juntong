import { View, Text, Image, ScrollView, ImageBackground, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { images } from '../../constants';
import FormField from '../../components/FormField';
import CustomButton from '../../components/CustomButton';
import { Link, useRouter } from 'expo-router';

const SignIn = () => {
  const router = useRouter();
  const [form, setForm] = useState({
    email: '',
    password: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const submit = () => {
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      router.push('/home'); 
    }, 2000); 
  };

  return (
    <ImageBackground
      source={{ uri: 'https://i.pinimg.com/564x/30/c2/60/30c26037241df9d7fd1631bebf69bf3f.jpg' }}
      style={styles.background}
      blurRadius={1} 
    >
      <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={styles.scrollView}>
          <View style={styles.container}>
            <Image
              source={images.Textlogo}
              style={styles.logo}
              resizeMode="contain"
            />
            <Text style={styles.headerText}>
              Log in Here
            </Text>
            <FormField
              title="Username"
              value={form.email}
              handleChangeText={(e) => setForm({ ...form, email: e })}
              otherStyles={styles.field}
              keyboardType="email-address"
            />
            <FormField
              title="Password"
              value={form.password}
              handleChangeText={(e) => setForm({ ...form, password: e })}
              otherStyles={styles.field}
            />
            <CustomButton
              title="Sign In"
              handlePress={submit}
              containerStyles={styles.button}
              isLoading={isSubmitting}
            />
            <View style={styles.signupContainer}>
              <Text style={styles.signupText}>
                Don't have an account?
              </Text>
              <Link href="/sign-up" style={styles.signupLink}>
                Signup
              </Link>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  scrollView: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginVertical: 24,
  },
  logo: {
    width: 400,
    height: 450,
    marginTop: -200,
    marginBottom: -160,
  },
  headerText: {
    fontSize: 24,
    color: '#FFFFFF',
    fontFamily: 'RleyR',
    marginTop: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  button: {
    width: '100%',
    marginTop: 28,
  },
  signupContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  signupText: {
    fontSize: 16,
    color: '#D1D5DB',
    fontFamily: 'RleyI',
  },
  signupLink: {
    fontSize: 16,
    color: '#1E90FF',
    fontFamily: 'RleyR',
    marginLeft: 8,
  },
});

export default SignIn;
