import { Badge } from '@material-ui/core';
import { Search, ShoppingCartOutlined } from '@material-ui/icons';
import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    margin : 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
`
const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  border:0.5px solid lightgray;
  margin-left: 55px;
  padding: 5px;
  padding-left: 15px;
  border-radius: 55px;
`
const Input = styled.input`
  margin-right:5px;
  border:none;
  outline:none;
`

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  margin: 0%;
  font-weight: bold;
`
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const MenuItem = styled.div`
  font-size: 14px;
  margin-left: 15px;
  margin-right: 10px;
  cursor: pointer;
`
const Navbar = () => {
  return (
    <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input/>
            <Search style={{color:"grey",fontSize:"16px"}}/>
          </SearchContainer>
        </Left>
        <Center><Logo><img src="https://assets.turbologo.com/editor/static/media/logo_cache-1.c69ad8a6228fcd55f776.svg"></img></Logo>    
        </Center>
        <Right>
          <MenuItem>Register</MenuItem>
          <MenuItem>Sign-in</MenuItem>
          <MenuItem>
            <Badge badgeContent={4} color="primary">
              <ShoppingCartOutlined/>
            </Badge>
          </MenuItem>

        </Right>

    </Wrapper>
  )
}

export default Navbar