import React from 'react'
import styled from 'styled-components'
import Grapht from './Grapht';
import Guestlist from './Guestlist';

function Middle() {
  return (
    <>
        <Spotlight>
            <TopCantainer>
                <MaleGuestBox>
                    <MaleGuest>
                        <Mspan>
                            <Mimg src={require("../../assets/images/white_icon.svg").default} />
                        </Mspan>
                        <Maleh4>Male Guest</Maleh4>
                    </MaleGuest>
                    <CountBox>
                        <Lcount>
                            <Tname>Total invites</Tname>
                            <TotalInvitM>8,124</TotalInvitM>
                        </Lcount>
                        <Rcount>
                            <Tname>Total Come</Tname>
                            <TotalComeM>4,204</TotalComeM>
                        </Rcount>
                    </CountBox>
                </MaleGuestBox>


                <FemaleGuestBox>
                    <FemaleGuest>
                        <Fspan>
                            <Fimg src={require("../../assets/images/white_icon2.svg").default} />
                        </Fspan>
                        <Femaleh4>Female Guest</Femaleh4>
                    </FemaleGuest>
                    <CountBox>
                        <Lcount>
                            <Tname>Total invites</Tname>
                            <TotalInvitF>9,620</TotalInvitF>
                        </Lcount>
                        <Rcount>
                            <Tname>Total Come</Tname>
                            <TotalComeF>6,125</TotalComeF>
                        </Rcount>
                    </CountBox>
                </FemaleGuestBox>


                <Traffic>
                    <TrafficH4>Visitor traffic</TrafficH4>
                    <TrafficImgBox>
                        <TrafficImg src={require("../../assets/images/Group3465418.svg").default} />
                    </TrafficImgBox>
                </Traffic>
            </TopCantainer>


            <More>
                <MoreRight>
                    <Mh6>Recently Guest</Mh6>
                    <A href="" >See more</A>
                </MoreRight>
                <MoreLeft>
                    <Mh6>Guest Traffic</Mh6>
                    <A href="" >See more</A>
                </MoreLeft>
            </More>

            <Container2>
                <Guestlist />
                <Grapht />
            </Container2>

        </Spotlight>
    </>
  )
}

export default Middle;

const Spotlight = styled.section`
    background-color: #F9F8F8;
    padding: 30px;
    width: 82%;
    margin-top: 10px;
    @media all and (max-width: 1080px){
        width: 80%;
    }
    @media all and (max-width: 980px){
        width: 75%;
    }
`;


const TopCantainer = styled.section`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
`;
const MaleGuestBox = styled.section`
    width: 65%;
    background-color: #A5E3E3;
    padding: 20px;
    border-radius: 20px;
    @media all and (max-width: 1080px){
        margin-bottom: 20px;
    }
`;
const MaleGuest = styled.section`
    display: flex;
    align-items: center;
`;
const Mspan = styled.span`
    background-color: #000;
    padding: 15px;
    display: inline-block;
    border-radius: 30px;
    margin-right: 20px;

`;
const Mimg = styled.img``;
const Maleh4 = styled.h4`
    font-size: 30px;
    color: #000;
    font-weight: 500;`
;
const CountBox = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 15px;
    
`;
const Lcount = styled.div`
    width: 50%;
    border-right: 1px solid #000;
`;
const Tname = styled.p`
    font-size: 20px;
`;
const TotalInvitM = styled.h5`
    font-size: 35px;
    color: #000;
    font-weight: bold;
`;
const Rcount = styled.div`
    width: 40%;
`;
const TotalComeM = styled.h5`
    font-size: 35px;
    color: #000;
    font-weight: bold;
`;


const FemaleGuestBox = styled.section`
    width: 65%;
    background-color: #D2A2F7;
    padding: 20px;
    border-radius: 20px;
    @media all and (max-width: 1080px){
        margin-bottom: 20px;
    }
`;
const FemaleGuest = styled.section`
    display: flex;
    align-items: center;
`;
const Fspan = styled.span`
    background-color: #000;
    padding: 15px;
    display: inline-block;
    border-radius: 30px;
    margin-right: 20px;

`;
const Fimg = styled.img``;
const Femaleh4 = styled.h4`
    font-size: 30px;
    color: #000;
    font-weight: 500;
`;


const TotalInvitF = styled.h5`
    font-size: 35px;
    color: #000;
    font-weight: bold;
`;

const TotalComeF = styled.h5`
    font-size: 35px;
    color: #000;
    font-weight: bold;
`;



const Traffic = styled.section`
    background-color: #fff;
    width: 35%;
    border-radius: 20px;
`;
const TrafficH4 = styled.h4`
    font-size: 20px;
    color: #000;
    font-weight: bold;
    text-align: center;
    position: relative;
    top: 25px;
`;
const TrafficImgBox = styled.div``;
const TrafficImg = styled.img`
    display: block;
    width: 100%;
`;


const More = styled.section`
    display: flex;
    justify-content: space-between;
    margin-top: 25px;
    @media all and (max-width: 1080px){
        margin-top: 40px;
    }
`;
const MoreRight = styled.div`
    width: 35%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media all and (max-width: 1080px){
        width: 40%;
    }
`;
const MoreLeft = styled.div`
    width: 57%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media all and (max-width: 1080px){
        display: none;
    }
`;
const Mh6 = styled.h6`
    font-size: 20px;
    color: #000;
    font-weight: 500;
    @media all and (max-width: 1080px){
        font-style: 25px;
        font-weight: bold;
    }
`;
const A = styled.a`
    font-weight: 500;
    font-size: 15px;
    color: #8D8989;
	@media all and (max-width: 1080px){
        display: none;
    }
`;


const Container2 =styled.section`
    display: flex;
    justify-content: space-between;
    @media all and (max-width: 1080px){
        flex-direction: column;
    }
`;