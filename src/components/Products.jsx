import React from 'react'
import styled from 'styled-components'
import { popularProducts } from '../data'
import Product from './Product'
import mobile from '../Responsive'

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    width:100vw;

    ${mobile({flexWrap: "wrap"} )};
`
const Products = () => {
  return (
    <Container>
        {
            popularProducts.map((item)=>(
                <Product key={item.id} item={item}>

                </Product>
            ))
        }

    </Container>
  )
}

export default Products