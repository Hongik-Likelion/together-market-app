import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import HomeScreen from '@screens/home/HomeScreen';


import { SharedStateProvider } from 'context/FavAndLikeContext';
import MarketSelectScreen from '@screens/home/MarketSelectScreen';
import OwnerPostingScreen from '@screens/posting/OwnerPostingScreen';
import UserPostingScreen from '@screens/posting/UserPostingScreen';
import { CommonPostingProvider } from 'context/CommonPostingContext';
import MarketSelector from '@components/home/MarketSelector';
import TabHeaderRight from '@components/commom/TabHeaderRight';
import HeaderWithBackButton from '@components/commom/HeaderWithBackButton';
import HeaderWithDelete from '@components/posting/HeaderWithDelete';
import { ModalProvider } from 'context/MarketModalContext';

const Stack = createNativeStackNavigator();

function HomeScreenNavigator() {
  return (
    <ModalProvider>
    <SharedStateProvider>
      <CommonPostingProvider>
      <Stack.Navigator initialRouteName={'home'}>

        {/*기본적으로 홈탭 눌렀을 때*/}
        <Stack.Screen name={'home-list'} component={HomeScreen}
          options={{
            headerLeft: () => <MarketSelector/>,
            headerRight: () => <TabHeaderRight/>,
            headerTitle: ''
          }}
        />

        {/* 게시물 눌렀을 떄 더 자세하게 게시물 보여줌
        <Stack.Screen name={'home-detail'} component={HomeDetailScreen}
          options={{
            headerLeft: () => <HeaderWithBackButton title={'망원시장'}/>,
            headerTitle: ''
          }}
        /> */}

        {/*상단탭에서 시장 선택할 수 있음*/}
        <Stack.Screen name={'market-select'} component={MarketSelectScreen}
          options={{
            headerLeft: () => <HeaderWithBackButton title={'시장 위치 설정'}/>,
            headerTitle: ''
          }}
        />


        <Stack.Screen name={'owner-posting'} component={OwnerPostingScreen} 
          options={{
            headerLeft: () => <HeaderWithBackButton/>,
            headerTitle: '게시물 작성하기',
            headerRight: () => <HeaderWithDelete/>
            
          }}
        />
        <Stack.Screen name={'user-posting'} component={UserPostingScreen}
          options={{
            headerLeft: () => <HeaderWithBackButton/>,
            headerTitle: '게시물 작성하기',
            headerRight: () => <HeaderWithDelete/>
          }}
        />
      </Stack.Navigator>
      </CommonPostingProvider>
    </SharedStateProvider>
    </ModalProvider>
  );
}

export default HomeScreenNavigator;
