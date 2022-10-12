import React from 'react'
import styled from 'styled-components';

function Header() {
  return (
    <>
    <SideContainer>
        <LogoContainer>
            <LogoImg src={require("../../assets/logo.svg").default} />
        </LogoContainer>
        <SideBox>
            <MainMenu>MAIN MENU</MainMenu>
            <MenuUl>
                <MenuLi>
                    <Micon>
                        <MenuImage src={require("../../assets/akar_icons_dashboard.svg").default} />
                    </Micon>
                    <MenuH6>Dashboard</MenuH6>
                </MenuLi>
                <MenuLi>
                    <Micon>
                        <MenuImage src={require("../../assets/fluent_food_cake_20_regular.svg").default} />
                    </Micon>
                    <MenuH6>Catering status</MenuH6>
                </MenuLi>
                <MenuLi>
                    <Micon>
                        <MenuImage src={require("../../assets/bx_bar_chart_square.svg").default} />
                    </Micon>
                    <MenuH6>Guest traffic</MenuH6>
                </MenuLi>
                <MenuLi>
                    <Micon>
                        <MenuImage src={require("../../assets/ant_design_gift_outlined.svg").default} />
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
                        <SettingsImage src={require("../../assets/akar_icons_dashboard.svg").default} />
                    </Sicon>
                    <SettingsH6>Account</SettingsH6>
                </SettingsLi>
                <SettingsLi>
                    <Sicon>
                        <SettingsImage src={require("../../assets/clarity_wallet_line.svg").default} />
                    </Sicon>
                    <SettingsH6>Wallet</SettingsH6>
                </SettingsLi>
                <SettingsLi>
                    <Sicon>
                        <SettingsImage src={require("../../assets/healthicons_ui_user_profile_outline.svg").default} />
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

const SideContainer = styled.section`
    width: 18%;
    padding-left: 30px;
`;
const LogoContainer = styled.h1`
    margin: 65px 0 40px;    
`;
const LogoImg = styled.img``;
const SideBox = styled.section``;

const MainMenu = styled.h5``;
const MenuUl = styled.ul`
    padding-left: 15px;
`;
const MenuLi = styled.li`
    display: flex;
    align-items: center;
`;
const Micon = styled.span``;
const MenuImage = styled.img``;
const MenuH6 = styled.h6`
    margin: 0;
`;


const SideBox2 = styled.section`
    margin-top: 30px;
`;

const Settings = styled.h5``;
const SettingsUl = styled.ul`
    padding-left: 15px;
`;
const SettingsLi = styled.li`
    display: flex;
    align-items: center;
`;
const Sicon = styled.span``;
const SettingsImage = styled.img``;
const SettingsH6 = styled.h6`
    margin: 0;
`;
