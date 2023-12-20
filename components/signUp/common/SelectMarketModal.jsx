import { useFetchData } from '@hooks/fetch';
import { fetchMarkets } from 'api/market';
import { Auth } from 'context/AuthContext';
import PropTypes from 'prop-types';
import React, { useContext, useState } from 'react';
import { Modal, Platform, StatusBar } from 'react-native';
import { KeyboardAwareFlatList } from 'react-native-keyboard-aware-scroll-view';
import { RFValue } from 'react-native-responsive-fontsize';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import { styled } from 'styled-components/native';
import { COLORS } from '../../../colors';

SelectMarketModal.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func,
  onSelect: PropTypes.func,
};

function SelectMarketModal({ open, onClose, onSelect }) {
  const {
    shop: [shopRequest, setShopRequest],
  } = useContext(Auth);

  const [marketInput, setMarketInput] = useState('');
  const [marketId, setMarketId] = useState(-1);
  const [isLoading, isError, markets] = useFetchData(fetchMarkets);

  if (isLoading) return null;

  if (isError) return null;

  const filtered = markets && markets.filter((market) => market.market_name.includes(marketInput));

  return (
    <Modal visible={open} animationType="slide">
      <Container>
        <Header>
          <BackButton name="arrow-left" size={20} onPress={onClose} />
          <Title>시장 위치 설정</Title>
          <CompleteButton
            onPress={() => {
              setShopRequest((prev) => ({ ...prev, market_id: marketId }));
              onSelect(marketInput);
              onClose();
            }}
          >
            <ButtonLabel>완료</ButtonLabel>
          </CompleteButton>
        </Header>
        <InputGroup>
          <InputContainer>
            <Input value={marketInput} onChangeText={setMarketInput} />
            <Feather name={'search'} size={25} color={COLORS.main} />
          </InputContainer>
        </InputGroup>
        <ContentContainer
          data={filtered}
          keyExtractor={(item) => item.market_id}
          renderItem={({ item }) => (
            <MarketItemContainer
              onPress={() => {
                setMarketId(item.market_id);
                setMarketInput(item.market_name);
              }}
            >
              <FontAwesome5 name={'map-marker-alt'} size={20} color={COLORS.gray01} />
              <MarketName>{item.market_name}</MarketName>
              <StreetAddress numberOfLines={1}>
                {item.market_address.split(' ')[0]} {item.market_address.split(' ')[1]}
              </StreetAddress>
              <Feather name={'arrow-up-left'} size={20} color={COLORS.gray01} />
            </MarketItemContainer>
          )}
        />
      </Container>
    </Modal>
  );
}

const Container = styled.SafeAreaView`
  padding-top: ${Platform.OS === 'android' ? StatusBar.currentHeight : 0};
  background-color: ${COLORS.white};
  flex: 1;
`;

const Header = styled.View`
  flex-direction: row;
  align-items: center;

  height: ${hp(8)}px;

  padding-horizontal: ${RFValue(10)}px;
  border-bottom-width: 1px;
  border-bottom-color: ${COLORS.gray01};
`;

const BackButton = styled(SimpleLineIcons)`
  margin-right: ${RFValue(4)}px;
`;

const CompleteButton = styled.TouchableOpacity`
  margin-left: auto;
  justify-content: center;
  align-items: center;

  border: 1px solid ${COLORS.main};
  border-radius: 4px;

  padding: ${RFValue(6)}px ${RFValue(16)}px;
`;

const ButtonLabel = styled.Text`
  font-size: ${RFValue(14)}px;
  color: ${COLORS.main};
`;

const Title = styled.Text`
  font-size: ${RFValue(16)}px;
  font-weight: 600;
`;

const InputGroup = styled.View`
  height: ${hp(10)}px;

  align-items: center;
  justify-content: center;
`;

const InputContainer = styled.View`
  flex-direction: row;
  background-color: ${COLORS.gray02};
  border-radius: 8px;

  justify-content: space-between;
  align-items: center;
  width: ${wp(90.4)}px;
  height: ${hp(6.28)}px;
  padding: ${RFValue(10)}px;
`;

const Input = styled.TextInput`
  width: 90%;
  font-size: ${RFValue(16)}px;
  font-weight: bold;
`;

const MarketItemContainer = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;

  padding: ${RFValue(8)}px ${RFValue(12)}px;
`;

const MarketName = styled.Text`
  font-size: ${RFValue(14)}px;
  font-weight: 600;

  margin-left: ${RFValue(8)}px;
  margin-right: auto;
`;

const StreetAddress = styled.Text`
  color: ${COLORS.gray01};
  font-size: ${RFValue(12)}px;
  font-weight: 600;
  margin-left: auto;
  margin-right: ${RFValue(4)}px;
`;

const ContentContainer = styled(KeyboardAwareFlatList)``;

export default SelectMarketModal;
