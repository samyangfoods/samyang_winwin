import React, { useEffect, useState, useRef } from 'react'
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Animated,
  KeyboardAvoidingView,
} from 'react-native'

export default function ReturnItem({ label, onChangeReturnArray }) {
  const [isFocused, setIsFocused] = useState(false)
  const [value, setValue] = useState('')
  const moveText = useRef(new Animated.Value(0)).current

  useEffect(() => {
    if (value !== '') {
      moveTextTop()
      setIsFocused(true)
      console.log(value)
    } else if (value === '') {
      moveTextBottom()
      setIsFocused(false)
    }
  }, [value])

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
    outputRange: [4, -22],
  })

  const animStyle = {
    transform: [
      {
        translateY: yVal,
      },
    ],
  }

  const activeLabelStyle = {
    color: !isFocused ? '#aaa' : '#006aff',
    fontSize: !isFocused ? 14 : 12,
  }

  const activeInputStyle = {
    borderColor: !isFocused ? '#aaa' : '#006aff',
  }

  // '#ff7d0d'

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.animatedStyle, animStyle]}>
        <Text
          style={[styles.label, activeLabelStyle]}
          numberOfLines={1}
          ellipsizeMode='tail'
        >
          {label}
        </Text>
      </Animated.View>
      <TextInput
        style={[styles.input, activeInputStyle]}
        autoCapitalize={'none'}
        value={value}
        onChangeText={(text) => setValue(text)}
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
  container: { marginTop: 10 },
  input: {
    width: 100,
    height: 40,
    marginTop: 20,
    marginLeft: 10,
    fontSize: 15,
    color: '#006aff',
    borderWidth: 2,
    borderRadius: 10,
    zIndex: 10,
    textAlign: 'center',
  },
  label: {
    color: 'grey',
    fontSize: 12,
    width: 99,
    marginLeft: 1,
  },
  animatedStyle: {
    top: 25,
    left: 15,
    position: 'absolute',
    borderRadius: 90,
    zIndex: 1,
  },
})
