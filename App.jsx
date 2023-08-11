import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen1 from '@screens/login/LoginScreen1';
import LoginScreen2 from '@screens/login/LoginScreen2';
import CommonSignUpScreen from '@screens/signup/common/CommonSignUpScreen';
import GuideSignUpScreen from '@screens/signup/common/GuideSignUpScreen';
import OwnerSignUpScreen from '@screens/signup/owner/OwnerSignUpScreen';
import UserSignUpScreen from '@screens/signup/user/UserSignUpScreen';
import OwnerSignUpFoodScreen from '@screens/signup/owner/OwnerSignUpFoodScreen';
import OwnerSignUpSpecificScreen from '@screens/signup/owner/OwnerSignUpSpecificScreen';
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
        <Stack.Navigator initialRouteName="loginScreen1">
          <Stack.Screen
            name={'loginScreen1'}
            component={LoginScreen1}
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
            name={'ownerSignUpScreen'}
            component={OwnerSignUpScreen}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name={'ownerSignUpFoodScreen'}
            component={OwnerSignUpFoodScreen}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name={'ownerSignUpSpecificScreen'}
            component={OwnerSignUpSpecificScreen}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name={'userSignUpScreen'}
            component={UserSignUpScreen}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name={'guideSignUpScreen'}
            component={GuideSignUpScreen}
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
