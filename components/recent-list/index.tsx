import { View, Text, FlatList } from 'react-native';
import React from 'react';
import { s } from './styles';

import Recent from '../recent';

type RecentListProps = {
  data: {
    id: string;
    title: string;
    cover?: string;
  }[];
};

export default function RecentList({ data }: RecentListProps) {
  return (
    <View style={s.container}>
      <Text style={s.title}>Recentes</Text>

      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={data}
        renderItem={({ item }) => <Recent item={item} />}
        keyExtractor={(item) => item.id}
        contentContainerStyle={s.content}
        
        
      />
    </View>
  );
}
