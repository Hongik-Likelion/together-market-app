import React from 'react';
import { styled } from 'styled-components/native';
import Feather from 'react-native-vector-icons/Feather';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import { COLORS } from 'colors';
import Constants from 'expo-constants';
import { RFValue } from 'react-native-responsive-fontsize';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';

function Header() {

    return (
        <Container>
            <LeftGroup>
                <MarketName>망원 시장</MarketName>
                <Feather name={'chevron-down'} size={RFValue(15)}/>
            </LeftGroup>
            <RightGroup>
                <SimpleLineIcons name={'bell'} size={RFValue(16)} color={COLORS.main}/>
                <Feather name={'search'} size={RFValue(16)} color={COLORS.main} />
            </RightGroup>
        </Container>
    );
}

const Container = styled.View`
    height: 14%;
    flex-direction: row;
    padding-top: ${Constants.statusBarHeight};
    justify-content: space-between;

`;

const MarketName = styled.Text`
    font-size: ${RFValue(18)}px;
    font-weight: 700;
`;

const LeftGroup = styled.View`
    flex-direction: row;
    justify-content: space-between;

    margin-left: ${wp(6)}px;
    width: ${wp(25)}px;

    align-items: center;
`;

const RightGroup = styled.View`
    flex-direction: row;

    margin-right: ${wp(6)}px;
    justify-content: space-between;
    align-items: center;
    width: ${wp(13)}px;
`;

export default Header;