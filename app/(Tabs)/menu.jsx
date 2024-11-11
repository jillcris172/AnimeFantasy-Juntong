import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native'; 
import { router } from 'expo-router'; 
import Icon from 'react-native-vector-icons/FontAwesome5'; 

const Menu = () => {
  const navigation = useNavigation(); 

  
  const goToProfile = () => {
    navigation.navigate('Profile'); 
  };

  
  const handleCreateCommunity = () => {
    console.log('Community');
  };

  
  const handleSettings = () => {
    console.log('Settings');
  };

  
  const handleLogout = () => {
    
    router.replace('/'); 
  };

  return (
    <View style={styles.container}>
      <View style={styles.sidebar}>
        <TouchableOpacity style={styles.userInfo} onPress={goToProfile}>
          <Image
            source={{ uri: 'https://i0.wp.com/blog.artsper.com/wp-content/uploads/2022/06/pepefroggie-770x432-2.jpg?resize=644%2C362&ssl=1' }}
            style={styles.avatar}
          />
          <Text style={styles.userName}>Juntong G. Jill </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={handleCreateCommunity}>
          <Icon name="users-cog" size={20} color="#fff" />
          <Text style={styles.buttonText}> Community</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={handleSettings}>
          <Icon name="cog" size={20} color="#fff" />
          <Text style={styles.buttonText}> Settings</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <Icon name="sign-out-alt" size={20} color="#fff" />
          <Text style={styles.buttonText}> Log Out</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000', 
    justifyContent: 'center', 
    alignItems: 'center', 
  },
  sidebar: {
    width: 250, 
    backgroundColor: '#000', 
    padding: 20,
    borderRadius: 10, 
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5, 
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  userName: {
    color: '#fff',
    fontSize: 18, 
  },
  button: {
    marginTop: 15, 
    paddingVertical: 12, 
    borderRadius: 8, 
    alignItems: 'center',
    flexDirection: 'row', 
    elevation: 3, 
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 8, 
  },
  logoutButton: {
    marginTop: 20,
    paddingVertical: 12, 
    borderRadius: 8, 
    alignItems: 'center',
    flexDirection: 'row', 
    elevation: 3, 
  },
});

export default Menu;
