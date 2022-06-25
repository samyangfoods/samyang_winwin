import { View, Text, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import { TextInput } from 'react-native-paper'

export default function ReturnItem({ item, changeReturnValue }) {
  const [returnValue, setReturnValue] = useState('')

  const onChangeCount = (e) => {
    setReturnValue(e.currentTarget.value)
  }

  useEffect(() => {
    setReturnValue(item.code, parseInt(returnValue))
  }, [returnValue])

  return (
    <View>
      <TextInput
        key={item.no}
        label={item.productName}
        value={returnValue}
        mode='outlined'
        style={styles.inputStyle}
        theme={theme}
        onChange={onChangeCount}
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
