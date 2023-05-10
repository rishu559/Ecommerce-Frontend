import React from 'react'
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Newsletter from '../components/Newsletter';
import styled from 'styled-components';
import { Add, Remove } from '@material-ui/icons';

const Container = styled.div`
    background-color: #fafaeb;
`
const Wrapper = styled.div``
const Top = styled.div``
const Title = styled.div`
    text-align: center;
`
const TitleText = styled.h1`
    font-size: 3rem;
    font-weight: 300;
    margin: 10px 0px;
`
const Middle = styled.div`
    display: flex;
    justify-content: space-between;
    margin:20px 20px;
    align-items: center;
`
const Button = styled.button`
    padding: 10px;
    border-radius: 3px;
    font-size: 16px;
    border:0.1px solid ;
    color:${props=>props.col};
    font-weight: bold;
    background-color: ${props=>props.bg};;
    cursor: pointer;

    &:hover {
        transition: all 0.5s ease;
        box-shadow: 0px 0px 10px black;
    };
`
const BagInfo = styled.div`
    width: 30%;
    display: flex;
    justify-content: center;
    align-items:center;
`
const Link = styled.a`
    padding-right: 25px;
    text-decoration: underline;
    cursor: pointer;
    font-size: 18px;
`
const Bottom = styled.div`
    display: flex;
    justify-content: center;
`
const Info = styled.div`
    flex:3;
`
const Product = styled.div`
    display: flex;
    justify-content: space-between;
`

const ProductDetail = styled.div`
    flex:2;
    display: flex;
    /* justify-content: center; */
    height: 30vh;
    padding: 20px;
    
`
const ImageContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`
const Image = styled.img`
    width: 200px;
    /* height:auto; */
`
const Details = styled.div`
    margin:0px 20px;
    padding:20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap:10px;
`
const ProductName = styled.span``
const ProductID = styled.span``
const ProductSize = styled.span``
const ProductColor = styled.div`
    width:20px;
    height:20px;
    border-radius:50%;
    background-color: ${props=>props.bg};
`


const PriceDetail = styled.div`
    flex:1;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`
const ProductAmountContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`
const ProductAmount = styled.span`
    font-size: 26px;
    margin:5px;
    width: 40px;
    text-align: center;
`
const ProductPrice = styled.div`
    font-size: 30px;
    font-weight: 200;
`
const Hr = styled.hr`
    background-color: #eee;
    border:none;
    height: 1px;
`

const Summary = styled.div`
    flex:1;
    border: 0.5px solid lightgray;
    border-radius: 20px;
    margin: 20px;
    padding:20px;
    height: 50vh;
`
const SummaryTitle = styled.h1`
    font-weight: 400;
    margin: 20px 0px 40px 0px;
`
const SummaryItem = styled.div`
    margin: 20px 0px;
    display: flex;
    justify-content: space-between;
    font-weight: ${props=>props.type === "total" && 800};
    font-size: ${props=>props.type === "total" && "24px"};
    
`
const SummaryItemText = styled.span`
    margin: 0px 10px;
`
const SummaryItemPrice = styled.span``
const SummaryButton = styled.button`
    width:100%;
    padding: 10px;
    border-radius: 20px;
    border:1px solid gray;
    margin: 20px 0px;
    font-size: 18px;
    background-color: black;
    color: white;
    font-weight: 500;
`

const Cart = () => {
  return (
    <Container>
        <Navbar />
        <Announcement/>
        <Wrapper>
            <Top>
                <Title>
                    <TitleText>YOUR BAG</TitleText>
                </Title>
                <Middle>
                    <Button bg="white" col = "black">CONTINUE SHOPPING</Button>
                    <BagInfo>
                        <Link>Shopping Bag(2)</Link>
                        <Link>Your Wishlist(0)</Link>
                    </BagInfo>
                    <Button col="white" bg = "black">CHECKOUT NOW</Button>
                </Middle>
            </Top>
            <Bottom>
                <Info>
                    <Product>
                        <ProductDetail>
                        <ImageContainer>
                            <Image src="https://rukminim1.flixcart.com/image/832/832/xif0q/shoe/d/m/z/-original-imagg7t26zdugnx8.jpeg?q=70"></Image>
                            </ImageContainer>
                            <Details>
                                <ProductName><b>Product: </b>JESSIE THUNDER SHOES</ProductName>
                                <ProductID><b>ID: </b>9392929922</ProductID>
                                <b>Color:</b><ProductColor bg="black"/>
                                <ProductSize><b>Size: </b>37.5</ProductSize>
                            </Details>
                        </ProductDetail>
                        <PriceDetail>
                            <ProductAmountContainer>
                                <Remove/>
                                <ProductAmount>2</ProductAmount>
                                <Add/>
                            </ProductAmountContainer>
                            <ProductPrice>$ 30</ProductPrice>
                        </PriceDetail>
                    </Product>
                    <Hr></Hr>
                    <Product>
                        <ProductDetail>
                        <ImageContainer>
                            <Image src="https://rukminim1.flixcart.com/image/832/832/xif0q/shoe/h/k/z/7-zm-2007-a-zixer-grey-original-imagpgqddrsxxbkh.jpeg?q=70"></Image>
                            </ImageContainer>
                            <Details>
                                <ProductName><b>Product: </b>Men Blitz Grey Sports Sandal</ProductName>
                                <ProductID><b>ID: </b>9339739737</ProductID>
                                <b>Color:</b><ProductColor bg="gray"/>
                                <ProductSize><b>Size: </b>37.5</ProductSize>
                            </Details>
                        </ProductDetail>
                        <PriceDetail>
                            <ProductAmountContainer>
                                <Remove/>
                                <ProductAmount>1</ProductAmount>
                                <Add/>
                            </ProductAmountContainer>
                            <ProductPrice>$ 70</ProductPrice>
                        </PriceDetail>
                    </Product>
                </Info>
                <Summary>
                    <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                    <SummaryItem>
                        <SummaryItemText>Subtotal</SummaryItemText>
                        <SummaryItemPrice>$ 80</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryItemText>Shipping Cost</SummaryItemText>
                        <SummaryItemPrice>$ 2.07</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryItemText>Discount</SummaryItemText>
                        <SummaryItemPrice>$ -2.07</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem type="total">
                        <SummaryItemText >Total</SummaryItemText>
                        <SummaryItemPrice>$ 80</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryButton>CHECKOUT NOW</SummaryButton>
                </Summary>
            </Bottom>
        </Wrapper>
        <Newsletter/>
        <Footer></Footer>
    </Container>
  )
}

export default Cart
