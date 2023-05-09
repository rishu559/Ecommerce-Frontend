import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #f6f8fa;
    /* background:linear-gradient(rgba(0, 0, 0,0.8),rgba(0,0,0,0.8)), url("https://images.unsplash.com/photo-1481437156560-3205f6a55735?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=895&q=80"); */
    margin: 0;
    padding:0;
    display: flex;
    align-items: center;
    justify-content: center;
    background-size: contain;
`
const Wrapper = styled.div`
    width:40%;
    padding: 20px;
    /* border: 1px solid teal; */
    background-color: rgb(0,0,0,0,0.7);
    border-radius: 15px;
    box-shadow: 0px 0px 5px gray;
`
const Title = styled.h1`
    margin: 0;
    color: #555555;
    font-size: 30px;
    font-weight: 700;
`
const Form = styled.form`
    display: flex;
    /* flex-direction: column; */
    justify-content: space-between;
    flex-wrap: wrap;
`
const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin:20px 10px 0px 0px;
    padding: 10px;
    border:1px solid gray;
    border-radius: 5px;
    font-size: 16px;
`
const  Agreement = styled.span`
    font-size: 16px;
    margin: 20px 0px;
`
const Button = styled.button`
    width:40%;
    border: none;
    padding: 10px;
    margin: 0px auto;
    background-color: teal;
    color: white;
    border-radius: 5px;
    font-size: 18px;
    cursor: pointer;
`
const Centerer = styled.div`
    display: flex;
    justify-content: center;
    align-content: center;
`

const Register = () => {
  return (
    <Container>
        <Wrapper>
        <Centerer>
            <Title>CREATE AN ACCOUNT</Title>
        </Centerer>
        <Form>
          <Input placeholder="First Name"></Input>
          <Input placeholder="Last Name"></Input>
          <Input placeholder="UserName"></Input>
          <Input placeholder="Email"></Input>
          <Input placeholder="Password"></Input>
          <Input placeholder="Confirm Password"></Input>
          <Agreement>By creating an account, I consent to the processing of personal data in accordance with the <b>PRIVACY POLICY</b></Agreement>
        </Form>
        <Centerer>
            <Button>REGISTER</Button>
        </Centerer>
      </Wrapper>
    </Container>
  )
}

export default Register