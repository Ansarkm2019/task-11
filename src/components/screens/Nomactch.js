import React from "react";
import styled from "styled-components";
import Header from "../includes/Header";

function Nomactch() {
	return (
		<>
			<Container>
				<Header />
				<Noicon>
					<NoImage
						src={require("../../assets/images/notfound.png")}
					/>
				</Noicon>
			</Container>
		</>
	);
}

export default Nomactch;

const NoImage = styled.img`
	width: 100%;
	display: block;
`;

const Container = styled.section`
	display: flex;
	justify-content: start;
	flex-wrap: wrap;
`;
const Noicon = styled.section`
	width: 70%;
	margin: 0 auto;
`;
