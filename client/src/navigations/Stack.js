import React from 'react'
import { Text } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Main from '../views/Main'
import { Feather, Ionicons, Entypo, FontAwesome } from '@expo/vector-icons'
import PromotionCreate from '../views/promotions/PromotionCreate'
import Profile from '../views/profiles/Profile'
import ReturnList from '../views/returns/ReturnList'

const Tab = createBottomTabNavigator()

const Stack = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#FF7D0D',
        tabBarShowLabel: true,
      }}
    >
      <Tab.Screen
        name='행사현황'
        component={Main}
        options={{
          tabBarIcon: ({ color, size }) => {
            return <Feather name='list' size={size} color={color} />
          },
        }}
      />

      <Tab.Screen
        name='행사등록'
        component={PromotionCreate}
        options={{
          tabBarIcon: ({ color, size }) => {
            return <Ionicons name='create-outline' size={size} color={color} />
          },
        }}
      />
      <Tab.Screen
        name='사용자 정보'
        component={Profile}
        options={{
          tabBarIcon: ({ color, size }) => {
            return <FontAwesome name='user' size={size} color={color} />
          },
        }}
      />
      <Tab.Screen
        name='반품 리스트'
        component={ReturnList}
        options={{
          tabBarIcon: ({ color, size }) => {
            return <Entypo name='trash' size={size} color={color} />
          },
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  )
}

export default Stack
