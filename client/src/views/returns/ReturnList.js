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

export default function ReturnList({ navigation }) {
  const returnValueDummyData = [
    {
      no: 1,
      user: 'object(1222333255)',
      ReturnDate: '22년 7월',
      sumValue: 125,
      // gunnySack : 마대
      gunnySack: [
        { code: '333266', productName: '짱구', value: 2 },
        { code: '333267', productName: '왕짱구', value: 12 },
        { code: '333268', productName: '삼양라면', value: 3 },
        { code: '333269', productName: '불닭볶음면', value: 7 },
        { code: '333210', productName: '달고나짱구', value: 33 },
        { code: '333211', productName: '짜짜로니', value: 25 },
        { code: '333212', productName: '맛있는라면', value: 16 },
      ],
    },
    {
      no: 2,
      user: 'object(1222333255)',
      sumValue: 145,
      ReturnDate: '22년 7월',
      // gunnySack : 마대
      gunnySack: [
        { code: '333266', productName: '짱구', value: 2 },
        { code: '333267', productName: '왕짱구', value: 12 },
        { code: '333268', productName: '삼양라면', value: 3 },
        { code: '333269', productName: '불닭볶음면', value: 7 },
        { code: '333210', productName: '달고나짱구', value: 33 },
        { code: '333211', productName: '짜짜로니', value: 25 },
        { code: '333212', productName: '맛있는라면', value: 16 },
      ],
    },
    {
      no: 3,
      user: 'object(1222333255)',
      sumValue: 160,
      ReturnDate: '22년 7월',
      // gunnySack : 마대
      gunnySack: [
        { code: '333266', productName: '짱구', value: 2 },
        { code: '333267', productName: '왕짱구', value: 12 },
        { code: '333268', productName: '삼양라면', value: 3 },
        { code: '333269', productName: '불닭볶음면', value: 7 },
        { code: '333210', productName: '달고나짱구', value: 33 },
        { code: '333211', productName: '짜짜로니', value: 25 },
        { code: '333212', productName: '맛있는라면', value: 16 },
      ],
    },
    {
      no: 4,
      user: 'object(1222333255)',
      sumValue: 160,
      ReturnDate: '22년 7월',
      // gunnySack : 마대
      gunnySack: [
        { code: '333266', productName: '짱구', value: 2 },
        { code: '333267', productName: '왕짱구', value: 12 },
        { code: '333268', productName: '삼양라면', value: 3 },
        { code: '333269', productName: '불닭볶음면', value: 7 },
        { code: '333210', productName: '달고나짱구', value: 33 },
        { code: '333211', productName: '짜짜로니', value: 25 },
        { code: '333212', productName: '맛있는라면', value: 16 },
      ],
    },
    {
      no: 5,
      user: 'object(1222333255)',
      sumValue: 160,
      ReturnDate: '22년 7월',
      // gunnySack : 마대
      gunnySack: [
        { code: '333266', productName: '짱구', value: 2 },
        { code: '333267', productName: '왕짱구', value: 12 },
        { code: '333268', productName: '삼양라면', value: 3 },
        { code: '333269', productName: '불닭볶음면', value: 7 },
        { code: '333210', productName: '달고나짱구', value: 33 },
        { code: '333211', productName: '짜짜로니', value: 25 },
        { code: '333212', productName: '맛있는라면', value: 16 },
      ],
    },
    {
      no: 6,
      user: 'object(1222333255)',
      sumValue: 160,
      ReturnDate: '22년 7월',
      // gunnySack : 마대
      gunnySack: [
        { code: '333266', productName: '짱구', value: 2 },
        { code: '333267', productName: '왕짱구', value: 12 },
        { code: '333268', productName: '삼양라면', value: 3 },
        { code: '333269', productName: '불닭볶음면', value: 7 },
        { code: '333210', productName: '달고나짱구', value: 33 },
        { code: '333211', productName: '짜짜로니', value: 25 },
        { code: '333212', productName: '맛있는라면', value: 16 },
      ],
    },
    {
      no: 7,
      user: 'object(1222333255)',
      sumValue: 160,
      ReturnDate: '22년 7월',
      // gunnySack : 마대
      gunnySack: [
        { code: '333266', productName: '짱구', value: 2 },
        { code: '333267', productName: '왕짱구', value: 12 },
        { code: '333268', productName: '삼양라면', value: 3 },
        { code: '333269', productName: '불닭볶음면', value: 7 },
        { code: '333210', productName: '달고나짱구', value: 33 },
        { code: '333211', productName: '짜짜로니', value: 25 },
        { code: '333212', productName: '맛있는라면', value: 16 },
      ],
    },
  ]

  return (
    <MainContainer
      style={{
        marginTop: Constant.statusBarHeight,
      }}
    >
      <Header />
      <ScrollView>
        <View
          style={{
            alignItems: 'center',
            height: '90%',
            width: '100%',
            marginTop: 30,
            shadowColor: '#000',
          }}
        >
          {returnValueDummyData.map((item) => {
            return (
              <View
                style={{
                  height: 60,
                  width: '90%',
                  borderWidth: 1,
                  borderRadius: 10,
                  borderColor: '#E6E7F2',
                  flex: 1,
                  backgroundColor: 'white',
                  flexDirection: 'row',
                  marginBottom: 16,
                  backgroundColor: '#ffffff',
                  shadowColor: '#000',
                  shadowOffset: {
                    width: 0,
                    height: 2,
                  },
                  shadowOpacity: 0.25,
                  shadowRadius: 3.84,
                  elevation: 5,
                }}
                key={item.no}
              >
                <View
                  style={{
                    marginLeft: 5,
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    flex: 1,
                    flexDirection: 'row',
                  }}
                >
                  <TouchableOpacity>
                    <View
                      style={{
                        marginLeft: 10,
                        width: 40,
                        height: 40,
                        backgroundColor: '#ff7d0d',
                        color: '#fff',
                        borderRadius: 10,
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <Text
                        style={{
                          color: '#fff',
                          fontSize: 20,
                        }}
                      >
                        {item.no}
                      </Text>
                    </View>
                  </TouchableOpacity>

                  <View style={{ marginLeft: 5 }}>
                    <Text>{item.ReturnDate}</Text>
                  </View>
                  <View>
                    <TextInput
                      style={{
                        marginLeft: 20,
                        borderLeftWidth: 1,
                        borderColor: '#dfdfdd',
                      }}
                      editable={false}
                      selectTextOnFocus={false}
                    />
                  </View>
                  <View>
                    <Text>{item.sumValue} EA</Text>
                  </View>

                  <View>
                    <TextInput
                      style={{
                        marginLeft: 20,
                        borderLeftWidth: 1,
                        borderColor: '#dfdfdd',
                      }}
                      editable={false}
                      selectTextOnFocus={false}
                    />
                  </View>
                  <View style={{ width: 40 }}>
                    <TouchableOpacity>
                      <FontAwesome name='edit' size={24} color='black' />
                    </TouchableOpacity>
                  </View>
                  <View style={{ marginRight: 10 }}>
                    <TouchableOpacity>
                      <MaterialCommunityIcons
                        name='delete-circle-outline'
                        size={24}
                        color='black'
                      />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            )
          })}
        </View>
      </ScrollView>
      <PlusBtn onPress={() => navigation.navigate('반품등록')}>
        <AntDesign name='plus' size={24} color='white' />
      </PlusBtn>
    </MainContainer>
  )
}

const styles = StyleSheet.create({})
