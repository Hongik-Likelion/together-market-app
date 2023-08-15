import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useContext } from 'react';
import { UserInfo } from 'context/UserInfoContext';
import OwnerProfileScreen from '@screens/profile/OwnerProfileScreen';
import UserProfileScreen from '@screens/profile/UserProfileScreen';
import OwnerProfileSettingScreen from '@screens/profile/OwnerProfileSettingScreen';
import UserProfileSettingScreen from '@screens/profile/UserProfileSettingScreen';
import { SharedStateProvider } from 'context/FavAndLikeContext';

const Stack = createNativeStackNavigator();

function ProfileScreenNavigator() {
  const { userType } = useContext(UserInfo);

  return (
    <SharedStateProvider>
      <Stack.Navigator initialRouteName={'profile'} screenOptions={{ headerShown: false }}>
        {userType === 1 ? (
          // 사장님인 경우
          <>
            <Stack.Screen name={'profile-screen'} component={OwnerProfileScreen} />
            <Stack.Screen name={'profile-setting'} component={OwnerProfileSettingScreen} />
          </>
        ) : (
          // 일반 사용자인 경우
          <>
            <Stack.Screen name={'profile-screen'} component={UserProfileScreen} />
            <Stack.Screen name={'profile-setting'} component={UserProfileSettingScreen} />
          </>
        )}
      </Stack.Navigator>
    </SharedStateProvider>
  );
}

export default ProfileScreenNavigator;
