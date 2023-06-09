
import React from 'react'
import styled from 'styled-components'
import Announcement from "../components/Announcement"
import Navbar from "../components/Navbar"
import Products from "../components/Products"
import Newsletter from "../components/Newsletter"
import Footer from "../components/Footer"

const Container = styled.div``
const Title = styled.h1`
margin: 20px;
`
const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
`
const Filter = styled.div`
    margin: 20px 40px;
`
const FilterText = styled.span`
    font-size: 20px;
    font-weight: 700;
    margin-right: 20px;
`
const Select = styled.select`
    padding: 10px;
    margin-right: 20px;
    border-radius: 3px;
`
const Option = styled.option`  
`
const ProductList = () => {
  return (
    <Container>
        <Navbar/>
        <Announcement />
        <Title>Dresses</Title>
        <FilterContainer>
            <Filter>
                <FilterText>Filter</FilterText>
                <Select>
                    <Option disabled selected>Color</Option>
                    <Option>Blue</Option>
                    <Option>Green</Option>
                    <Option>Pink</Option>
                    <Option>Magenta</Option>
                    <Option>Yellow</Option>
                </Select>
                <Select>
                    <Option disabled selected>Size</Option>
                    <Option>XS</Option>
                    <Option>S</Option>
                    <Option>M</Option>
                    <Option>L</Option>
                    <Option>XL</Option>
                    <Option>XXL</Option>
                    <Option>XXXL</Option>
                </Select>
            </Filter>
            <Filter>
                <FilterText>Sort</FilterText>
                <Select>
                    <Option disabled selected>Newest</Option>
                    <Option>Oldest</Option>
                    <Option>Price (asc)</Option>
                    <Option>Price (desc)</Option>
                </Select>
            </Filter>
        </FilterContainer>
        <Products/>
        <Newsletter/>
        <Footer/>
    </Container>
  )
}

export default ProductList