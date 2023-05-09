import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #f6f8fa;
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
    display: flex;
    flex-direction: column;
`
const Title = styled.h1`
    margin: 0;
    color: #555555;
    font-size: 30px;
    font-weight: 700;
`
const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    /* flex-wrap: wrap; */
`
const Input = styled.input`
    flex: 1;
    width: 80%;
    margin:10px  0px;
    padding: 15px;
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
    margin: 20px 0px;
    display: flex;
    justify-content: center;
    align-content: center;
`
const Link = styled.a`
    font-size: 12px;
    color: Teal;
    cursor: pointer;
    text-decoration: underline;
    &:hover{
        color: black;
    }
`
const Bottom = styled.div`
    padding:0px 10px;
    display: flex;
    justify-content: space-between;
`
const Login = () => {
  return (
    <Container>
        <Wrapper>
        <Centerer>
        <Title>SIGN IN </Title>
        </Centerer>
        <Form>
          <Input placeholder="UserName"></Input>
          <Input placeholder="Password"></Input>
        </Form>
        <Centerer>
            <Button>LOGIN</Button>
        </Centerer>
        <Bottom>
            <Link>DONT REMEMBER THE PASSWORD ?</Link>
            <Link>CREATE AN ACCOUNT</Link>
        </Bottom>
        
      </Wrapper>
    </Container>
  )
}

export default Login