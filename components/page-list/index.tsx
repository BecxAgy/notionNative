import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import React from 'react';
import { colors } from '@/styles/colors';
import { Feather } from '@expo/vector-icons';
import Page from '../page';
import { s } from './styles';

type PageListProps = {
  data: {
    id: string;
    title: string;
  }[];
};

export default function PageList({ data }: PageListProps) {
  return (
    <View style={s.container}>
      <View style={s.header}>
        <Text style={s.title}>Páginas</Text>

        <TouchableOpacity>
          <Feather name="more-horizontal" size={20} style={s.icon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Feather name="plus" size={20} style={s.icon} />
        </TouchableOpacity>
      </View>
      <FlatList
        contentContainerStyle={s.listContainer}
        scrollEnabled={false}
        ItemSeparatorComponent={() => <View style={s.separator} />}
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Page item={item} />}
      />
    </View>
  );
}
