import { View, Text, ScrollView, Button } from 'react-native'
import React, { useState } from 'react'

import { returnData } from '../../datas/ReturnData.js'
import ReturnItem from './ReturnItem'

export default function ReturnCreate() {
  const [returnProductList, setReturnProductList] = useState(returnData)
  const [formData, setFormData] = useState([])

  function onChangeReturnArray(text) {
    setFormData(...formData, text)
  }

  console.log(formData)

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
          {returnProductList.map((item) => {
            return (
              <ReturnItem
                key={item.no}
                label={item.productName}
                code={item.code}
                onChangeReturnArray={onChangeReturnArray}
              />
            )
          })}
        </View>
      </ScrollView>
    </View>
  )
}
