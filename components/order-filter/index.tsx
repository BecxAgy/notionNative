import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { colors } from '@/styles/colors';
import { Feather } from '@expo/vector-icons';

export default function OrderFilter() {
  return (
    <View>
      <TouchableOpacity
        style={{
          flexDirection: 'row',
          gap: 6,
          borderColor: colors.gray[500],
          borderWidth: 1,
          paddingVertical: 6,
          paddingHorizontal: 12,
          borderRadius: 18,
          alignSelf: 'flex-start',
        }}
      >
        <Feather name="wind" size={18} color={colors.gray[400]} />
        <Text
          style={{
            color: colors.gray[300],
            fontSize: 14,
            fontWeight: '500',
          }}
        >
          Ordenar
        </Text>
        <Feather name="chevron-down" size={18} color={colors.gray[400]} />
      </TouchableOpacity>
    </View>
  );
}
