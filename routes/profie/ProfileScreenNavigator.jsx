import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OwnerProfileScreen from '@screens/profile/OwnerProfileScreen';
import OwnerProfileSettingScreen from '@screens/profile/OwnerProfileSettingScreen';
import UserProfileScreen from '@screens/profile/UserProfileScreen';
import UserProfileSettingScreen from '@screens/profile/UserProfileSettingScreen';
import { SharedStateProvider } from 'context/FavAndLikeContext';
import React from 'react';

const Stack = createNativeStackNavigator();

function ProfileScreenNavigator() {
  const userType = 1; //이거 나중에 로그인까지 진행하면 빼야함!!!!!!!!

  return (
    <SharedStateProvider>
      <Stack.Navigator initialRouteName={'profile'} screenOptions={{ headerShown: false }}>
        {userType === 1 ? (
          // 사장님인 경우
          <>
            <Stack.Screen name={'profile-screen'} component={OwnerProfileScreen} />
            <Stack.Screen name={'owner-profile-setting'} component={OwnerProfileSettingScreen} />
          </>
        ) : (
          // 일반 사용자인 경우
          <>
            <Stack.Screen name={'profile-screen'} component={UserProfileScreen} />
            <Stack.Screen name={'user-profile-setting'} component={UserProfileSettingScreen} />
          </>
        )}
      </Stack.Navigator>
    </SharedStateProvider>
  );
}

export default ProfileScreenNavigator;
