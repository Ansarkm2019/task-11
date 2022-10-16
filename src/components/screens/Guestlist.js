import React, { useState } from 'react'
import styled from 'styled-components'
import "../../App.css"



function Guestlist() {
        
        const [name, setname] = useState({name: "Aisyah Namanya", name2: "Cak Handoko"})
  return (
    <>
        <GuestListContainer>
            <GuestList className="color1">
                <GuestLeft>
                    <GuestPicSpan>
                        <GuestPic src={require("../../assets/images/rectangle_20695.jpg")} />
                    </GuestPicSpan>
                    <GuestNameDiv>
                        <GuestNameInput type="text" value={name.name} onChange={(e)=> setname(e.target.value)} />
                        <GuestTimeP>2 minute ago</GuestTimeP>
                    </GuestNameDiv>
                </GuestLeft>

                <GuestRight className="click" >
                    <EditSpan className="h">
                        <Editimg src={require("../../assets/images/fa_solid_pen.svg").default} />
                    </EditSpan>
                    <DeleteSpan className="h">
                        <DeleteImg src={require("../../assets/images/bxs_trash_alt.svg").default} />
                    </DeleteSpan>
                    <DotsSpan id="show_hide1" className="show" >
                        <DotsImg src={require("../../assets/images/bi_three_dots_vertical.svg").default} />
                    </DotsSpan>
                </GuestRight>
            </GuestList>

            <GuestList className="color1 color2">
                <GuestLeft>
                    <GuestPicSpan>
                        <GuestPic src={require("../../assets/images/rectangle_20696.jpg")} />
                    </GuestPicSpan>
                    <GuestNameDiv>
                        <GuestNameInput type="text" value={name.name2} onChange={(e)=> setname(e.target.value)} />
                        <GuestTimeP>2 minute ago</GuestTimeP>
                    </GuestNameDiv>
                </GuestLeft>

                <GuestRight className={"click"} >
                    <EditSpan className="h">
                        <Editimg src={require("../../assets/images/fa_solid_pen.svg").default} />
                    </EditSpan>
                    <DeleteSpan className="h">
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
                        <GuestNameInput type="text" value={name.name} onChange={(e)=> setname(e.target.value)} />
                        <GuestTimeP>2 minute ago</GuestTimeP>
                    </GuestNameDiv>
                </GuestLeft>

                <GuestRight className={"click"} >
                    <EditSpan className="h">
                        <Editimg src={require("../../assets/images/fa_solid_pen.svg").default} />
                    </EditSpan>
                    <DeleteSpan className="h">
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
    width: 36%;
    margin-top: 30px;
    @media all and (max-width: 1080px){
        width: 65%;
    }
    @media all and (max-width: 980px){
        width: 75%;
    }
    @media all and (max-width: 768px){
        width: 100%;
    }
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
        background-color: #D2A2F7;
    }
    @media all and (max-width: 1280px){
        margin-bottom: 25px;
    }
`;



const GuestLeft = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 35px 0 35px 30px;
    border-radius: 17px;
    background-color: #fff;
    @media all and (max-width: 1280px){
        padding-left: 15px;
        justify-content: flex-start;
        width: 85%;
    }
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
const GuestNameDiv = styled.div`
    width: 70%;
`;
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
    @media all and (max-width: 1380px){
        display: none;
    }
    @media all and (max-width: 1080px){
        display: block;
    }
`;
const Editimg = styled.img`
    width: 100%;
    display: block;
`;
const DeleteSpan = styled.span`
    margin-right: 10px;
    @media all and (max-width: 1380px){
        display: none;
    }
    @media all and (max-width: 1080px){
        display: block;
    }
`;
const DeleteImg = styled.img`
    width: 100%;
    display: block;
`;
const DotsSpan = styled.span`
    margin-right: 10px;
    @media all and (max-width: 1380px){
        width: 30px;
    }
`;
const DotsImg = styled.img`
    width: 100%;
    display: block;
`;