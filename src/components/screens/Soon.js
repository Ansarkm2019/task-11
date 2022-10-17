import React from "react";
import styled from "styled-components";
import Header from "../includes/Header";

function Soon() {
	return (
		<>
			<Container>
				<Header />
				<Noicon>
					<NoImage
						src={require("../../assets/images/soon.jpg")}
					/>
				</Noicon>
			</Container>
		</>
	);
}

export default Soon;

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
