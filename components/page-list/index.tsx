import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import React from 'react';
import { colors } from '@/styles/colors';
import { Feather } from '@expo/vector-icons';
import Page from '../page';

type PageListProps = {
  data: {
    id: string;
    title: string;
  }[];
};

export default function PageList({ data }: PageListProps) {
  return (
    <View
      style={{
        padding: 20,
        gap: 12,
      }}
    >
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          gap: 16,
        }}
      >
        <Text
          style={{
            fontSize: 16,
            color: colors.gray[300],
            flex: 1,
          }}
        >
          Páginas
        </Text>

        <TouchableOpacity>
          <Feather name="more-horizontal" size={20} color={colors.gray[300]} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Feather name="plus" size={20} color={colors.gray[300]} />
        </TouchableOpacity>

      </View>
        <FlatList
         contentContainerStyle={{
            backgroundColor: colors.gray[700],
            borderRadius: 10,
         }}
         scrollEnabled={false}
         ItemSeparatorComponent={() => (
            <View style={{ height: 1, backgroundColor: colors.gray[600] }} />
         )}
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <Page item={item} />}
        />
    </View>
  );
}
