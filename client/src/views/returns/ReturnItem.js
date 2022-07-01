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
  const [isFocused, setisFocused] = useState(false)
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

  const FocusHandler2 = () => {}

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
    outputRange: [4, -13],
  })

  const animStyle = {
    transform: [
      {
        translateY: yVal,
      },
    ],
  }

  return (
    // <View style={{ paddingTop: 18, marginTop: 5 }}>
    //   <Text style={labelStyle}>{item.productName}</Text>
    //   <TextInput
    //     style={styles.floatingInput}
    //     onFocus={handleFocus}
    //     onBlur={handleBlur}
    //     blurOnSubmit
    //   />
    // </View> <View style={styles.container}>
    <View styles={styles.container}>
      <Animated.View style={[styles.animatedStyle, animStyle]}>
        <Text style={styles.label} numberOfLines={1} ellipsizeMode='tail'>
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
    width: 120,
    marginLeft: 3,
    marginTop: 25,
    borderWidth: 1,
    height: 35,
    color: '#000',
    textAlign: 'center',
  },
  label: {
    color: 'grey',
    fontSize: 16,
  },
  animatedStyle: {
    top: 25,
    left: 5,
    position: 'absolute',
    borderRadius: 90,
    zIndex: 10000,
    backgroundColor: '#fff',
  },
})
