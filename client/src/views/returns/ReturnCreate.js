import { View, Text, ScrollView, Button } from 'react-native'
import React, { useState } from 'react'

import { returnData } from '../../datas/ReturnData.js'
import ReturnItem from './ReturnItem'

export default function ReturnCreate() {
  const [returnProductList, setReturnProductList] = useState(returnData)

  const changeReturnValue = (product_sapcode, product_returnCount) => {
    const newReturnList = returnProductList.map((item) =>
      item.product_sapcode === product_sapcode
        ? { ...item, product_returnCount }
        : item
    )
    setReturnProductList(newReturnList)
    console.log(returnProductList)
  }

  return (
    <View>
      <View>
        <Button title='등록하기' />
      </View>
      <ScrollView>
        <View
          style={{
            width: '100%',
            flex: 1,
            flexDirection: 'row',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {returnProductList.map((item, index) => {
            return (
              <ReturnItem
                key={item.product_sapcode}
                item={item}
                index={index}
                changeReturnValue={changeReturnValue}
              />
            )
          })}
        </View>
      </ScrollView>
    </View>
  )
}
