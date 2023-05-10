import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import mobile from '../Responsive'

const Container = styled.div`
    flex:1;
    margin:5px;
    /* min-width: 20vw; */
    height:350px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f5fbfd;
    position: relative;
    ${mobile({flex:"1",height:"20vh",minWidth:"40%"} )};
`
const Circle = styled.div`
    width: 200px;
    height: 200px;
    border-radius:50%;
    background-color: white;
    position: absolute;
`
const Image = styled.img`
    height: 75%;
    z-index: 2;
    ${mobile({height:"95%"} )};
    object-fit: cover;
`
const Info = styled.div`
    opacity: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgb(0,0,0,0.2);
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: center;

    ${Container}:hover & {
        opacity: 1;
        transition: all 0.5s ease;
    }
`
const Icon = styled.div`
    margin-left:10px;
    width:40px;
    height: 40px;
    border-radius: 50%;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover{
        background-color: #e9f5f5;
        cursor: pointer;
        transform: scale(1.1);
        transition: all 0.3s ease;
    }
`


const Product = ({item}) => {
  return (
    <Container>
        {/* <Circle></Circle> */}
        <Image src={item.img}/>
        <Info>
            <Icon>
                <ShoppingCartOutlined/>
            </Icon>
            <Icon>
                <SearchOutlined/>
            </Icon>
            <Icon>
                <FavoriteBorderOutlined/>
            </Icon>
        </Info>
    </Container>
  )
}

export default Product