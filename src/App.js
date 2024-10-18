import logo from './logo.svg';
import './App.css';
import * as Styled from './App.styles.jsx'

function App() {



  const products = [
      {
      name: 'Product 1',
      description: 'Description of product 1',
      price: '$10.99'
      },
      {
      name: 'Product 2',
      description: 'Description of product 2',
      price: '$24.99'
      },
      {
      name: 'Product 3',
      description: 'Description of product 3',
      price: '$15.49'
      },
    ];
    
    return (
      <div>
      {products.map((product, index) => (
      <Styled.ProductContainer key={index}>
      <Styled.ProductName>{product.name}</Styled.ProductName>
      <div>{product.description}</div>
      <Styled.ProductPrice>{product.price}</Styled.ProductPrice>
      </Styled.ProductContainer>
      ))}
      </div>
      );
}

export default App;
