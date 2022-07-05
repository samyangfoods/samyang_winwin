import React, { useEffect, useState, useRef } from 'react'
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Animated,
  KeyboardAvoidingView,
} from 'react-native'

export default function ReturnItem({
  item: { product_sapcode, product_returnName, product_returnPrice },
  changeReturnValue,
}) {
  const [isFocused, setIsFocused] = useState(false)

  const [product_returnCount, setProduct_returnCount] = useState('')

  const onChangeCount = (e) => {
    const { text } = e.nativeEvent
    setProduct_returnCount(text)
  }

  useEffect(() => {
    changeReturnValue(product_sapcode, parseInt(product_returnCount))
  }, [product_returnCount])

  const moveText = useRef(new Animated.Value(0)).current

  useEffect(() => {
    if (product_returnCount !== '') {
      moveTextTop()
      setIsFocused(true)
    } else if (product_returnCount === '') {
      moveTextBottom()
      setIsFocused(false)
    }
  }, [product_returnCount])

  const onFocusHandler = () => {
    if (product_returnCount !== '') {
      moveTextTop()
    }
  }

  const onBlurHandler = () => {
    if (product_returnCount === '') {
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
          {product_returnName}
        </Text>
      </Animated.View>
      <TextInput
        style={[styles.input, activeInputStyle]}
        autoCapitalize={'none'}
        value={product_returnCount}
        onChange={onChangeCount}
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
