import React from 'react'
import styled from 'styled-components'
import Header from '../includes/Header'
import Middle from './Middle'

function Vorgez() {
  return (
    <>
        <Main>
            <Header />
            <Middle />
        </Main>
        

    </>
  )
}

export default Vorgez

const Main = styled.section`
    display: flex;
    flex-wrap: wrap;
`;