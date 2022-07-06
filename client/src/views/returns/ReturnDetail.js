import {
  View,
  Text,
  FlatList,
  StyleSheet,
  ScrollView,
  Button,
  TextInput,
  TouchableOpacity,
} from 'react-native'
import React, { useState } from 'react'
import Header from '../../components/Header'
import Constant from 'expo-constants'
import {
  AntDesign,
  MaterialCommunityIcons,
  FontAwesome,
} from '@expo/vector-icons'
import { MainContainer } from '../../styles/Lounge'
import { PlusBtn } from '../../styles/Lounge'

export default function ReturnDetail({ navigation }) {
  return (
    <MainContainer
      style={{
        marginTop: Constant.statusBarHeight,
      }}
    >
      <ScrollView>
        <Text>Return Detail</Text>
      </ScrollView>
      <PlusBtn onPress={() => navigation.navigate('반품등록')}>
        <AntDesign name='plus' size={24} color='white' />
      </PlusBtn>
    </MainContainer>
  )
}

const styles = StyleSheet.create({})
