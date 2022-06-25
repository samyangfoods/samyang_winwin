import {
  View,
  Text,
  FlatList,
  StyleSheet,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native'
import React, { useState } from 'react'
import { returnData } from '../../datas/ReturnData'
import Header from '../../components/Header'
import { TextInput, Button } from 'react-native-paper'
import Constant from 'expo-constants'
import ReturnItem from './ReturnItem'

export default function ReturnList() {
  const [returnProductList, setReturnProductList] = useState(returnData)
  const [returnArrayValue, setReturnArrayValue] = useState([])

  const changeReturnValue = (code, returnValue) => {
    const NewReturnArray = OrderList.map((item) =>
      item.code === code ? { ...item, returnValue } : item
    )
    setReturnArrayValue(NewReturnArray)
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
        <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
          {returnProductList.map((item) => {
            return (
              // <TextInput
              //   key={item.no}
              //   label={item.productName}
              //   value={returnValue}
              //   mode='outlined'
              //   style={styles.inputStyle}
              //   theme={theme}
              // />
              <ReturnItem item={item} onChange={changeReturnValue} />
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
