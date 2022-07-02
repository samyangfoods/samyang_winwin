import { View, Text, ScrollView } from 'react-native'
import React, { useState } from 'react'
import Constant from 'expo-constants'
import Header from '../../components/Header'

import { returnData } from '../../datas/ReturnData.js'
import ReturnItem from './ReturnItem'

export default function ReturnCreate() {
  const [returnProductList, setReturnProductList] = useState(returnData)

  return (
    <View
      style={{
        marginTop: Constant.statusBarHeight,
      }}
    >
      <Header />
      <ScrollView>
        <View style={{ display: 'flex' }}>
          {returnProductList.map((item) => {
            return <ReturnItem key={item.no} label={item.productName} />
          })}
        </View>
      </ScrollView>
    </View>
  )
}
