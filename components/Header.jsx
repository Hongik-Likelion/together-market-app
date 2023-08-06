import React from 'react';
import { styled } from 'styled-components/native';
import Feather from 'react-native-vector-icons/Feather';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import { COLORS } from 'colors';
import Constants from 'expo-constants';


function Header() {

    return (
        <Container>
            <MarketName>망원 시장</MarketName>
            <Icon>
                <SimpleLineIcons name={'bell'} size={20} color={COLORS.main}/>
                <Feather name={'search'} size={20} color={COLORS.main} />
            </Icon>
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
    font-size: 23px;
    font-weight: 700;
    margin-top: 26px;
    margin-left: 20px;
`;

const Icon = styled.View`
    flex-direction: row;
    margin-top: 26px;
    margin-right: 20px;
`;

export default Header;