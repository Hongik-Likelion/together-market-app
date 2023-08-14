import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import HomeScreen from '@screens/HomeScreen';
import HomeDetailScreen from '@screens/HomeDetailScreen';

const Stack = createNativeStackNavigator();
import { SharedStateProvider } from 'context/FavAndLikeContext';

function HomeScreenNavigator() {
  return (
    <SharedStateProvider>
      <Stack.Navigator initialRouteName={'home'} screenOptions={{ headerShown: false }}>
        {/*기본적으로 홈탭 눌렀을 때*/}
        <Stack.Screen name={'home-list'} component={HomeScreen} />
        {/*게시물 눌렀을 떄 더 자세하게 게시물 보여줌*/}
        <Stack.Screen name={'home-detail'} component={HomeDetailScreen} />
      </Stack.Navigator>
    </SharedStateProvider>
  );
}

export default HomeScreenNavigator;
