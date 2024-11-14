import { StatusBar } from 'expo-status-bar';
import { ScrollView, Text, View, Image, StyleSheet } from 'react-native';
import { Link, router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { images } from '../constants';
import CustomButton from '../components/CustomButton';

export default function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollView}>
      
        <Image
          source={{ uri: 'https://i.pinimg.com/564x/30/c2/60/30c26037241df9d7fd1631bebf69bf3f.jpg' }}
          style={styles.backgroundImage}
        />

        <View style={styles.container}>
       
          <View style={styles.logoContainer}>
            <Image
              source={images.Textlogo}
              style={styles.textLogo}
            />
            <Image
              source={images.logo}
              style={styles.logo}
            />
          </View>

          <View style={styles.titleContainer}>
            <Text style={styles.titleText}>
            Anime Fantasy: Created for those who live and breathe anime. Dive into a world of unforgettable stories, bookmark favorites, and find your next obsession.
            </Text>
          </View>
        </View>
        
       
        <View style={styles.buttonContainer}>
          <CustomButton
            title="Get Started"
            handlePress={() => router.push('/sign-in')}
            containerStyles={{ width: '100%', marginTop: 28 }}
          />
        </View>

      </ScrollView>
      <StatusBar backgroundColor="#161622" style="light" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#161622',
  },
  scrollView: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
    position: 'relative',
    zIndex: 1, 
  },
  backgroundImage: {
    position: 'absolute', 
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    zIndex: 0, 
  },
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  textLogo: {
    width: 400,
    height: 350,
    resizeMode: 'contain',
    marginTop: -120,
  },
  logo: {
    width: 250,
    height: 200,
    resizeMode: 'contain',
    marginTop: -200,
    marginBottom: 20,
  },
  titleContainer: {
    justifyContent:'center',
  },
  titleText: {
    fontSize: 24,
    color: '#FFFFFF',
    fontFamily: 'RleyI',
    textAlign: 'center',
    marginBottom: 140,
  },
  subtitleText: {
    fontSize: 14,
    color: '#D1D5DB',
    fontFamily: 'RleyR',
    textAlign: 'center',
    marginTop: 100,
    marginBottom: -250,
  },
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'flex-end', 
    marginTop: 'auto', 
    marginBottom: 40, 
  },
});
