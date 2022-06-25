import {
  View,
  Text,
  FlatList,
  StyleSheet,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native'
import React, { useEffect, useState } from 'react'
import { returnData } from '../../datas/ReturnData'
import Header from '../../components/Header'
import { TextInput, Button } from 'react-native-paper'
import Constant from 'expo-constants'
import ReturnItem from './ReturnItem'

export default function ReturnList() {
  const [returnProductList, setReturnProductList] = useState(returnData)
  const [returnArray, setReturnArray] = useState([])

  const changeReturnValue = (returnArrayInput) => {
    const NewReturnArray = []
    NewReturnArray.unshift(returnArrayInput)

    setReturnArray(NewReturnArray)
    console.log(returnArray)
  }

  return (
    <View
      style={{
        flex: 1,
        marginTop: Constant.statusBarHeight,
      }}
    >
      <Header />
      <ScrollView>
        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}
        >
          {returnProductList.map((item) => {
            return (
              <ReturnItem
                key={item.no}
                item={item}
                changeReturnValue={changeReturnValue}
              />
            )
          })}
        </View>
      </ScrollView>
    </View>
  )
}

const theme = {
  colors: { primary: '#006aff' },
}

const styles = StyleSheet.create({
  root: {},
  inputStyle: {
    margin: 4,
    width: 110,
    height: 30,
    fontSize: 12,
    backgroundColor: 'white',
  },
})
