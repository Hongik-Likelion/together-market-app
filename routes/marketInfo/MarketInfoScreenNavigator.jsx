import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import MarketSelector from '@components/home/MarketSelector';
import TabHeaderRight from '@components/commom/TabHeaderRight';
import HeaderWithBackButton from '@components/commom/HeaderWithBackButton';
import MarketInfoScreen from '@screens/marketInfo/MarketInfoScreen';
import MarketInfoDetailScreen from '@screens/marketInfo/MarketInfoDetailScreen';

const Stack = createNativeStackNavigator();

function MarketInfoScreenNavigator() {
  return (
      <Stack.Navigator initialRouteName={'marketInfo'}>

        {/*기본적으로 시장정보 탭 눌렀을 때*/}
        <Stack.Screen name={'marketInfo-list'} component={MarketInfoScreen}
          options={{
            headerTitle: ''
          }}
        />

        {/*시장정보 게시물 눌렀을 떄 더 자세하게 게시물 보여줌*/}
        <Stack.Screen name={'marketInfo-detail'} component={MarketInfoDetailScreen}
          options={{
            headerTitle: '',
            headerLeft: () => <HeaderWithBackButton title={'시장 정보 알아보기'}/>,
          }}
        />

      </Stack.Navigator>
  );
}

export default MarketInfoScreenNavigator;