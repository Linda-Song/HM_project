import React, { useEffect, useState } from 'react';
import { Container, Row, Col ,Button, ButtonGroup} from 'react-bootstrap'; 
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
  let { id } = useParams();
  const [product, setProduct] = useState(null);

  const getProductDetail = async () => {
    let url = `https://my-json-server.typicode.com/Linda-Song/HM_project/products/${id}`;
    let response = await fetch(url);
    let data = await response.json();
    setProduct(data);
  };

  useEffect(() => {
    getProductDetail();
  }, []);

  return (
    <Container className="mt-5" >
      <Row>
        <Col  className="product-img" xs={12} md={7}>
          <img src={product?.img} alt={product?.title} style={{ width: "100%" }} />
        </Col>
        <Col className='product-info' xs={12} md={5}>
          <div className='product-info_detail'>
            <h3>{product?.title}</h3>
            <p >₩{product?.price}</p>
             <p>
            {product?.choice === true ? "✨ Conscious choice" : ""}
          </p>
          
          <ButtonGroup className='product-size'>
            <Button variant="outline-dark">S</Button>
            <Button variant="outline-dark">M</Button>
            <Button variant="outline-dark">L</Button>
          </ButtonGroup>
        
         
          <button className="btn btn-danger mt-4 w-100">ADD</button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetail;