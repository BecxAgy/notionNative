import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { colors } from '@/styles/colors';
import { Feather } from '@expo/vector-icons';
import { styles } from './styles';

type RecentProps = {
  id: string;
    title: string;
    cover?: string;
}

export default function Recent({item} : {item :RecentProps }) {
  return (
    <TouchableOpacity activeOpacity={0.6}>
    <View style={styles.container}>
      <Image source={{ uri: item.cover }} style={styles.image} />
  
      {/* content */}
      <View style={styles.content}>
        <Feather name="file-text" size={28} color={colors.gray[300]} style={styles.icon} />
        <Text style={styles.title}>{item.title}</Text>
      </View>
    </View>
  </TouchableOpacity>
  )
}