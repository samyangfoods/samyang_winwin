import { View, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import { TextInput } from 'react-native-paper'
import { FloatingLabelInput } from 'react-native-floating-label-input'

export default function ReturnItem({ item, changeReturnValue }) {
  const [returnValue, setReturnValue] = useState('')
  const [phone, setPhone] = useState('')

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
    // <View>
    //    <TextInput
    //     label={item.productName}
    //     value={returnValue}
    //     mode='outlined'
    //     style={styles.inputStyle}
    //     theme={theme}
    //     onChange={onChangeEvent}
    //   />
    // </View>
    <View style={{ padding: 50, flex: 1, backgroundColor: '#fff' }}>
      <FloatingLabelInput
        label='Phone'
        value={phone}
        staticLabel
        hintTextColor={'#aaa'}
        mask='99 (99) 99999-9999'
        hint='55 (22) 98765-4321'
        containerStyles={{
          borderWidth: 2,
          paddingHorizontal: 10,
          backgroundColor: '#fff',
          borderColor: 'blue',
          borderRadius: 8,
        }}
        customLabelStyles={{
          colorFocused: 'red',
          fontSizeFocused: 12,
        }}
        labelStyles={{
          backgroundColor: '#fff',
          paddingHorizontal: 5,
        }}
        inputStyles={{
          color: 'blue',
          paddingHorizontal: 10,
        }}
        onChangeText={(value) => {
          setPhone(value)
        }}
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
