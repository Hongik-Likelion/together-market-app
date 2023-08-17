import { COLORS } from 'colors';
import React from 'react';
import { RFValue } from 'react-native-responsive-fontsize';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { styled } from 'styled-components/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';

function FavMarkListItem({ myFavMarket }) {
  return (
    <Container>
      {/* <Photo
        source={{
          uri: myFavMarket,
        }}
      /> */}
      <Info>
        <Firstline>
          <ShopName>{myFavMarket.shop_name}</ShopName>
          {/* <MarketName>{myFavMarket.market_name}</MarketName> */}
          <Heart>
            <AntDesign name={'heart'} size={RFValue(20)} color={COLORS.red} />
          </Heart>
        </Firstline>
        <Secondline>
          <RateTxt>평균 별점</RateTxt>
          <FontAwesome
            name={'star'}
            size={RFValue(11)}
            color={COLORS.main}
            style={{ marginBottom: 2, marginRight: 4 }}
          />
          <Rating>{myFavMarket.rating}</Rating>
        </Secondline>
        <Thirdline>
          <AddressTxt>주소</AddressTxt>
          <Address>{myFavMarket.shop_address}</Address>
        </Thirdline>
        <Fourthline>
          <TimeTxt>영업시간</TimeTxt>
          <Time>
            {myFavMarket.opening_frequency} {myFavMarket.opening_time}~{myFavMarket.closing_time}
          </Time>
        </Fourthline>
      </Info>
    </Container>
  );
}

const Container = styled.TouchableOpacity`
  height: ${hp(17)}px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding: ${RFValue(8)}px;
  border-bottom-width: 1px;
  border-bottom-color: ${COLORS.lightgray};
`;

// const Photo = styled.Image`
//   margin-right: ${wp(2)}px;
//   width: ${RFValue(90)}px;
//   height: ${RFValue(90)}px;
// `;

const Info = styled.View`
  flex: 1;
  margin-top: ${hp(1)}px;
`;

const Firstline = styled.View`
  flex-direction: row;
  margin-bottom: ${hp(1.5)}px;
  align-items: center;
`;

const ShopName = styled.Text`
  font-weight: bold;
  font-size: ${RFValue(15)}px;
  margin-right: ${wp(3)}px;
  margin-top: ${hp(-0.2)}px;
`;

// const MarketName = styled.Text`
//   font-size: ${RFValue(10)}px;
//   font-weight: bold;
//   margin-right: ${wp(3)}px;
//   margin-top: ${hp(-0.2)}px;
//   color: ${COLORS.darkgray};
// `;

const Heart = styled.View`
  position: absolute;
  right: 0;
  margin-right: ${wp(3)}px;
`;

const Secondline = styled.View`
  flex-direction: row;
  margin-bottom: ${hp(1.5)}px;
  align-items: center;
`;

const RateTxt = styled.Text`
  font-weight: bold;
  font-size: ${RFValue(11)}px;
  color: ${COLORS.darkgray};
  margin-right: ${wp(3)}px;
  margin-top: ${hp(-0.2)}px;
`;

const Rating = styled.Text`
  font-weight: bold;
  font-size: ${RFValue(11)}px;
  color: ${COLORS.main};
  margin-right: ${wp(3)}px;
  margin-top: ${hp(-0.2)}px;
`;

const Thirdline = styled.View`
  flex-direction: row;

  margin-bottom: ${hp(1)}px;
  align-items: center;
`;

const AddressTxt = styled.Text`
  font-weight: bold;
  font-size: ${RFValue(12)}px;
  color: ${COLORS.darkgray};
  margin-right: ${wp(3)}px;
  margin-top: ${hp(-0.2)}px;
`;

const Address = styled.Text`
  font-size: ${RFValue(12)}px;
  color: ${COLORS.darkgray};
  margin-right: ${wp(3)}px;
  margin-top: ${hp(-0.2)}px;
`;

const Fourthline = styled.View`
  flex-direction: row;

  margin-bottom: ${hp(1)}px;
  align-items: center;
`;

const TimeTxt = styled.Text`
  font-weight: bold;
  font-size: ${RFValue(12)}px;
  color: ${COLORS.darkgray};
  margin-right: ${wp(3)}px;
  margin-top: ${hp(-0.2)}px;
`;

const Time = styled.Text`
  font-size: ${RFValue(12)}px;
  color: ${COLORS.darkgray};
  margin-right: ${wp(3)}px;
  margin-top: ${hp(-0.2)}px;
`;

export default FavMarkListItem;
