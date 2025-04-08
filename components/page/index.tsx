import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { Feather } from '@expo/vector-icons';
import { colors } from '@/styles/colors';
import { styles } from './styles';

type PageProps = {
  id: string;
  title: string;
};

export default function Page({ item }: { item: PageProps }) {
  return (
    <View style={styles.container}>
      <Feather name="chevron-right" size={20} style={styles.icon} />
      <Feather name="file-text" size={20} style={styles.icon} />

      <Text style={styles.text}>{item.title}</Text>

      <TouchableOpacity>
        <Feather name="plus" size={20} style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
}
