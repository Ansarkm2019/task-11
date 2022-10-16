import React from 'react'
import styled from 'styled-components'
import Header from '../includes/Header'
import Middle from './Middle'
import {Helmet} from "react-helmet";


function Vorgez() {
  return (
    <>
        <Helmet>
            <title>Vorgez</title>
        </Helmet>
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