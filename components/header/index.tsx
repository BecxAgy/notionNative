import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { headerStyles } from './styles'
import { Feather } from '@expo/vector-icons'
import { colors } from '@/styles/colors'

export default function Header() {
  return (
    <View style={headerStyles.container}>
     <Image source={{ uri: 'https://github.com/becxagy.png'}} style={headerStyles.image} />

     <View style={headerStyles.user}>
      <Text style={headerStyles.name}>becxagy</Text>
      <Text style={headerStyles.email}>becx.aguiar@gmail.com</Text>
     </View>

     <TouchableOpacity >
      <Feather name='more-horizontal' size={24} color={colors.gray[100]} />
     </TouchableOpacity>
    </View>
  )
}