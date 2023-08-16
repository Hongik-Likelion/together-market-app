import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import HomeScreen from '@screens/home/HomeScreen';
import HomeDetailScreen from '@screens/home/HomeDetailScreen';

import { SharedStateProvider } from 'context/FavAndLikeContext';
import MarketSelectScreen from '@screens/home/MarketSelectScreen';
import OwnerPostingScreen from '@screens/posting/OwnerPostingScreen';
import UserPostingScreen from '@screens/posting/UserPostingScreen';
import { CommonPostingProvider } from 'context/CommonPostingContext';

const Stack = createNativeStackNavigator();

function HomeScreenNavigator() {
  return (
    <SharedStateProvider>
      <CommonPostingProvider>
      <Stack.Navigator initialRouteName={'home'} screenOptions={{ headerShown: false }}>
        {/*기본적으로 홈탭 눌렀을 때*/}
        <Stack.Screen name={'home-list'} component={HomeScreen}/>
        {/*게시물 눌렀을 떄 더 자세하게 게시물 보여줌*/}
        <Stack.Screen name={'home-detail'} component={HomeDetailScreen} />
        {/*상단탭에서 시장 선택할 수 있음*/}
        <Stack.Screen name={'market-select'} component={MarketSelectScreen}/>

        <Stack.Screen name={'owner-posting'} component={OwnerPostingScreen} />
        <Stack.Screen name={'user-posting'} component={UserPostingScreen} />
      </Stack.Navigator>
      </CommonPostingProvider>
    </SharedStateProvider>
  );
}

export default HomeScreenNavigator;
