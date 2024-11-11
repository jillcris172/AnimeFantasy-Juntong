import { StyleSheet, Text, View, Image } from 'react-native'; 
import { router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomButton from '../components/CustomButton';
import { ScrollView } from 'react-native';
import { images } from '../constants';

export default function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Image 
          source={{ uri: 'https://i.pinimg.com/564x/30/c2/60/30c26037241df9d7fd1631bebf69bf3f.jpg' }} 
          style={styles.backgroundImage}
        />
        <View style={styles.logoContainer}>
          <Image 
            source={images.logo}
            style={styles.logo} 
          />
          <Image 
            source={images.Textlogo}
            style={styles.textLogo} 
          />
        </View>
        <View style={styles.descriptionContainer}>
          <Text style={styles.descriptionText}>
            Anime Fantasy: Created for those who live and breathe anime. Dive into a world of unforgettable stories, bookmark favorites, and find your next obsession.
          </Text>
        </View>
        <View style={styles.buttonContainer}>
          <CustomButton
            title="Go to App"
            handlePress={() => router.push('/sign-in')}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1, 
    backgroundColor: 'primary',
    height: '100%',
  },
  scrollContainer: {
    flexGrow: 1, 
    justifyContent: 'center', 
  },
  backgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',  
  },
  logoContainer: {
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'center', 
    marginTop: 60, 
  },
  logo: {
    width: 150, 
    height: 75, 
    marginRight: -100, 
  },
  textLogo: {
    width: 180, 
    height: 60, 
  },
  descriptionContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center', 
    marginBottom: 20, 
  },
  descriptionText: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
    paddingHorizontal: 20,
    fontFamily: 'RleyI',
  },
  buttonContainer: {
    alignItems: 'center',
    marginBottom: 50,
  },
});
