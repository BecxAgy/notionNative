import React, { useState } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { colors } from '@/styles/colors';

import PageCard from '@/components/page-card';
import { DATA } from '@/utils/data';

import Filters from '@/components/filters';
import SearchBar from '@/components/search-bar';

export default function Search() {
  const [isTyping, setIsTyping] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  const [searchQuery, setSearchQuery] = useState(''); // Estado para armazenar o texto da busca

  // Filtra os dados com base no texto digitado
  const filteredData = DATA.PAGES.filter((item) =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <SearchBar
        isTyping={isTyping}
        setIsTyping={setIsTyping}
        showFilters={showFilters}
        setShowFilters={setShowFilters}
        searchQuery={searchQuery} // Passa o texto da busca para o SearchBar
        setSearchQuery={setSearchQuery} // Passa o setter para atualizar o texto da busca
      />
      {showFilters && <Filters />}

      <View style={styles.flatListContainer}>
        <FlatList
          scrollEnabled={false}
          data={filteredData} // Usa os dados filtrados
          contentContainerStyle={styles.flatListContent}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <PageCard item={item} />}
        />
      </View>
    </View>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 55,
  },

  flatListContainer: {
    paddingHorizontal: 14,
    paddingVertical: 15,
  },
  flatListContent: {
    backgroundColor: colors.gray[700],
    borderRadius: 10,
  },
  separator: {
    height: 1,
    backgroundColor: colors.gray[600],
  },
});
