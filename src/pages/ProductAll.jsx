import React, { useEffect,useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProductCard from '../components/ProductCard';
import { useSearchParams } from 'react-router-dom';


const ProductAll = () => {
  const [productList, setProductList] = useState([]);
  const [query,setQuery] = useSearchParams();

  const getProducts= async() => {
    let searchQuery = query.get("q") || "";
    let url = `http://localhost:4000/products?q=${searchQuery}`;
    let response = await fetch(url);
    let data = await response.json();
    setProductList(data);
  };


  useEffect(()=>{
    getProducts();
  },[query]);

  return (
    <div>
      <Container style={{maxWidth: "1200px", margin: "0 auto"}}>
        <Row>
          {productList.map((menu) => (
            <Col key={menu.id} xs={12} md={3} ><ProductCard item={menu}/></Col>
          ))}
        
          
         
        </Row>
      </Container>
    </div>
  )
}

export default ProductAll
