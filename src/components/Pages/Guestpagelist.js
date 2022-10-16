import React from 'react'
import styled from 'styled-components';
import Header from '../includes/Header';
import Guestlist from '../screens/Guestlist';

function Guestpagelist() {
  return (
    <>
        <Container>
            <Header />
            <Container2>
                <Guestlist />
            </Container2>
        </Container>
    </>
  )
}

export default Guestpagelist

const Container =styled.section`
    display: flex;
    justify-content: start;
    flex-wrap: wrap;
`;
const Container2 =styled.section`
    width: 70%;
    margin: 0 auto;
`;