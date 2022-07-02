import React, { useEffect, useState, useRef } from 'react'
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Animated,
  Pressable,
} from 'react-native'

export default function ReturnItem({ item }) {
  const [isFocused, setIsFocused] = useState(false)
  const [value, setValue] = useState('')
  const moveText = useRef(new Animated.Value(0)).current

  useEffect(() => {
    if (value !== '') {
      moveTextTop()
    } else if (value === '') {
      moveTextBottom()
    }
  }, [value])

  const onChangeInputValue = (text) => {
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
    outputRange: [4, -19],
  })

  const animStyle = {
    transform: [
      {
        translateY: yVal,
      },
    ],
  }

  // const labelStyle = {
  //   color: !isFocused ? '#aaa' : '#006aff',
  //   borderColor: !isFocused ? '#aaa' : '#006aff',
  // }

  // const fontStyle = {
  //   fontSize: !isFocused ? 14 : 12,
  // }

  return (
    <View style={{ flex: 1, flexDirection: 'row' }}>
      <Animated.View style={[styles.animatedStyle, animStyle]}>
        <Text style={[styles.label]} numberOfLines={1} ellipsizeMode='tail'>
          {item.productName}
        </Text>
      </Animated.View>
      <TextInput
        autoCapitalize={'none'}
        style={styles.input}
        value={value}
        onChangeText={(text) => onChangeInputValue(text)}
        editable={true}
        onFocus={onFocusHandler}
        onBlur={onBlurHandler}
        blurOnSubmit
        keyboardType='numeric'
      />
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    width: '31%',
    height: 30,
    marginTop: 15,
    marginLeft: 10,
    fontSize: 13,
    color: '#000',
    borderWidth: 1,
    textAlign: 'center',
    zIndex: 10000,
  },
  label: {
    color: 'grey',
    fontSize: 10,
    marginBottom: -4,
  },
  animatedStyle: {
    top: 15,
    left: 15,
    position: 'absolute',
    borderRadius: 90,
    zIndex: 10000,
  },
})
