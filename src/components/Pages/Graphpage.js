import React from 'react'
import styled from 'styled-components';
import Header from '../includes/Header';
import Grapht from '../screens/Grapht';

function Graphpage() {
  return (
    <>
        <Container>
            <Header />
            <Container2>
                <Grapht />
            </Container2>
        </Container>
    </>
  )
}

export default Graphpage

const Container =styled.section`
    display: flex;
    justify-content: start;
    flex-wrap: wrap;
`;
const Container2 =styled.section`
    width: 70%;
    margin: 0 auto;
`;
