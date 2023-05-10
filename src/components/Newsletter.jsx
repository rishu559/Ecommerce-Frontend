
import { Send } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import mobile from '../Responsive';

const Container = styled.div`
    height: 60vh;
    background-color: #fcf5f5;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    ${mobile({height:"40vh"} )};
`;
const Title = styled.h1`
    margin:0;
    font-size: 70px;
    margin-bottom: 20px;
    ${mobile({fontSize:"40px",marginBottom:"15px"} )};
`;
const Description = styled.p`
    margin:0px;
    font-size: 24px;
    font-weight: 300;
    margin-bottom: 20px;
    ${mobile({fontSize:"18px",marginBottom:"15px",width:"80vw",textAlign:"center"} )};
`;
const InputContainer = styled.div`
    width: 50%;
    height: 40px;
    /* background-color: white; */

    /* border:1px solid gray; */
    display: flex;
    justify-content: space-between;
    /* align-items: center; */
    gap: 5px;
    
`;
const Input = styled.input`
    border:0.1px solid gray;
    border-radius: 20px;
    padding-left: 20px; 
    flex:8;
    /* outline:0.1px solid gray; */
    outline:none;
`;
const Button = styled.button`
    flex:1;
    border-radius: 20px;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-left: 15px;
    border:none;

    background-color: teal;
    color:white;
`;

const Newsletter = () => {
  return (
    <Container>
        <Title>Newsletter</Title>
        <Description>Get Timely Update For Your Favourite Products.</Description>
        <InputContainer>
            <Input placeholder='Your Email'/>
            <Button>
                <Send />
            </Button>
        </InputContainer>

    </Container>
  )
}

export default Newsletter