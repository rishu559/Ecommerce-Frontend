import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons'
import React, { useState } from 'react'
import styled from 'styled-components'
import {sliderItems} from "../data";

const Container = styled.div`
    width: 100%;
    height:100vh;
    display: flex;
    /* background-color: coral; */
    position: relative;
    overflow: hidden;
`
const Arrow = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top:0;
    bottom: 0;
    left: ${props=> props.direction==="Left" && "10px"};
    right: ${props=> props.direction==="Right" && "10px"};
    cursor:pointer;
    margin:auto;
    opacity: 0.5;
    z-index: 2;
`
const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transition: all 1s ease;
    transform: translateX(${props=>props.index * -100}vw);
`
const Slide=styled.div`
    width: 100vw;
    height: 100vh;
    display: flex; 
    align-items :center ;
    background-color: #${props=>props.bg};
`
const ImgContainer = styled.div`
    height: 100%;
    flex: 1; 
`
const Image = styled.img`
    width: auto;
    height: 100%;
`
const InfoContainer = styled.div`
    flex: 1;
    padding:50px;
    padding-left: 100px;
`

const Title = styled.h1`
    margin :0;
    font-size: 70px;
`
const Description = styled.p`
    margin: 50px 0px;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 3px;
`
const Button = styled.button`
    padding: 10px;
    border-radius: 10px;
    font-size: 20px;
    background-color: transparent;
    cursor: pointer;
    &:hover{
        background-color:#5adbb5;
    }
`

const Slider = () => {
    function handleClick(direction){
        if(direction==="left"){
            setslideIndex(slideIndex>0 ?slideIndex-1:2);
        }
        else{
            setslideIndex(slideIndex<2 ? slideIndex+1:0);
        }

    }

    const [slideIndex,setslideIndex] = useState(0);
  return (
    <Container>
        <Arrow direction = "Left" onClick={()=>handleClick("left")}>
            <ArrowLeftOutlined/>
        </Arrow>
        <Wrapper index = {slideIndex}>
            {sliderItems.map((item)=>(
                <Slide bg={item.bg} num="1" >
                <InfoContainer>
                    <Title>{item.title}</Title>
                    <Description>{item.desc}</Description>
                    <Button>SHOP NOW</Button>
                </InfoContainer>
                <ImgContainer>
                    <Image src={item.img}></Image>
                </ImgContainer>
            </Slide>
            ))}
        </Wrapper>
        <Arrow direction = "Right" onClick={()=>handleClick("right")}> 
            <ArrowRightOutlined/>
        </Arrow>
    </Container>
  )
}

export default Slider