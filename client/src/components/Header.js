import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { AntDesign, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import Constant from 'expo-constants'

export default function Header() {
  const navigation = useNavigation()

  return (
    <View
      style={{
        marginTop: Constant.statusBarHeight,
        height: 45,
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-between',
        elevation: 4,

        // Ios elevation대신 시용
        // shadowOffset: { width: 10, height: 10 },
        // shadowColor: 'black',
        // shadowOpacity: 1.0,
      }}
    >
      <View style={{ flexDirection: 'row', margin: 5 }}>
        <Image source={require('../assets/logo2.png')} />
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'flex-end',
          width: 150,
          margin: 6,
          marginRight: 10,
        }}
      >
        <TouchableOpacity onPress={() => navigation.navigate('반품 리스트')}>
          <MaterialCommunityIcons
            name='account-circle'
            size={32}
            color='black'
          />
        </TouchableOpacity>
      </View>
    </View>
  )
}
