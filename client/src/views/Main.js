import React, { useEffect, useState } from 'react'
import { View } from 'react-native'
import Search from '../components/Search'
import EachPromotion from '../components/EachPromotion'
import { MainContainer, Top, Bottom, PlusBtn } from '../styles/Lounge'
import NotFound from '../components/NotFound'
import DataLoading from '../components/DataLoading'
import { useSelector } from 'react-redux'
import { usePromotions } from '../hooks/promotionHooks'
import { AntDesign } from '@expo/vector-icons'
import Header from '../components/Header'
import Constant from 'expo-constants'

/*
Main page helps users to check current promotion data.
Flat list contains each promotion data and the function "renderItem" handles this part.  
This page also has a search container so that users will search promotion by its type. e.g.) "전단행사", "엔드행사", "기타행사"
*/

const Main = ({ navigation }) => {
  // Redux Variables
  const promotionArray = useSelector((state) => state.promotion.array)
  const token = useSelector((state) => state.user.token)

  // useState Variables
  const [promotions, setPromotions] = useState(null)
  const [searchResult, setSearchResult] = useState(promotionArray)
  const [isRefreshing, setIsRefreshing] = useState(false)

  // Set the current user's promotion data
  useEffect(() => {
    const setPromotionData = async () => {
      const promotionData = await usePromotions(token)
      setPromotions(null)

      if (promotionData) {
        setPromotions(promotionData)
      }
    }

    setPromotionData()
  }, [promotionArray])

  // Change Promotion list when search is active
  useEffect(() => {
    setPromotions(null)
    setPromotions([...searchResult])
  }, [searchResult])

  // Flat list
  const renderItem = ({ item }) => {
    return <EachPromotion item={item} navigation={navigation} />
  }

  // Pull to refresh
  const onRefresh = async () => {
    setIsRefreshing(true)

    setTimeout(() => {
      setPromotionData()
    }, 200)

    setIsRefreshing(false)
  }

  return (
    <MainContainer
      style={{
        flex: 1,
        marginTop: Constant.statusBarHeight,
      }}
    >
      {/* Body */}
      <Header />
      <View style={{ flex: 1, padding: 10 }}>
        <Top>
          <Search
            promotionArray={promotionArray}
            setSearchResult={setSearchResult}
          />
        </Top>
        {promotions ? (
          promotions.length !== 0 ? (
            <Bottom
              data={promotions}
              keyExtractor={(item) => item._id}
              renderItem={renderItem}
              onRefresh={onRefresh}
              refreshing={isRefreshing}
            />
          ) : (
            <NotFound title={'행사'} />
          )
        ) : (
          <DataLoading />
        )}
      </View>
      {/* Promotion Creation Button */}
      <PlusBtn onPress={() => navigation.navigate('행사등록')}>
        <AntDesign name='plus' size={24} color='white' />
      </PlusBtn>
    </MainContainer>
  )
}

export default Main
