import styled from "styled-components"

export const ProductName = styled.div`
font-size: 20px;
font-weight: bold;
`

export const ProductPrice = styled.div`
color: red;

&:hover {
color: green;
}
`

export const ProductContainer = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
padding: 10px;
width: 100%;
`