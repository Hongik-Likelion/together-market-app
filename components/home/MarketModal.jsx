import { useFetchData } from '@hooks/fetch';
import { fetchShop } from 'api/market';
import React from 'react';
import { FlatList } from 'react-native';
import { styled } from 'styled-components/native';
import MarketModalItem from './MarketModalItem';

function MarketModal({shop_id, modal, toggleModal}) {
    
    const [isLoading, isError, shop] = useFetchData(() => fetchShop(shop_id))
    
    if(isLoading) return null;
    if(isError) return null;

    if (shop !=null)
    // console.log("shop", shop);
    return (

        <Container>
            <MarketModalItem modal={modal} shop={shop} toggleModal={toggleModal}/>
            
        </Container>
       
    );
}
const Container = styled.View`
    
`;

export default MarketModal;