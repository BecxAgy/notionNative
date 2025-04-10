import React from 'react';
import { View, TextInput, TouchableOpacity, Text, Keyboard } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { styles } from './styles';
import { colors } from '@/styles/colors';

export interface SearchBarProps {
  isTyping: boolean;
  setIsTyping: React.Dispatch<React.SetStateAction<boolean>>;
  showFilters: boolean;
  setShowFilters: React.Dispatch<React.SetStateAction<boolean>>;
  searchQuery: string; // Add searchQuery property
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>; // Add setSearchQuery property
}

export default function SearchBar({
  isTyping,
  setIsTyping,
  showFilters,
  setShowFilters,
  searchQuery,
  setSearchQuery,
}: SearchBarProps) {
  return (
    <View style={styles.searchBarContainer}>
      <View style={styles.searchInputContainer}>
        <Feather name="search" size={18} color={colors.gray[300]} />
        <TextInput
          style={styles.searchInput}
          underlineColorAndroid="transparent"
          placeholder="Páginas, base de dados, textos..."
          value={searchQuery} // Define o valor do campo de busca
          onChangeText={(text) => setSearchQuery(text)} // Atualiza o texto da busca
          onFocus={() => setIsTyping(true)}
          onBlur={() => setIsTyping(false)}
        />
      </View>

      {!isTyping ? (
        <TouchableOpacity
          onPress={() => setShowFilters(!showFilters)}
          style={[
            styles.filterButton,
            {
              backgroundColor: showFilters ? colors.gray[700] : colors.gray[600],
            },
          ]}
        >
          <Feather
            name="filter"
            size={20}
            color={!showFilters ? colors.gray[300] : colors.gray[100]}
          />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          onPress={() => {
            setIsTyping(false);
            Keyboard.dismiss();
          }}
        >
          <Text style={styles.cancelButtonText}>Cancelar</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}