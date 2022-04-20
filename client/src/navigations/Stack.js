import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Main from '../views/Main'
import { FontAwesome } from '@expo/vector-icons'
import { Feather } from '@expo/vector-icons'
import { Ionicons } from '@expo/vector-icons'
import PromotionCreate from '../views/promotions/PromotionCreate'
import Profile from '../views/profiles/Profile'

const Tab = createBottomTabNavigator()

const Stack = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#FF7D0D',
        tabBarShowLabel: false,
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
    </Tab.Navigator>
  )
}

export default Stack
