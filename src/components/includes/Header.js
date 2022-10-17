import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import Navbar from "./Navbar";

function Header() {
	return (
		<>
			<HeaderTag>
				<LogoContainer>
					<LogoA href="">
						<LogoImg
							src={
								require("../../assets/images/logo.svg")
									.default
							}
						/>
					</LogoA>
				</LogoContainer>
				<TopCantainer>
					<TopUl>
						<TopLi>
							<TopA
								className={({ isActive }) =>
									isActive ? "active" : ""
								}
								to="/"
							>
								Overview
							</TopA>
						</TopLi>
						<TopLi>
							<TopA
								className={({ isActive }) =>
									isActive ? "active" : ""
								}
								to="/guestlist"
							>
								Guestlist
							</TopA>
						</TopLi>
						<TopLi>
							<TopA
								className={({ isActive }) =>
									isActive ? "active" : ""
								}
								to="/graph"
							>
								Temporary traffic
							</TopA>
						</TopLi>
					</TopUl>

					<RightDiv>
						<Span1>
							<Span1img
								src={
									require("../../assets/images/bxs_bell.svg")
										.default
								}
							/>
						</Span1>
						<Span2>
							<Span2img
								src={require("../../assets/images/rectangle_20695.jpg")}
							/>
						</Span2>
					</RightDiv>

					<Burger>
						<Navbar />
						{/* <Burgerimg src={require("../../assets/images/icon-menu.png")} /> */}
					</Burger>
				</TopCantainer>
			</HeaderTag>

			<SideContainer>
				<SideBox>
					<MainMenu>MAIN MENU</MainMenu>
					<MenuUl>
						<MenuLi>
							<Micon>
								<MenuImage
									src={
										require("../../assets/images/akar_icons_dashboard.svg")
											.default
									}
								/>
							</Micon>
							<MenuH6
								className={({ isActive }) =>
									isActive ? "active" : ""
								}
								to="/"
							>
								Dashboard
							</MenuH6>
						</MenuLi>
						<MenuLi>
							<Micon>
								<MenuImage
									src={
										require("../../assets/images/fluent_food_cake_20_regular.svg")
											.default
									}
								/>
							</Micon>
							<MenuH6 to="/soon">
								Catering status
							</MenuH6>
						</MenuLi>
						<MenuLi>
							<Micon>
								<MenuImage
									src={
										require("../../assets/images/bx_bar_chart_square.svg")
											.default
									}
								/>
							</Micon>
							<MenuH6
								className={({ isActive }) =>
									isActive ? "active" : ""
								}
								to="/graph"
							>
								Guest traffic
							</MenuH6>
						</MenuLi>
						<MenuLi>
							<Micon>
								<MenuImage
									src={
										require("../../assets/images/ant_design_gift_outlined.svg")
											.default
									}
								/>
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
								<SettingsImage
									src={
										require("../../assets/images/healthicons_ui_user_profile_outline.svg")
											.default
									}
								/>
							</Sicon>
							<SettingsH6>Account</SettingsH6>
						</SettingsLi>
						<SettingsLi>
							<Sicon>
								<SettingsImage
									src={
										require("../../assets/images/clarity_wallet_line.svg")
											.default
									}
								/>
							</Sicon>
							<SettingsH6>Wallet</SettingsH6>
						</SettingsLi>
						<SettingsLi>
							<Sicon>
								<SettingsImage
									src={
										require("../../assets/images/healthicons_ui_user_profile_outline.svg")
											.default
									}
								/>
							</Sicon>
							<SettingsH6>Help & Support</SettingsH6>
						</SettingsLi>
					</SettingsUl>
				</SideBox2>
			</SideContainer>
		</>
	);
}

export default Header;

const HeaderTag = styled.header`
	display: flex;
	justify-content: space-between;
	align-items: end;
	width: 95%;
	margin: 0 auto;
	height: 120px;
	@media all and (max-width: 640px) {
		margin-left: 100px;
		margin-right: 15px;
		justify-content: end;
	}
	@media all and (max-width: 360px) {
		margin-left: 55px;
	}
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
	@media all and (max-width: 980px) {
		width: 69%;
	}
	@media all and (max-width: 768px) {
		justify-content: flex-end;
	}
	@media all and (max-width: 640px) {
		width: 15%;
	}
`;
const TopUl = styled.ul`
	display: flex;
	justify-content: space-between;
	width: 45%;
	@media all and (max-width: 1380px) {
		width: 50%;
	}
	@media all and (max-width: 1080px) {
		width: 60%;
	}
	@media all and (max-width: 980px) {
		width: 75%;
	}
	@media all and (max-width: 768px) {
		display: none;
	}
`;
const TopLi = styled.li``;
const TopA = styled(NavLink)`
	font-size: 20px;
	font-weight: normal;
	color: #8d8989;
	&:hover {
		color: #000;
		border-bottom: 3px solid #000;
	}
`;

const RightDiv = styled.div`
	display: flex;
	width: 12%;
	justify-content: space-between;
	align-items: center;
	@media all and (max-width: 1280px) {
		width: 15%;
	}
	@media all and (max-width: 980px) {
		width: 20%;
	}
	@media all and (max-width: 640px) {
		display: none;
	}
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

const Burger = styled.div`
	display: none;
	width: 35px;
	@media all and (max-width: 640px) {
		display: block;
	}
`;
// const Burgerimg = styled.img`
//     width: 100%;
//     display: block;
// `;

const SideContainer = styled.section`
	width: 18%;
	padding-left: 30px;
	padding-top: 70px;
	@media all and (max-width: 1280px) {
		padding-left: 15px;
	}
	@media all and (max-width: 1080px) {
		padding-left: 20px;
		width: 20%;
	}
	@media all and (max-width: 980px) {
		width: 25%;
	}
	@media all and (max-width: 768px) {
		width: 30%;
		background-color: #f9f8f8;
		margin-top: 10px;
	}
	@media all and (max-width: 640px) {
		display: none;
	}
`;
const SideBox = styled.section``;

const MainMenu = styled.h4`
	color: #8d8989;
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
	&:hover {
		color: #000;
		font-weight: bold;
	}
`;
const MenuImage = styled.img`
	width: 100%;
	display: block;
`;
const MenuH6 = styled(NavLink)`
	margin: 0;
	font-size: 15px;
	&:hover {
		color: #000;
		font-weight: bold;
	}
`;

const SideBox2 = styled.section`
	margin-top: 60px;
`;

const Settings = styled.h4`
	color: #8d8989;
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
	&:hover {
		color: #000;
		font-weight: bold;
	}
`;
