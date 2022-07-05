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
        // marginTop: Constant.statusBarHeight,
        height: 50,
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
      <View style={{ flex: 1, flexDirection: 'row', marginLeft: 10 }}>
        <TouchableOpacity onPress={() => navigation.navigate('행사현황')}>
          <Image
            style={{ margin: 5, height: 35, width: 100 }}
            source={require('../assets/logo2.png')}
          />
        </TouchableOpacity>
      </View>

      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'flex-end',
          margin: 5,
        }}
      >
        <TouchableOpacity onPress={() => navigation.navigate('사용자 정보')}>
          <MaterialCommunityIcons
            name='account-circle'
            size={32}
            color='black'
            style={{ margin: 5 }}
          />
        </TouchableOpacity>
      </View>
    </View>
  )
}
