import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CommonSignUpScreen from '@screens/CommonSignUpScreen';
import LoginScreen from '@screens/LoginScreen';
import LoginScreen2 from '@screens/LoginScreen2';
import React, { useState } from 'react';
import HomeTabRoutes from 'routes/HomeTabRoutes';

import { UserInfo } from './context/UserInfoContext';

const Stack = createNativeStackNavigator();

//라우팅관련된 것은 다 app.js에서 (최상위 라우팅은 여기서)
export default function App() {
  const [userType, setUserType] = useState('');

  return (
    //useContext로 로그인유저 정보(사장님, 고객)
    <UserInfo.Provider value={{ userType, setUserType }}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="login">
          <Stack.Screen
            name={'login'}
            component={LoginScreen}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name={'loginScreen2'}
            component={LoginScreen2}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name={'commonSignUpScreen'}
            component={CommonSignUpScreen}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name={'home-tab'}
            component={HomeTabRoutes}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </UserInfo.Provider>
  );
}
