import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Main from '../views/Main'
<<<<<<< HEAD
import { Feather, Ionicons, Entypo, FontAwesome } from '@expo/vector-icons'
import PromotionCreate from '../views/promotions/PromotionCreate'
import Profile from '../views/profiles/Profile'
import ReturnCreate from '../views/returns/ReturnCreate'
=======
import { Feather, Entypo } from '@expo/vector-icons'
import ReturnList from '../views/returns/ReturnList'
>>>>>>> c2714a58e6b080bd5c9ce7d12f095a089f430dec

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
          headerShown: false,
        }}
      />
      <Tab.Screen
        name='반품'
        component={ReturnCreate}
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
