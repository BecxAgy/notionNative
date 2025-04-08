import {Feather } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import { colors } from '@/styles/colors';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        sceneStyle: {
          backgroundColor: colors.gray[800],
        },
        tabBarShowLabel: false,
        headerShown: false,
        tabBarActiveTintColor: colors.gray[100],
        tabBarInactiveTintColor: colors.gray[400],
        tabBarStyle:{
          backgroundColor: colors.gray[800],
          borderTopColor: colors.gray[600],
        }


      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          headerShown: false,
          
          tabBarIcon: ({ color , size}) => (
            <Feather name="home" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          headerShown: false,
          
          tabBarIcon: ({ color , size}) => (
            <Feather name="search" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="notifications"
        options={{
          headerShown: false,
          tabBarBadge: 3,
          tabBarBadgeStyle: {
            backgroundColor: colors.red[300],
            borderRadius: 5,
          
          },

          tabBarIcon: ({ color, size }) => (
            <Feather name="inbox" size={size} color={color} />
          ),
        }}
      />
       <Tabs.Screen
        name="edit"
        options={{
          headerShown: false,
         
          tabBarIcon: ({ color, size }) => (
            <Feather name="edit" size={size} color={color} />
          ),
        }}
      />
      
    </Tabs>
  );
}
