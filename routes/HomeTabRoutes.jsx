import TabHeaderRight from '@components/commom/TabHeaderRight';
import MarketSelector from '@components/home/MarketSelector';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ChatListScreen from '@screens/ChatListScreen';
import HomeScreen from '@screens/HomeScreen';
import { COLORS } from 'colors';
import React from 'react';
import { RFValue } from 'react-native-responsive-fontsize';
import Ionicons from 'react-native-vector-icons/Ionicons';
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
        name={'home'}
        component={HomeScreen}
        options={{
          headerTitle: '',
          headerTintColor: COLORS.white,
          headerLeft: () => <MarketSelector />,
          headerRight: () => <TabHeaderRight />,
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
        component={ChatListScreen}
        options={{
          title: '채팅',
          headerTitleAlign: 'left',
          headerRight: () => <TabHeaderRight />,
          tabBarActiveTintColor: COLORS.main,
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
