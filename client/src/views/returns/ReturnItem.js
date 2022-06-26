import { View, Text, StyleSheet } from 'react-native'
import React, { useEffect, useState, useCallback } from 'react'
import { TextInput } from 'react-native-paper'

export default function ReturnItem({ item, changeReturnValue }) {
  const [returnValue, setReturnValue] = useState('')

  // useEffect(() => {
  //   const inputArray = []
  //   inputArray.code = item.code
  //   inputArray.returnValue = returnValue
  //   changeReturnValue(inputArray)
  // }, [returnValue])

  const onChangeEvent = (e) => {
    const { eventCount, target, text } = e.nativeEvent
    setReturnValue(text)

    const inputArray = []
    inputArray.code = item.code
    inputArray.returnValue = returnValue
    changeReturnValue(inputArray)
    console.log(inputArray)
  }

  return (
    <View>
      <TextInput
        label={item.productName}
        value={returnValue}
        mode='outlined'
        style={styles.inputStyle}
        theme={theme}
        onChange={onChangeEvent}
      />
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
