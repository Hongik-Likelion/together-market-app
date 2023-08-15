import TabHeaderRight from '@components/commom/TabHeaderRight';
import MarketSelector from '@components/home/MarketSelector';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { COLORS } from 'colors';
import React from 'react';
import { RFValue } from 'react-native-responsive-fontsize';
import Ionicons from 'react-native-vector-icons/Ionicons';

import ChatScreen from './chat/ChatScreen';
import HomeScreenNavigator from './home/HomeScreenNavigator';
import HeaderWithBackButton from '@components/commom/HeaderWithBackButton';
const Tab = createBottomTabNavigator();

/**
 * 홈, 채팅, 시장정보, 프로필에 대한 라우팅 설정을 하는 컴포넌트 입니다.
 * <Tab.Sceen/>의 name, component props를 통해 각 탭의 이름과 랜더링될 화면을 설정합니다.
 * @returns 각 탭에 따라서 랜더링될 화면
 */
function HomeTabRoutes() {
  return (
    <Tab.Navigator initialRouteName="chat">
      <Tab.Screen
        name="home"
        component={HomeScreenNavigator}
        options={{
          headerTitle: '',
          headerTintColor: COLORS.white,
          headerLeft: () => <MarketSelector/>,
          // headerLeft: () => {
          //   console.log(route.name);
          //   if (route.name === 'home-list') {
          //     return <MarketSelector/>
          //   } else if (route.name === 'home-detail' || route.name ==='market-select') {
          //     return <HeaderWithBackButton title={'망원시장'}/>;
          //   }
          // },
          headerRight: () => <TabHeaderRight />,
          tabBarLabel: '홈',
          tabBarActiveTintColor: COLORS.main,
          tabBarInactiveTintColor: COLORS.black,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Ionicons name={'home-sharp'} size={RFValue(20)} color={COLORS.main} />
            ) : (
              <Ionicons name={'home-outline'} size={RFValue(20)} />
            ),
        }}
      />

      <Tab.Screen
        name="chat"
        component={ChatScreen}
        options={{
          title: '채팅',
          headerTitleAlign: 'left',
          headerRight: () => <TabHeaderRight />,
          tabBarActiveTintColor: COLORS.main,
          tabBarHideOnKeyboard: true,
          tabBarInactiveTintColor: COLORS.black,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Ionicons name="chatbubble-ellipses" size={RFValue(22)} color={COLORS.main} />
            ) : (
              <Ionicons name={'chatbubble-ellipses-outline'} size={RFValue(20)} />
            ),
        }}
      />
    </Tab.Navigator>
  );
}

export default HomeTabRoutes;
