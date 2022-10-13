import React from 'react'
import styled from 'styled-components'

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
                            <Fimg src={require("../../assets/images/white_icon.svg").default} />
                        </Fspan>
                        <Femaleh4>Male Guest</Femaleh4>
                    </FemaleGuest>
                    <CountBox>
                        <Lcount>
                            <Tname>Total invites</Tname>
                            <TotalInvitF>8,124</TotalInvitF>
                        </Lcount>
                        <Rcount>
                            <Tname>Total Come</Tname>
                            <TotalComeF>4,204</TotalComeF>
                        </Rcount>
                    </CountBox>
                </FemaleGuestBox>


                <Traffic>
                    <TrafficH4>Visitor traffic</TrafficH4>
                    <TrafficImg />
                </Traffic>
            </TopCantainer>
        </Spotlight>
    </>
  )
}

export default Middle;

const Spotlight = styled.section`
    background-color: #F9F8F8;
    padding: 40px;
    width: 82%;
    margin-top: 10px;

`;


const TopCantainer = styled.section`
    display: flex;
    justify-content: space-between; 
`;
const MaleGuestBox = styled.section`
    width: 25%;
    background-color: #A5E3E3;
    padding: 30px;
    border-radius: 20px;
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
    font-size: 20px;
    color: #000;
    font-weight: bold;`
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
const Tname = styled.p``;
const TotalInvitM = styled.h5`
    font-size: 15px;
    color: #000;
    font-weight: bold;
`;
const Rcount = styled.div`
    width: 40%;
`;
const TotalComeM = styled.h5`
    font-size: 15px;
    color: #000;
    font-weight: bold;
`;





const FemaleGuestBox = styled.section`
    width: 25%;
    background-color: #D2A2F7;
    padding: 30px;
    border-radius: 20px;
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
    font-size: 20px;
    color: #000;
    font-weight: bold;`
;


const TotalInvitF = styled.h5`
    font-size: 15px;
    color: #000;
    font-weight: bold;
`;

const TotalComeF = styled.h5`
    font-size: 15px;
    color: #000;
    font-weight: bold;
`;






const Traffic = styled.section`
    width: 20%;   
`;
const TrafficH4 = styled.h4``;
const TrafficImg = styled.img``;



