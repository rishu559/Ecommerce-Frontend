import React from 'react'
import styled from 'styled-components'
import CategoryItem from './CategoryItem'
import { categories } from '../data'
import mobile from '../Responsive'

const Container = styled.div`
    display: flex;
    justify-content: space-around;
    padding: 20px;
    ${mobile({flexDirection:"column",padding:"0px"} )};
`

const Categories = () => {
  return (
    <Container>
        {
            categories.map((item)=>(
                <CategoryItem key={item.id} item={item} />
            ))
        }
    </Container>
  )
}

export default Categories