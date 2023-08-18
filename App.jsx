import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { React, useState } from 'react';
import HomeTabRoutes from 'routes/HomeTabRoutes';

import HeaderWithBackButton from '@components/commom/HeaderWithBackButton';
import AlarmScreen from '@screens/AlarmScreen';
import AuthRoutes from 'routes/AuthRoutes';
import { UserInfo } from 'context/UserInfoContext';
const Stack = createNativeStackNavigator();

//라우팅관련된 것은 다 app.js에서 (최상위 라우팅은 여기서)
export default function App() {
  const [userType, setUserType] = useState('');

  return (
    <UserInfo.Provider value={{ userType, setUserType }}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="home-tab">
          <Stack.Screen name="auth" component={AuthRoutes} options={{ headerShown: false }} />

          <Stack.Screen
            name={'home-tab'}
            component={HomeTabRoutes}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name={'alarm'}
            component={AlarmScreen}
            options={{
              title: '',
              headerBackVisible: false,
              headerLeft: () => <HeaderWithBackButton title={'알림'} />,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </UserInfo.Provider>
  );
}
