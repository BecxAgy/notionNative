import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons';
import { colors } from '@/styles/colors';

type PageProps = {
    id: string;
    title: string;
}

export default function Page( {item} : {item : PageProps} ) {
  return (
    <View style={
        {
            width: '100%',
            flexDirection: 'row',
            gap:8,
            alignItems: 'center',
            padding: 16

        }

    }>
      <Feather name='chevron-right' size={20} color={colors.gray[300]} />  
      <Feather name='file-text' size={20} color={colors.gray[300]} />   

      <Text style={
        {
            fontSize: 16,
            color: colors.gray[300],
            flex: 1,
        }
      }> {item.title}</Text>
      {/* <TouchableOpacity>
        <Feather name='plus' size={20} color={colors.gray[300]} />
      </TouchableOpacity> */}
    </View>
  )
}