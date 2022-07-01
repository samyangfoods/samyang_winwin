import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Animated,
  Pressable,
} from 'react-native'
import React, { useState, useEffect, useRef } from 'react'

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
    setIsFocused(true)
    if (isFocused != true) {
      moveTextTop()
    }
    if (value !== '') {
      setIsFocused(true)
    }
  }

  const onBlurHandler = () => {
    setIsFocused(false)
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

  const labelStyle = {
    color: !isFocused ? '#aaa' : '#006aff',
    borderColor: !isFocused ? '#aaa' : '#006aff',
  }

  const fontStyle = {
    fontSize: !isFocused ? 14 : 12,
  }

  return (
    <View styles={styles.container}>
      <Animated.View style={[styles.animatedStyle, animStyle]}>
        <Text
          style={[styles.label, labelStyle, fontStyle]}
          numberOfLines={1}
          ellipsizeMode='tail'
        >
          {item.productName}
        </Text>
      </Animated.View>
      <TextInput
        autoCapitalize={'none'}
        style={[styles.input, labelStyle]}
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
    fontSize: 18,
    width: 100,
    marginLeft: 3,
    marginTop: 25,
    borderWidth: 1,
    height: 35,
    color: '#000',
    textAlign: 'center',
    zIndex: 10000,
  },
  label: {
    fontSize: 14,
    width: 90,
    backgroundColor: '#fff',
  },
  animatedStyle: {
    top: 27,
    left: 8,
    position: 'absolute',
    borderRadius: 90,
    zIndex: 9000,
    backgroundColor: '#fff',
  },
})
