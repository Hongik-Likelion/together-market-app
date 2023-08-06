import { OwnerSelect, CustomerSelect } from '@assets/CommonSignUpScreen/Icon';
import React from 'react';
import { View, Text } from 'react-native'; // Text 컴포넌트를 import

function CommonSignUpScreen() {
  return (
    <View>
      <Text>
        <OwnerSelect width={200} height={200} /> {/* 수정: 적절한 너비와 높이를 지정해주세요 */}
      </Text>
      <Text>
        <CustomerSelect width={200} height={200} /> {/* 수정: 적절한 너비와 높이를 지정해주세요 */}
      </Text>
    </View>
  );
}

export default CommonSignUpScreen;
