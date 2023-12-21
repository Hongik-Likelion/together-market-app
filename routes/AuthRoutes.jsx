import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen1 from '@screens/login/LoginScreen1';
import LoginScreen2 from '@screens/login/LoginScreen2';
import CommonSignUpScreen from '@screens/signup/common/CommonSignUpScreen';
import GuideSignUpScreen from '@screens/signup/common/GuideSignUpScreen';
import OwnerSignUpFoodScreen from '@screens/signup/owner/OwnerSignUpFoodScreen';
import OwnerSignUpScreen from '@screens/signup/owner/OwnerSignUpScreen';
import OwnerSignUpSpecificScreen from '@screens/signup/owner/OwnerSignUpSpecificScreen';
import UserSignUpScreen from '@screens/signup/user/UserSignUpScreen';
import { Auth } from 'context/AuthContext';
import React, { useState } from 'react';

const Stack = createNativeStackNavigator();

function AuthRoutes() {
  const [signUpRequest, setSignUpRequest] = useState({
    email: '',
    nickname: '',
    profile: '',
    is_owner: false,
  });

  const [shopRequest, setShopRequest] = useState({
    market_id: -1,
    shop_name: '',
    shop_address: '',
    selling_products: '',
    opening_time: '',
    closing_time: '',
    opening_frequency: '',
    product_categories: [],
  });

  const [favouriteMarketRequest, setFavouriteMarketRequest] = useState(-1);

  return (
    <Auth.Provider
      value={{
        user: [signUpRequest, setSignUpRequest],
        shop: [shopRequest, setShopRequest],
        market: [favouriteMarketRequest, setFavouriteMarketRequest],
      }}
    >
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
      </Stack.Navigator>
    </Auth.Provider>
  );
}

export default AuthRoutes;
