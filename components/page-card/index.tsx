import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { styles } from './styles';
import { Feather } from '@expo/vector-icons';

type PageCardProps = {
  id: string;
  title: string;
};
export default function PageCard({ item }: { item: PageCardProps }) {
  return (
    <View style={styles.container}>
      <Feather name="file-text" size={24} style={styles.icon} />
      <View>
        <Text style={styles.text}>{item.title}</Text>
        <Text style={styles.description}>Em páginas particulares</Text>
      </View>
    </View>
  );
}
