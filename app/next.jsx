import React, { useState } from 'react';
import { View, Text, ImageBackground, StyleSheet, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; 
import { useNavigation } from '@react-navigation/native'; 

export const animeData = [
  {
    id: 1,
    title: 'Dr. STONE',
    image: { uri: 'https://upload.wikimedia.org/wikipedia/en/thumb/2/29/Doctor_stone.jpg/220px-Doctor_stone.jpg' },
  },
  {
    id: 2,
    title: 'Naruto Shippuden',
    image: { uri: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQLxStja2783Lz8sxOn_RN3sGt02cK6TQC8eGynmfoc3jgsc-K_EeIPwkf5efdVrxir96H8dw' },
  },
  {
    id: 3,
    title: 'The Rising of the Shield Hero',
    image: { uri: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcS4EBv_TcATwy4k_1IJ-bfsJGs4gd98gsDOGZJAZyRmRp2D8FPcZpTodaAsz81tpwOul8eu' },
  },
  {
    id: 4,
    title: 'Black Clover',
    image: { uri: 'https://m.media-amazon.com/images/M/MV5BZmZkZjNhMWMtM2U0Mi00MjdlLTk3NmMtMTMwZjgwOTJmODMzXkEyXkFqcGc@._V1_.jpg' },
  },
  {
    id: 5,
    title: 'BORUTO: Naruto Next Generations',
    image: { uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIVP8_ODnWjflN6pZMl3zeVAHiKK4KpxQ3SceFFCawqCuv41aAVwwS76e0cwqwlk_ErWB1' }
  },
  {
    id: 6,
    title: 'Welcome to Demon School! Iruma-kun',
    image: { uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_m96o6qWtHVs6gTLKi0U_jWbKaoqPJf4CUgiYFO5ohNkSMNbO' },
  },
];

const AnimeList = () => {
  const navigation = useNavigation();
  const [searchText, setSearchText] = useState('');

  const handlePress = (id) => {
    navigation.navigate('Details', { id });
  };

  const goBack = () => {
    navigation.navigate('home'); 
  };

  const filteredAnimeData = animeData.filter(anime =>
    anime.title.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={goBack} style={styles.backButton}>
          <Icon name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Next to Watch</Text>
      </View>
      
      <TextInput
        style={styles.searchInput}
        placeholder="Search Anime..."
        placeholderTextColor="#aaa"
        onChangeText={setSearchText}
        value={searchText}
      />

      <View style={styles.animeRow}>
        {filteredAnimeData.map((anime) => (
          <TouchableOpacity key={anime.id} onPress={() => handlePress(anime.id)} style={styles.animeCard}>
            <ImageBackground source={anime.image} style={styles.animeImage}>
              <View style={styles.cardText}>
                <Text style={styles.animeTitle}>{anime.title}</Text>
              </View>
            </ImageBackground>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000', 
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 20,
    marginTop: 20, 
  },
  backButton: {
    padding: 10,
  },
  headerText: {
    color: '#fff',
    fontFamily: 'SOR',
    fontSize: 22,
    flex: 1,
    textAlign: 'center', 
  },
  searchInput: {
    backgroundColor: '#222',
    color: '#fff',
    paddingVertical: 12,
    paddingHorizontal: 15,
    borderRadius: 8,
    marginHorizontal: 20,
    marginBottom: 20,
    fontSize: 16,
  },
  animeRow: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    flexWrap: 'wrap',
    paddingHorizontal: 10,
  },
  animeCard: {
    width: 120,
    marginBottom: 20,
    borderRadius: 8,
    overflow: 'hidden',
  },
  animeImage: {
    width: '100%',
    height: 170,
    justifyContent: 'flex-end',
  },
  cardText: {
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    padding: 5,
  },
  animeTitle: {
    color: '#fff',
    fontSize: 12,
    textAlign: 'center',
  },
});

export default AnimeList;
