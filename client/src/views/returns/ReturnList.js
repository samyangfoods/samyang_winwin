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
      returnSumEA: 125,
      returnSumPrice: 125652,
      // gunnySack : 마대
      gunnySack: [
        {
          product_sapcode: '333266',
          product_returnName: '짱구',
          product_returnValue: 2,
          product_returnPrice: 652,
        },
        {
          product_sapcode: '333267',
          product_returnName: '왕짱구',
          product_returnValue: 12,
          product_returnPrice: 652,
        },
        {
          product_sapcode: '333268',
          product_returnName: '삼양라면',
          product_returnValue: 3,
          product_returnPrice: 652,
        },
        {
          product_sapcode: '333269',
          product_returnName: '불닭볶음면',
          product_returnValue: 7,
          product_returnPrice: 652,
        },
        {
          product_sapcode: '333210',
          product_returnName: '달고나짱구',
          product_returnValue: 33,
          product_returnPrice: 652,
        },
        {
          product_sapcode: '333211',
          product_returnName: '짜짜로니',
          product_returnValue: 25,
          product_returnPrice: 652,
        },
        {
          product_sapcode: '333212',
          product_returnName: '맛있는라면',
          product_returnValue: 16,
          product_returnPrice: 652,
        },
      ],
    },
    {
      no: 2,
      user: 'object(1222333255)',
      returnSumEA: 145,
      ReturnDate: '22년 7월',
      returnSumPrice: 125652,
      // gunnySack : 마대
      gunnySack: [
        {
          product_sapcode: '333266',
          product_returnName: '짱구',
          product_returnValue: 2,
          product_returnPrice: 652,
        },
        {
          product_sapcode: '333267',
          product_returnName: '왕짱구',
          product_returnValue: 12,
          product_returnPrice: 652,
        },
        {
          product_sapcode: '333268',
          product_returnName: '삼양라면',
          product_returnValue: 3,
          product_returnPrice: 652,
        },
        {
          product_sapcode: '333269',
          product_returnName: '불닭볶음면',
          product_returnValue: 7,
          product_returnPrice: 652,
        },
        {
          product_sapcode: '333210',
          product_returnName: '달고나짱구',
          product_returnValue: 33,
          product_returnPrice: 652,
        },
        {
          product_sapcode: '333211',
          product_returnName: '짜짜로니',
          product_returnValue: 25,
          product_returnPrice: 652,
        },
        {
          product_sapcode: '333212',
          product_returnName: '맛있는라면',
          product_returnValue: 16,
          product_returnPrice: 652,
        },
      ],
    },
    {
      no: 3,
      user: 'object(1222333255)',
      returnSumEA: 160,
      ReturnDate: '22년 7월',
      returnSumPrice: 125652,
      product_returnPrice: 652,
      // gunnySack : 마대
      gunnySack: [
        {
          product_sapcode: '333266',
          product_returnName: '짱구',
          product_returnValue: 2,
          product_returnPrice: 652,
        },
        {
          product_sapcode: '333267',
          product_returnName: '왕짱구',
          product_returnValue: 12,
          product_returnPrice: 652,
        },
        {
          product_sapcode: '333268',
          product_returnName: '삼양라면',
          product_returnValue: 3,
          product_returnPrice: 652,
        },
        {
          product_sapcode: '333269',
          product_returnName: '불닭볶음면',
          product_returnValue: 7,
          product_returnPrice: 652,
        },
        {
          product_sapcode: '333210',
          product_returnName: '달고나짱구',
          product_returnValue: 33,
          product_returnPrice: 652,
        },
        {
          product_sapcode: '333211',
          product_returnName: '짜짜로니',
          product_returnValue: 25,
          product_returnPrice: 652,
        },
        {
          product_sapcode: '333212',
          product_returnName: '맛있는라면',
          product_returnValue: 16,
          product_returnPrice: 652,
        },
      ],
    },
    {
      no: 4,
      user: 'object(1222333255)',
      returnSumEA: 160,
      ReturnDate: '22년 7월',
      returnSumPrice: 125652,
      // gunnySack : 마대
      gunnySack: [
        {
          product_sapcode: '333266',
          product_returnName: '짱구',
          product_returnValue: 2,
          product_returnPrice: 652,
        },
        {
          product_sapcode: '333267',
          product_returnName: '왕짱구',
          product_returnValue: 12,
          product_returnPrice: 652,
        },
        {
          product_sapcode: '333268',
          product_returnName: '삼양라면',
          product_returnValue: 3,
          product_returnPrice: 652,
        },
        {
          product_sapcode: '333269',
          product_returnName: '불닭볶음면',
          product_returnValue: 7,
          product_returnPrice: 652,
        },
        {
          product_sapcode: '333210',
          product_returnName: '달고나짱구',
          product_returnValue: 33,
          product_returnPrice: 652,
        },
        {
          product_sapcode: '333211',
          product_returnName: '짜짜로니',
          product_returnValue: 25,
          product_returnPrice: 652,
        },
        {
          product_sapcode: '333212',
          product_returnName: '맛있는라면',
          product_returnValue: 16,
          product_returnPrice: 652,
        },
      ],
    },
    {
      no: 5,
      user: 'object(1222333255)',
      returnSumEA: 160,
      ReturnDate: '22년 7월',
      returnSumPrice: 125652,
      // gunnySack : 마대
      gunnySack: [
        {
          product_sapcode: '333266',
          product_returnName: '짱구',
          product_returnValue: 2,
          product_returnPrice: 652,
        },
        {
          product_sapcode: '333267',
          product_returnName: '왕짱구',
          product_returnValue: 12,
          product_returnPrice: 652,
        },
        {
          product_sapcode: '333268',
          product_returnName: '삼양라면',
          product_returnValue: 3,
          product_returnPrice: 652,
        },
        {
          product_sapcode: '333269',
          product_returnName: '불닭볶음면',
          product_returnValue: 7,
          product_returnPrice: 652,
        },
        {
          product_sapcode: '333210',
          product_returnName: '달고나짱구',
          product_returnValue: 33,
          product_returnPrice: 652,
        },
        {
          product_sapcode: '333211',
          product_returnName: '짜짜로니',
          product_returnValue: 25,
          product_returnPrice: 652,
        },
        {
          product_sapcode: '333212',
          product_returnName: '맛있는라면',
          product_returnValue: 16,
          product_returnPrice: 652,
        },
      ],
    },
    {
      no: 6,
      user: 'object(1222333255)',
      returnSumEA: 160,
      ReturnDate: '22년 7월',
      returnSumPrice: 125652,
      // gunnySack : 마대
      gunnySack: [
        {
          product_sapcode: '333266',
          product_returnName: '짱구',
          product_returnValue: 2,
          product_returnPrice: 652,
        },
        {
          product_sapcode: '333267',
          product_returnName: '왕짱구',
          product_returnValue: 12,
          product_returnPrice: 652,
        },
        {
          product_sapcode: '333268',
          product_returnName: '삼양라면',
          product_returnValue: 3,
          product_returnPrice: 652,
        },
        {
          product_sapcode: '333269',
          product_returnName: '불닭볶음면',
          product_returnValue: 7,
          product_returnPrice: 652,
        },
        {
          product_sapcode: '333210',
          product_returnName: '달고나짱구',
          product_returnValue: 33,
          product_returnPrice: 652,
        },
        {
          product_sapcode: '333211',
          product_returnName: '짜짜로니',
          product_returnValue: 25,
          product_returnPrice: 652,
        },
        {
          product_sapcode: '333212',
          product_returnName: '맛있는라면',
          product_returnValue: 16,
          product_returnPrice: 652,
        },
      ],
    },
    {
      no: 7,
      user: 'object(1222333255)',
      returnSumEA: 160,
      ReturnDate: '22년 7월',
      returnSumPrice: 125652,
      // gunnySack : 마대
      gunnySack: [
        {
          product_sapcode: '333266',
          product_returnName: '짱구',
          product_returnValue: 2,
          product_returnPrice: 652,
        },
        {
          product_sapcode: '333267',
          product_returnName: '왕짱구',
          product_returnValue: 12,
          product_returnPrice: 652,
        },
        {
          product_sapcode: '333268',
          product_returnName: '삼양라면',
          product_returnValue: 3,
          product_returnPrice: 652,
        },
        {
          product_sapcode: '333269',
          product_returnName: '불닭볶음면',
          product_returnValue: 7,
          product_returnPrice: 652,
        },
        {
          product_sapcode: '333210',
          product_returnName: '달고나짱구',
          product_returnValue: 33,
          product_returnPrice: 652,
        },
        {
          product_sapcode: '333211',
          product_returnName: '짜짜로니',
          product_returnValue: 25,
          product_returnPrice: 652,
        },
        {
          product_sapcode: '333212',
          product_returnName: '맛있는라면',
          product_returnValue: 16,
          product_returnPrice: 652,
        },
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
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate('반품상세')
                    }}
                  >
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
                    <Text>{item.returnSumEA} EA</Text>
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
