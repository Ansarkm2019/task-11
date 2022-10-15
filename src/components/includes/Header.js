import React from 'react'
import styled from 'styled-components';
import {Link} from "react-router-dom";

function Header() {
  return (
    <>
        <HeaderTag>
            <LogoContainer>
                <LogoA href="">
                    <LogoImg src={require("../../assets/images/logo.svg").default} />
                </LogoA>
            </LogoContainer>
            <TopCantainer>
                <TopUl>
                    <TopLi>
                        <TopA href="">Overview</TopA>
                    </TopLi>
                    <TopLi>
                        <TopA href="">Guestlist</TopA>
                    </TopLi>
                    <TopLi>
                        <TopA to="/graph">Temporary traffic</TopA>
                    </TopLi>
                </TopUl>
                <RightDiv>
                    <Span1>
                        <Span1img src={require("../../assets/images/bxs_bell.svg").default} />
                    </Span1>
                    <Span2>
                        <Span2img src={require("../../assets/images/rectangle_20695.jpg")} />
                    </Span2>
                </RightDiv>
            </TopCantainer>
        </HeaderTag>

        <SideContainer>
            <SideBox> 
                <MainMenu>MAIN MENU</MainMenu>
                <MenuUl>
                    <MenuLi>
                        <Micon>
                            <MenuImage src={require("../../assets/images/akar_icons_dashboard.svg").default} />
                        </Micon>
                        <MenuH6>Dashboard</MenuH6>
                    </MenuLi>
                    <MenuLi>
                        <Micon>
                            <MenuImage src={require("../../assets/images/fluent_food_cake_20_regular.svg").default} />
                        </Micon>
                        <MenuH6>Catering status</MenuH6>
                    </MenuLi>
                    <MenuLi>
                        <Micon>
                            <MenuImage src={require("../../assets/images/bx_bar_chart_square.svg").default} />
                        </Micon>
                        <MenuH6>Guest traffic</MenuH6>
                    </MenuLi>
                    <MenuLi>
                        <Micon>
                            <MenuImage src={require("../../assets/images/ant_design_gift_outlined.svg").default} />
                        </Micon>
                        <MenuH6>Gifts</MenuH6>
                    </MenuLi>
                </MenuUl>
            </SideBox>

            <SideBox2>
                <Settings>SETTINGS</Settings>
                <SettingsUl>
                    <SettingsLi>
                        <Sicon>
                            <SettingsImage src={require("../../assets/images/healthicons_ui_user_profile_outline.svg").default} />
                        </Sicon>
                        <SettingsH6>Account</SettingsH6>
                    </SettingsLi>
                    <SettingsLi>
                        <Sicon>
                            <SettingsImage src={require("../../assets/images/clarity_wallet_line.svg").default} />
                        </Sicon>
                        <SettingsH6>Wallet</SettingsH6>
                    </SettingsLi>
                    <SettingsLi>
                        <Sicon>
                            <SettingsImage src={require("../../assets/images/healthicons_ui_user_profile_outline.svg").default} />
                        </Sicon>
                        <SettingsH6>Help & Support</SettingsH6>
                    </SettingsLi>
                </SettingsUl>
            </SideBox2>  
        </SideContainer>

    </>
  )
}

export default Header;

const HeaderTag = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: end;
    width: 95%;
    margin: 0 auto;
    height: 120px;
`;
const LogoContainer = styled.h1``;
const LogoA = styled.a``;
const LogoImg = styled.img`
    width: 100%;
    display: block;
`;
const TopCantainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 75%;
`;
const TopUl = styled.ul`
    display: flex;
    justify-content: space-between;
    width: 45%;
`;
const TopLi = styled.li`

`;
const TopA = styled(Link)`
    font-size: 20px;
    font-weight: normal;
    color: #8D8989;
    &:hover{
        color: #000;
        border-bottom: 3px solid #000;
    }
`;

const RightDiv = styled.div`
    display: flex;
    width: 12%;
    justify-content: space-between;
    align-items: center;
`;
const Span1 = styled.span`
    display: inline-block;
    width: 40px;
`;
const Span2 = styled.span`
    display: inline-block;
    width: 50px;
`;
const Span1img = styled.img`
    width: 100%;
    display: block;
    border-radius: 30px;
`;
const Span2img = styled.img`
    width: 100%;
    display: block;
    border-radius: 30px;
`;



const SideContainer = styled.section`
    width: 18%;
    padding-left: 30px;
    padding-top: 70px;
`;
const SideBox = styled.section``;

const MainMenu = styled.h4`
    color: #8D8989;
    font-weight: bold;
    margin-bottom: 15px;
`;
const MenuUl = styled.ul`
    padding-left: 15px;
`;
const MenuLi = styled.li`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`;
const Micon = styled.span`
    margin-right: 15px;
    &:hover{
        color: #000;
        font-weight: bold;
    }
`;
const MenuImage = styled.img`
    width: 100%;
    display: block;
`;
const MenuH6 = styled.h6`
    margin: 0;
    font-size: 15px;
    &:hover{
        color: #000;
        font-weight: bold;
    }
`;


const SideBox2 = styled.section`
    margin-top: 60px;
`;

const Settings = styled.h4`
    color: #8D8989;
    font-weight: bold;
    margin-bottom: 15px;
`;
const SettingsUl = styled.ul`
    padding-left: 15px;
`;
const SettingsLi = styled.li`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`;
const Sicon = styled.span`
    margin-right: 15px;
`;
const SettingsImage = styled.img`
    width: 100%;
    display: block;
`;
const SettingsH6 = styled.h6`
    margin: 0;
    font-size: 15px;
    &:hover{
        color: #000;
        font-weight: bold;
    }
`;



