import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity, FlatList, Animated, TextInput } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { animeData } from '../next';
import { animeData2 } from '../upcoming'; 

const Home = () => {
  const recommendedData = [
    { id: 'rec-1', title: 'Attack on Titan', image: 'https://static.wikia.nocookie.net/shingekinokyojin/images/d/d8/Attack_on_Titan_Season_1.jpg/revision/latest?cb=20211005182832' },
  ];
  
  const nextToWatchData = [
    { id: 'ntw-2', title: 'Spirited Away', image: 'https://upload.wikimedia.org/wikipedia/en/thumb/d/db/Spirited_Away_Japanese_poster.png/220px-Spirited_Away_Japanese_poster.png' },
    { id: 'ntw-3', title: 'Moving Castle', image: 'https://upload.wikimedia.org/wikipedia/en/thumb/a/a0/Howls-moving-castleposter.jpg/220px-Howls-moving-castleposter.jpg' },
    { id: 'ntw-4', title: 'Demon Slayer', image: 'https://upload.wikimedia.org/wikipedia/en/thumb/0/09/Demon_Slayer_-_Kimetsu_no_Yaiba%2C_volume_1.jpg/220px-Demon_Slayer_-_Kimetsu_no_Yaiba%2C_volume_1.jpg' },
  ];
  
  const upcomingData = [
    { id: 'up-5', title: 'Ponyo', image: 'https://upload.wikimedia.org/wikipedia/en/thumb/5/51/Ponyo.png/220px-Ponyo.png' },
    { id: 'up-6', title: 'One Piece Red', image: 'https://upload.wikimedia.org/wikipedia/en/thumb/9/90/One_Piece%2C_Volume_61_Cover_%28Japanese%29.jpg/220px-One_Piece%2C_Volume_61_Cover_%28Japanese%29.jpg' },
    { id: 'up-7', title: 'Hero Academia', image: 'https://upload.wikimedia.org/wikipedia/en/thumb/5/5a/Boku_no_Hero_Academia_Volume_1.png/220px-Boku_no_Hero_Academia_Volume_1.png' },
  ];

  const [hoveredItem, setHoveredItem] = useState(null);
  const [searchText, setSearchText] = useState(''); 
  const navigation = useNavigation();

  const handlePressIn = (id) => {
    setHoveredItem(id); 
  };

  const handlePressOut = () => {
    setHoveredItem(null); 
  };

 
  const combinedData = [
    ...recommendedData, 
    ...nextToWatchData, 
    ...upcomingData, 
    ...animeData.map(anime => ({ ...anime, image: anime.image.uri, id: `anime-${anime.id}` })), 
    ...animeData2.map(anime => ({ ...anime, image: anime.image.uri, id: `upcoming-${anime.id}` })) 
  ];

  const filterAnimeData = (data) => {
    return data.filter((item) =>
      item.title.toLowerCase().includes(searchText.toLowerCase())
    );
  };

  const renderAnimeItemSearch = ({ item }) => {
    const isHovered = hoveredItem === item.id; 
    const imageSource = typeof item.image === 'string' ? { uri: item.image } : null; 

    return (
      <TouchableOpacity
        style={styles.searchItemContainer}
        onPressIn={() => handlePressIn(item.id)}
        onPressOut={handlePressOut}
      >
        {imageSource ? (
          <Animated.Image
            source={imageSource}
            style={[styles.searchItemImage, isHovered && { transform: [{ scale: 1.1 }] }]}
          />
        ) : (
          <View style={styles.searchItemImage} /> 
        )}
        <Text style={styles.searchItemText}>{item.title}</Text>
      </TouchableOpacity>
    );
  };

  const renderAnimeItem = ({ item }) => {
    const isHovered = hoveredItem === item.id; 
    const imageSource = typeof item.image === 'string' ? { uri: item.image } : null; 

    return (
      <TouchableOpacity
        style={styles.itemContainer}
        onPressIn={() => handlePressIn(item.id)}
        onPressOut={handlePressOut}
      >
        {imageSource ? (
          <Animated.Image
            source={imageSource}
            style={[styles.itemImage, isHovered && { transform: [{ scale: 1.1 }] }]}
          />
        ) : (
          <View style={styles.itemImage} /> 
        )}
        <Text style={styles.itemText}>{item.title}</Text>
      </TouchableOpacity>
    );
  };

  const filteredData = filterAnimeData(combinedData); 

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Anime Fantasy</Text>
      </View>

      <View style={styles.section}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search Anime..."
          placeholderTextColor="#aaa"
          onChangeText={(text) => setSearchText(text)} 
          value={searchText}
        />
      </View>

      {searchText.length > 0 ? (
        <View style={styles.section}>
          <FlatList
            data={filteredData} 
            renderItem={renderAnimeItemSearch} 
            keyExtractor={(item) => item.id.toString()}
            showsVerticalScrollIndicator={false}
          />
        </View>
      ) : (
        <>
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Recommended</Text>
            <TouchableOpacity onPress={() => navigation.navigate('video1')}>
              <Image
                source={{ uri: recommendedData[0].image }} 
                style={styles.recommendedImage}
                resizeMode='cover'
              />
              <Text style={styles.recommendedText}>{recommendedData[0].title}</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.section}>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>Next to Watch</Text>
              <TouchableOpacity onPress={() => navigation.navigate('next')}>
                <Text style={styles.seeAll}>See All</Text>
              </TouchableOpacity>
            </View>
            <FlatList
              data={nextToWatchData} 
              horizontal
              renderItem={renderAnimeItem}
              keyExtractor={(item) => item.id.toString()}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.flatListContainer}
            />
          </View>

          <View style={styles.section}>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>Upcoming</Text>
              <TouchableOpacity onPress={() => navigation.navigate('upcoming')}>
                <Text style={styles.seeAll}>See All</Text>
              </TouchableOpacity>
            </View>
            <FlatList
              data={upcomingData}
              horizontal
              renderItem={renderAnimeItem}
              keyExtractor={(item) => item.id.toString()}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.flatListContainer}
            />
          </View>
        </>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    padding: 10,
  },
  header: {
    alignItems: 'center',
    paddingVertical: 15,
  },
  headerText: {
    fontSize: 32,
    color: '#fff',
    fontFamily: 'SOR', 
    marginTop:20,
  },
  section: {
    marginVertical: 20,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  sectionTitle: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#fff',
  },
  seeAll: {
    fontSize: 16,
    color: '#fff',
    textDecorationLine: 'underline',
  },
  flatListContainer: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  itemContainer: {
    marginRight: 15,
    width: 100,
  },
  itemImage: {
    width: 100,
    height: 150,
    borderRadius: 10,
  },
  itemText: {
    color: '#fff',
    textAlign: 'center',
  },
  recommendedImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
  recommendedText: {
    color: '#fff',
    textAlign: 'center',
    marginTop: 5,
  },
  searchItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  searchItemImage: {
    width: 60,
    height: 60,
    borderRadius: 10,
    marginRight: 10,
  },
  searchItemText: {
    color: '#fff',
  },
  searchInput: {
    backgroundColor: '#333',
    color: '#fff',
    borderRadius: 15,
    padding: 10,
  },
});

export default Home;
