import React from 'react'
import styled from 'styled-components'
import Announcement from "../components/Announcement"
import Navbar from "../components/Navbar"
import Newsletter from "../components/Newsletter"
import Footer from "../components/Footer"
import { Add, Remove } from '@material-ui/icons'
const Container = styled.div``
const Wrapper = styled.div`
    padding: 20px;
    display: flex;
`
const ImageContainer = styled.div`
    flex: 1;
`
const Image= styled.img`
    width: 100%;
    height:90vh;
    object-fit: cover;
`
const InfoContainer = styled.div`
    flex: 1;
    padding: 0px 20px;
`
const Title = styled.h1`
    font-weight: 200;
`
const Description = styled.p`
    /* font-weight:00; */
    width:80%;
`
const Price = styled.span`
    font-weight:700;
    font-size: 30px;
`

const FilterContainer = styled.div`
    padding: 40px 40px 40px 0px;
    display: flex;
    width:50%;
    justify-content: space-between;
`
const Filter = styled.div`
    display: flex;
    align-items: center;
    
`
const FilterColorBox = styled.div`
    display: flex;
    gap: 7px;
`
const FilterTitle = styled.span`
    padding-right:10px ;
    font-size: 20px;
    font-weight: 300;
`
const FilterColor = styled.div`
    width:20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props=>props.color};
    cursor: pointer;
`

const FilterSize = styled.select`
    padding: 10px;
    border-radius: 3px;
`
const FilterSizeOption = styled.option``

const AddContainer = styled.div`
    display: flex;
    gap : 10px;
    width:50%;
    justify-content: space-between;
`
const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    
`
const Amount = styled.h2`
    margin:0px 5px;
    text-align: center;
    width:30px;
    height: 30;
    border-radius: 10px;
    border:1px solid teal;
`
const Button = styled.button`
    padding: 10px;
    border:2px solid teal;
    background-color: white;
    border-radius: 10px;
    font-weight: 500;
    font-size: 20px;
    cursor: pointer;

    &:hover{
        background-color: #004d4d;
        color: white;
        font-weight: 700;

    }
`
const Product = () => {
  return (
    <Container>
        <Navbar/>
        <Announcement/>
        <Wrapper>
            <ImageContainer>
                <Image src="https://rukminim1.flixcart.com/image/832/832/l4bn5ow0/shoe/q/f/8/6-rng-2021-blu-orng-40-bruton-blue-orange-original-imagf94gmk7nkayf.jpeg?q=70"></Image>
            </ImageContainer>
            <InfoContainer>
                <Title>BRUTON BELGANA</Title>
                <Description>Trendy Sports Running Shoes Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut architecto a maxime eaque optio natus nisi consequuntur ad, exercitationem officia corporis cumque voluptates laborum earum eveniet excepturi autem praesentium repellat in molestias eius! Molestias doloribus, quasi adipisci voluptatem laudantium ad!</Description>
                <Price>₹1399</Price>

                <FilterContainer>
                    <Filter>
                        <FilterTitle>Color</FilterTitle>
                        <FilterColorBox>
                            <FilterColor color="black"></FilterColor>
                            <FilterColor color="blue"></FilterColor>
                            <FilterColor color="yellow"></FilterColor>
                        </FilterColorBox>
                    </Filter>
                    <Filter>
                        <FilterTitle>Size</FilterTitle>
                        <FilterSize>
                            <FilterSizeOption>UK-5</FilterSizeOption>
                            <FilterSizeOption>UK-6</FilterSizeOption>
                            <FilterSizeOption>UK-7</FilterSizeOption>
                            <FilterSizeOption>UK-8</FilterSizeOption>
                            <FilterSizeOption>UK-9</FilterSizeOption>
                            <FilterSizeOption>UK-10</FilterSizeOption>
                            <FilterSizeOption>UK-12</FilterSizeOption>
                        </FilterSize>
                    </Filter>
                </FilterContainer>
                <AddContainer>
                    <AmountContainer>
                        <Remove color="primary"/>
                        <Amount>1</Amount>
                        <Add/>
                    </AmountContainer>
                    <Button>Add To Cart</Button>
                </AddContainer>
            </InfoContainer>

        </Wrapper>
        <Newsletter/>
        <Footer/>
    </Container>
  )
}

export default Product