import { View, Text, Image, ScrollView, ImageBackground, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { images } from '../../constants';
import FormField from '../../components/FormField';
import CustomButton from '../../components/CustomButton';
import { Link, useRouter } from 'expo-router';

const SignUp = () => {
  const router = useRouter();
  const [form, setForm] = useState({
    firstname: '',
    lastname: '',
    emailusername: '',
    createpassword: '',
    confirmpassword: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const submit = () => {
    if (form.createpassword !== form.confirmpassword) {
      setError('Passwords do not match.');
      return;
    }

    setIsSubmitting(true);
    setError('');

    setTimeout(() => {
      setIsSubmitting(false);
      router.push('/sign-in');
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
              resizeMode="contain"
              style={styles.logo}
            />
            <Text style={styles.headerText}>Sign up Here</Text>

            <FormField
              title="Firstname"
              value={form.firstname}
              handleChangeText={(e) => setForm({ ...form, firstname: e })}
              otherStyles={styles.field}
            />
            <FormField
              title="Lastname"
              value={form.lastname}
              handleChangeText={(e) => setForm({ ...form, lastname: e })}
              otherStyles={styles.field}
            />
            <FormField
              title="Create Username"
              value={form.emailusername}
              handleChangeText={(e) => setForm({ ...form, emailusername: e })}
              otherStyles={styles.field}
              keyboardType="email-address"
            />
            <FormField
              title="Password"
              value={form.createpassword}
              handleChangeText={(e) => setForm({ ...form, createpassword: e })}
              otherStyles={styles.field}
              
            />
            <FormField
              title="Confirm Password"
              value={form.confirmpassword}
              handleChangeText={(e) => setForm({ ...form, confirmpassword: e })}
              otherStyles={styles.field}
              
            />

            {error ? <Text style={styles.errorText}>{error}</Text> : null}

            <CustomButton
              title="Done"
              handlePress={submit}
              containerStyles={styles.button}
              isLoading={isSubmitting}
            />

            <View style={styles.signupContainer}>
              <Text style={styles.signupText}>You already have an account?</Text>
              <Link href="/sign-in" style={styles.signupLink}>
                Sign In
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
  safeArea: {
    flex: 1,
  },
  scrollView: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  container: {
    alignItems: 'center',
    paddingHorizontal: 16,
    marginVertical: 24,
  },
  logo: {
    width: 300,
    height: 450,
    marginTop: -210,
    marginBottom: -190,
  },
  headerText: {
    fontSize: 24,
    color: '#FFFFFF',
    fontFamily: 'RleyR',
    textAlign: 'center',
    marginBottom: 10,
  },
  field: {
    marginBottom: 16,
  },
  button: {
    width: '100%',
    marginTop: 28,
  },
  errorText: {
    color: '#FF0000',
    fontSize: 14,
    marginTop: 8,
    textAlign: 'center',
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
    marginLeft: 5,
  },
});

export default SignUp;
