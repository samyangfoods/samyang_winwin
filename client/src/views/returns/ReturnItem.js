import React, { useEffect, useState, useRef } from 'react'
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Animated,
  Pressable,
} from 'react-native'

export default function ReturnItem({ label }) {
  const [isFocused, setIsFocused] = useState(false)
  const [value, setValue] = useState('')
  const animatedIsFocused = useRef(new Animated.Value(0)).current

  useEffect(() => {
    Animated.timing(animatedIsFocused, {
      toValue: isFocused ? 1 : 0,
      duration: 200,
      useNativeDriver: true,
    }).start()
  }, [])

  const fadeIn = () => {
    // Will change fadeAnim value to 1 in 5 seconds
    Animated.timing(animatedIsFocused, {
      toValue: isFocused ? 1 : 0,
      duration: 200,
      useNativeDriver: true,
    }).start()
  }

  const fadeOut = () => {
    // Will change fadeAnim value to 0 in 3 seconds
    Animated.timing(animatedIsFocused, {
      toValue: isFocused ? 1 : 0,
      duration: 200,
      useNativeDriver: true,
    }).start()
  }

  const onChangeInputValue = (text) => {
    setValue(text)
  }

  const onFocusHandler = () => {
    // if (value !== '') {
    //   moveTextTop()
    // }
    setIsFocused(true)
  }

  const onBlurHandler = () => {
    // if (value === '') {
    //   moveTextBottom()
    // }
    setIsFocused(false)
  }

  const labelStyle = {
    // color: !isFocused ? '#aaa' : '#006aff',
    left: 0,
    top: animatedIsFocused.interpolate({
      inputRange: [0, 1],
      outputRange: [18, 0],
    }),
    color: animatedIsFocused.interpolate({
      inputRange: [0, 1],
      outputRange: ['#aaa', '#006aff'],
    }),
    fontSize: animatedIsFocused.interpolate({
      inputRange: [0, 1],
      outputRange: [18, 14],
    }),
    borderColor: animatedIsFocused.interpolate({
      inputRange: [0, 1],
      outputRange: ['#aaa', '#006aff'],
    }),
  }

  // const fontStyle = {
  //   fontSize: !isFocused ? 14 : 12,
  // }

  return (
    <View sytle={styles.container}>
      <Animated.View style={labelStyle}>
        <Text>{label}</Text>
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
    flex: 1,
  },
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
