import { Facebook, Instagram, MailOutline, Phone, Pinterest, RoomOutlined, Twitter } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'


const Container = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    margin: 20px;
`
const Left = styled.div`
  flex:1;
  display: flex;
  flex-direction: column;
`
const Logo = styled.h1`
  margin: 0px;
`
const Desc = styled.p`
  margin:20px 0px;
`
const SocialContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`
const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #${props=>props.color};
  color:white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`

const Middle = styled.div`
  flex:1;
  padding: 20px; 
`
const Title = styled.h3`
  margin: 0;
  margin-bottom: 20px;
`
const List = styled.ul`
  list-style: none;
  padding: 0;
  margin:0;
  display: flex;
  flex-wrap: wrap;
`
const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`
const Right = styled.div`
  flex:1;
  padding: 20px;
`
const ContactItem = styled.p`
  display: flex;
  align-items: center;
  gap:10px;
`
const Payment = styled.img`
  width:50%;
`
const Footer = () => {
  return (
    <Container>
        <Left>
          <Logo><img src="https://assets.turbologo.com/editor/static/media/logo_cache-1.c69ad8a6228fcd55f776.svg" alt="Logo"></img></Logo>
          <Desc>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas ab quod neque ducimus aperiam beatae cumque pariatur hic corrupti aliquid consequuntur possimus nihil ex, labore, nam alias cum dignissimos consequatur! Incidunt sed illo voluptatem tenetur ipsa aspernatur quia iste alias!
          </Desc>
          <SocialContainer>
            <SocialIcon color="3B5999">
              <Instagram/>
            </SocialIcon>
            <SocialIcon color="E4405F">
              <Facebook/>
            </SocialIcon>
            <SocialIcon color="55ACEE">
              <Twitter/>
            </SocialIcon>
            <SocialIcon color="E60023">
              <Pinterest/>
            </SocialIcon>
          </SocialContainer>
        </Left>

        <Middle>
          <Title>Useful Links</Title>
          <List>
            <ListItem>Home</ListItem>
            <ListItem>Cart</ListItem>
            <ListItem>Man Fashion</ListItem>
            <ListItem>Woman Fashion</ListItem>
            <ListItem>Accesories</ListItem>
            <ListItem>My Account</ListItem>
            <ListItem>Wishlist</ListItem>
            <ListItem>Terms & Conditions</ListItem>
          </List>
        </Middle>
        <Right>
          <Title>Contact</Title>
          <ContactItem><RoomOutlined/>
            622 Dixie Path , South Tobinchester 98362
          </ContactItem>
          <ContactItem><Phone/>
            +14 987 342 7532
          </ContactItem>
          <ContactItem><MailOutline/>
            contact@lama.dev
          </ContactItem>
          <Payment src="https://i.ibb.co/Qfvn4z6/payment.png"/>
        </Right>
    </Container>
  )
}

export default Footer