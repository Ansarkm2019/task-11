import React from 'react'
import styled from 'styled-components'
import "../../App.css"


function Guestlist() {
    window.addEventListener = ("load", (event) => {
        document.getElementById("show_hide1").addEventListener("click", () => {
            document.querySelector("li.color").classList.toggle("coloractive");
            // document.getElementsByClassName("show").classList.addClass("hide");
        });
        document.getElementById("show_hide2").addEventListener("click", () => {
            document.querySelector("li.color2").classList.toggle("coloractive");
            // document.getElementsByClassName("show").classList.addClass("hide");
        });
        document.getElementById("show_hide3").addEventListener("click", () => {
            document.querySelector("li.color3").classList.toggle("coloractive");
            // document.getElementsByClassName("show").classList.addClass("hide");
        });
    });
  return (
    <>
        <GuestListContainer>
            <GuestList className="color1 color">
                <GuestLeft>
                    <GuestPicSpan>
                        <GuestPic src={require("../../assets/images/rectangle_20695.jpg")} />
                    </GuestPicSpan>
                    <GuestNameDiv>
                        <GuestNameInput type={"text"} value={"Aisyah Namanya"} />
                        <GuestTimeP>2 minute ago</GuestTimeP>
                    </GuestNameDiv>
                </GuestLeft>

                <GuestRight className="click" >
                    <EditSpan>
                        <Editimg src={require("../../assets/images/fa_solid_pen.svg").default} />
                    </EditSpan>
                    <DeleteSpan>
                        <DeleteImg src={require("../../assets/images/bxs_trash_alt.svg").default} />
                    </DeleteSpan>
                    <DotsSpan id="show_hide1" className="show">
                        <DotsImg src={require("../../assets/images/bi_three_dots_vertical.svg").default} />
                    </DotsSpan>
                </GuestRight>
            </GuestList>

            <GuestList className="color1 color2">
                <GuestLeft>
                    <GuestPicSpan>
                        <GuestPic src={require("../../assets/images/rectangle_20695.jpg")} />
                    </GuestPicSpan>
                    <GuestNameDiv>
                        <GuestNameInput type={"text"} value={"Aisyah Namanya"} />
                        <GuestTimeP>2 minute ago</GuestTimeP>
                    </GuestNameDiv>
                </GuestLeft>

                <GuestRight className={"click"} >
                    <EditSpan>
                        <Editimg src={require("../../assets/images/fa_solid_pen.svg").default} />
                    </EditSpan>
                    <DeleteSpan>
                        <DeleteImg src={require("../../assets/images/bxs_trash_alt.svg").default} />
                    </DeleteSpan>
                    <DotsSpan id="show_hide2" className="show">
                        <DotsImg src={require("../../assets/images/bi_three_dots_vertical.svg").default} />
                    </DotsSpan>
                </GuestRight>
            </GuestList>

            <GuestList className="color1 color3">
                <GuestLeft>
                    <GuestPicSpan>
                        <GuestPic src={require("../../assets/images/rectangle_20695.jpg")} />
                    </GuestPicSpan>
                    <GuestNameDiv>
                        <GuestNameInput type={"text"} value={"Aisyah Namanya"} />
                        <GuestTimeP>2 minute ago</GuestTimeP>
                    </GuestNameDiv>
                </GuestLeft>

                <GuestRight className={"click"} >
                    <EditSpan>
                        <Editimg src={require("../../assets/images/fa_solid_pen.svg").default} />
                    </EditSpan>
                    <DeleteSpan>
                        <DeleteImg src={require("../../assets/images/bxs_trash_alt.svg").default} />
                    </DeleteSpan>
                    <DotsSpan id="show_hide3" className="show">
                        <DotsImg src={require("../../assets/images/bi_three_dots_vertical.svg").default} />
                    </DotsSpan>
                </GuestRight>
            </GuestList>
        </GuestListContainer>
        
    </>
  )
}

export default Guestlist

const GuestListContainer = styled.ul`
    width: 40%;
    margin-top: 30px;

`;
const GuestList = styled.li`
    border-radius: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 15px;
    &:last-child{
        margin-bottom: 0;
    }
    :hover{
        box-shadow: 3px 5px 20px 10px #d1d1d1;
    }
`;



const GuestLeft = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 35px 0 35px 30px;
    border-radius: 17px;
    background-color: #fff;
`;
const GuestPicSpan = styled.span`
    display: inline-block;
    width: 50px;
    margin-right: 20px;
`;
const GuestPic = styled.img`
    width: 100%;
    display: block;
    border-radius: 30px;
`;
const GuestNameDiv = styled.div``;
const GuestNameInput = styled.input`
    font-size: 16px;
    font-weight: bold;
`;
const GuestTimeP = styled.p``;



const GuestRight = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-right: 15px;
`;
const EditSpan = styled.span`
    margin-right: 10px;
`;
const Editimg = styled.img`
    width: 100%;
    display: block;
`;
const DeleteSpan = styled.span`
    margin-right: 10px;
`;
const DeleteImg = styled.img`
    width: 100%;
    display: block;
`;
const DotsSpan = styled.span`
    margin-right: 10px;
`;
const DotsImg = styled.img`
    width: 100%;
    display: block;
`;