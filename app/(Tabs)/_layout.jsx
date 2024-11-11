import { Image, View, Text } from 'react-native';
import React from 'react';
import { Tabs } from 'expo-router';
import { icons } from '../../constants';

const TabIcon = ({ icon, color, name, focused }) => {
  return (
    <View className="items-center justify-center gap-2">
      <Image
        source={icon}
        resizeMode="contain"
        tintColor={color}
        className="w-6 h-6"
        style={{ width: 24, height: 24, tintColor: color }} 
      />
    </View>
  );
};

const TabsLayout = () => {
  return (
    <Tabs 
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: '#FFA001',
        tabBarInactiveTintColor: '#CDCDE0',
        tabBarStyle: {
          backgroundColor: '#161622',
          height: 55,
        },
        headerShown: false,  
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: 'Home',
          headerShown: false, 
          tabBarIcon: ({ color, focused }) => (
            <TabIcon 
              icon={icons.home} 
              color={color} 
              name="Home"
              focused={focused}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="bookmark"
        options={{
          title: 'Bookmark',
          headerShown: false,  
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={icons.bookmark}
              color={color}
              name="bookmark"
              focused={focused}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="watched"
        options={{
          title: 'Watched',
          headerShown: false,  
          tabBarIcon: ({ color, focused }) => (
            <TabIcon 
              icon={icons.watched} 
              color={color} 
            />
          ),
        }}
      />
      <Tabs.Screen
        name="menu"
        options={{
          title: 'Menu',
          headerShown: false,  
          tabBarIcon: ({ color, focused }) => (
            <TabIcon 
              icon={icons.menu} 
              color={color} 
            />
          ),
        }}
      />
    </Tabs>
  );
};


export default TabsLayout;
