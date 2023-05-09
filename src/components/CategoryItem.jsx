import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    flex:1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    margin: 3px;
    height: 70vh;
    position: relative;
    text-align: center;
`
const Info = styled.div`
    position: absolute;
    top:0;
    left:0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const Image = styled.img`
    width    : 100%;
    height: 100%;
    object-fit: cover;
    opacity: 1;
    ${Container}:hover & {
        transition: all 0.5s ease;
        opacity: 0.8;
    };
`
const Title = styled.h1`
    color: white;
`
const Button = styled.button`
    padding: 10px;
    border-radius: 5px;
    font-size: 20px;
    border: 0.1px solid lightgray;
    border: none;
    color: white;
    font-weight: bold;
    background-color: teal;
    cursor: pointer;

    ${Container}:hover & {
        transition: all 0.5s ease;
        transform: scale(1.2);
    };
`
const CategoryItem = ({item}) => {
  return (
    <Container>
        <Image src ={item.img}/>
        <Info>
            <Title>{item.title}</Title>
            <Button>SHOP NOW</Button>
        </Info>
    </Container>
  )
}

export default CategoryItem