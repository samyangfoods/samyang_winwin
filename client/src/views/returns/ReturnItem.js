<<<<<<< HEAD
import { View, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import { TextInput } from 'react-native-paper'
import { FloatingLabelInput } from 'react-native-floating-label-input'

export default function ReturnItem({ item, changeReturnValue }) {
  const [returnValue, setReturnValue] = useState('')
  const [phone, setPhone] = useState('')
=======
import React, { useEffect, useState, useRef } from 'react'
import {
  View,
  StyleSheet,
  TextInput,
  Text,
  Animated,
  Pressable,
} from 'react-native'

export const ReturnItem = () => {
  const [value, setValue] = useState('')
  const moveText = useRef(new Animated.Value(0)).current
>>>>>>> 8fc2c8e686a29dfa48fe50d14678f92c8c27717c

  useEffect(() => {
    if (value !== '') {
      moveTextTop()
    } else if (value === '') {
      moveTextBottom()
    }
  }, [value])

  const onChangeText = (text) => {
    setValue(text)
  }

  const onFocusHandler = () => {
    if (value !== '') {
      moveTextTop()
    }
  }

  const onBlurHandler = () => {
    if (value === '') {
      moveTextBottom()
    }
  }

  const moveTextTop = () => {
    Animated.timing(moveText, {
      toValue: 1,
      duration: 200,
      useNativeDriver: true,
    }).start()
  }

  const moveTextBottom = () => {
    Animated.timing(moveText, {
      toValue: 0,
      duration: 200,
      useNativeDriver: true,
    }).start()
  }

  const yVal = moveText.interpolate({
    inputRange: [0, 1],
    outputRange: [4, -20],
  })

  const animStyle = {
    transform: [
      {
        translateY: yVal,
      },
    ],
  }

  return (
<<<<<<< HEAD
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
=======
    <View style={styles.container}>
      <Animated.View style={[styles.animatedStyle, animStyle]}>
        <Text style={styles.label}>Enter Your Name</Text>
      </Animated.View>
      <TextInput
        autoCapitalize={'none'}
        style={styles.input}
        value={value}
        onChangeText={(text) => onChangeText(text)}
        editable={true}
        onFocus={onFocusHandler}
        onBlur={onBlurHandler}
        blurOnSubmit
>>>>>>> 8fc2c8e686a29dfa48fe50d14678f92c8c27717c
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    marginTop: 20,
    backgroundColor: '#fff',
    paddingTop: 5,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#bdbdbd',
    borderRadius: 2,
    width: '90%',
    alignSelf: 'center',
  },
  icon: {
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    fontSize: 13,
    height: 35,
    color: '#000',
  },
  label: {
    color: 'grey',
    fontSize: 10,
  },
  animatedStyle: {
    top: 5,
    left: 15,
    position: 'absolute',
    borderRadius: 90,
    zIndex: 10000,
  },
})
