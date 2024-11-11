import React, { useState, useEffect, useRef } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Animated } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; 
import { useNavigation } from '@react-navigation/native'; 

const RecommendedScreen = () => {
  const [isBookmarked, setIsBookmarked] = useState(false); 
  const [showSavedMessage, setShowSavedMessage] = useState(false); 
  const fadeAnim = useRef(new Animated.Value(0)).current; 
  const navigation = useNavigation(); 

  const toggleBookmark = () => {
    const newBookmarkState = !isBookmarked; 
    setIsBookmarked(newBookmarkState); 

    if (!isBookmarked) { 
      setShowSavedMessage(true); 

      Animated.timing(fadeAnim, {
        toValue: 1, 
        duration: 300,
        useNativeDriver: true,
      }).start(() => {
        setTimeout(() => {
          Animated.timing(fadeAnim, {
            toValue: 0, 
            duration: 300,
            useNativeDriver: true,
          }).start(() => {
            setShowSavedMessage(false); 
          });
        }, 1000); 
      });
    }
  };

  const goBack = () => {
    navigation.navigate('home'); 
  };

  return (
    <View style={styles.container}>
      
      <View style={styles.header}>
        <TouchableOpacity onPress={goBack} style={styles.backButton}>
          <Icon name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Recommended</Text>
      </View>

      <View style={styles.imageContainer}>
        <Image
          source={{ uri: 'https://static.wikia.nocookie.net/shingekinokyojin/images/d/d8/Attack_on_Titan_Season_1.jpg/revision/latest?cb=20211005182832' }} 
          style={styles.animeImage}
          resizeMode="cover"
        />
      </View>

      <View style={styles.detailsContainer}>
        <Text style={styles.detailsText}>⭐⭐⭐⭐⭐  1.6B Watched</Text>
        
        <View style={styles.bookmarkContainer}>
          {showSavedMessage && (
            <Animated.View style={[styles.savedMessage, { opacity: fadeAnim }]}>
              <Text style={styles.savedText}>Saved</Text>
            </Animated.View>
          )}
          <TouchableOpacity onPress={toggleBookmark} style={styles.bookmarkIconContainer}>
            <Icon
              name={isBookmarked ? 'bookmark' : 'bookmark-outline'} 
              size={24}
              color={isBookmarked ? '#fff' : '#ccc'}
            />
          </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity style={styles.watchButton}>
        <Text style={styles.watchButtonText}>Watch now</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000', 
    padding: 20, 
  },
  header: {
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'center', 
    paddingHorizontal: 10,
    paddingTop: 40, 
  },
  headerText: {
    fontSize: 22,
    color: '#fff',
    fontWeight: 'bold',
    marginLeft: 10, 
    marginTop: 30, 
  },
  backButton: {
    position: 'absolute', 
    left: 10, 
  },
  imageContainer: {
    alignItems: 'center',
    marginVertical: 30, 
  },
  animeImage: {
    width: '100%',
    height: 400,
    borderRadius: 10,
  },
  detailsContainer: {
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center',
    marginVertical: 15,
    paddingHorizontal: 10, 
  },
  detailsText: {
    color: '#fff',
    fontSize: 16,
  },
  bookmarkContainer: {
    flexDirection: 'row', 
    alignItems: 'center', 
  },
  savedMessage: {
    position: 'absolute',
    bottom: 30, 
    alignItems: 'center',
  },
  savedText: {
    color: '#fff',
    fontSize: 12, 
    marginRight: 5, 
  },
  bookmarkIconContainer: {
    marginLeft: 5, 
  },
  watchButton: {
    backgroundColor: '#1e90ff', 
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderRadius: 30,
    alignSelf: 'center',
    marginTop: 30, 
  },
  watchButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default RecommendedScreen;
