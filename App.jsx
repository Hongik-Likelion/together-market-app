import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CommonSignUpScreen from '@screens/CommonSignUpScreen';
import LoginScreen from '@screens/LoginScreen';
/** JSX 문법을 사용한다면 React를 꼭 import 해줍시다. */
import React from 'react';
import HomeTabRoutes from 'routes/HomeTabRoutes';

const Stack = createNativeStackNavigator();

//라우팅관련된 것은 다 app.js에서 (최상위 라우팅은 여기서)
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="home-tab">
        <Stack.Screen
          name={'login'}
          component={LoginScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name={'commonSignUp'}
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
  );
}
