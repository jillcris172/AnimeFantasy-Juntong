import React, { useState } from 'react';
import { View, Text, ImageBackground, StyleSheet, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; 
import { useNavigation } from '@react-navigation/native'; 

export const animeData2 = [
  {
    id: 1,
    title: 'Tomb Raider: The Legend of Lara Croft',
    image: { uri: 'https://static.wikia.nocookie.net/cinemorgue/images/2/2c/Tomb_Raider_The_Legend_of_Lara_Croft.jpg/revision/latest?cb=20240706172824' },
  },
  {
    id: 2,
    title: 'Gekijouban Nintama Rantarou',
    image: { uri: 'https://i.ytimg.com/vi/jJjRm_NElsM/maxresdefault.jpg' },
  },
  {
    id: 3,
    title: 'The Blue Wolves of Mibu',
    image: { uri: 'https://m.media-amazon.com/images/M/MV5BMzY3NzI4M2MtMDQyYS00OTBhLTkxOWMtYjg0MDI2Nzc2OTI0XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg' },
  },
  {
    id: 4,
    title: 'Puella Magi Madoka Magica the Movie',
    image: { uri: 'https://m.media-amazon.com/images/M/MV5BMTkxYjBlNjgtYTZmMS00MDU0LThkNDgtYmY1MmEzODhjZThhXkEyXkFqcGc@._V1_.jpg' },
  },
  {
    id: 5,
    title: 'GACHIAKUTA',
    image: { uri: 'https://static.wikia.nocookie.net/gachiakuta/images/6/6f/Gachiakuta_Teaser_Visual_1.png/revision/latest?cb=20240613011924' }
  },
  {
    id: 6,
    title: 'Sword of the Demon Hunter',
    image: { uri: 'https://a.storyblok.com/f/178900/750x1061/ac0401ebaa/sword_of_the_demon_hunter_key_visual.jpg/m/filters:quality(95)format(webp)' },
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

  const filteredAnimeData2 = animeData2.filter(anime =>
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
        {filteredAnimeData2.map((anime) => (
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
