import { View, Text, FlatList } from 'react-native'
import React, { useState } from 'react'
import { returnData } from '../../datas/ReturnData'
import Header from '../../components/Header'
import { TextInput, Button } from 'react-native-paper'

export default function ReturnList() {
  const [returnValue, setReturnValue] = useState()

  return (
    <View>
      <Header />
      <FlatList
        data={returnData}
        renderItem={({ item }) => {
          return (
            <View style={{ flex: 1, flexDirection: 'row' }}>
              <TextInput
                label={item.productName}
                value={returnValue}
                mode='outlined'
                style={{ margin: 5 }}
                onChangeText={(text) => setReturnValue(text)}
              />
            </View>
          )
        }}
        keyExtractor={(item) => item.no}
      />
    </View>
  )
}
